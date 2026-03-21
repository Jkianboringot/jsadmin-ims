import express from "express";
import { db } from "./db.js";
import { cars } from "./schema.js";
import { eq } from "drizzle-orm";
import { numeric } from "drizzle-orm/pg-core";
import { dateDuration } from "drizzle-orm/gel-core";
const app = express();
const PORT = 3000;

const router = express.Router();

app.use(express.json());

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

router.get("/cars", async (req, res) => {
  const allCars = await db.select().from(cars);
  res.json(allCars);
});

router.post("/cars", async (req, res) => {
  const { make, model, year, price } = req.body;
console.log(req.body)
  if (!make || !model || !year || !price) {
    return res.status(400).json({
      error: "Please provide make, model, year, and price",
    });
  }

  const [newCar] = await db
    .insert(cars)
    .values({ make, model, year, price })
    .returning();
  
  res.status(201).json(newCar);
});

router.put("/cars/:id", async (req, res) => {
  const { make, model, year, price } = req.body;
  const id = Number(req.params.id);
  console.log(id)
  if (!make || !model || !year || !price) {
    return res.status(400).json({
      error: "Please provide make, model, year, and price",
    });
  }

  const updatedCar = await db
    .update(cars)
    .set({ make, model, year, price })
    .where(eq(cars.id, id))
    .returning();

  res.status(201).json(updatedCar);
});

router.delete("/cars/:id", async (req, res) => {
  const id = Number(req.params.id);
  console.log(id)
  const deleteCar=await db.delete(cars).where(eq(cars.id,id)).returning()

  
  if (!deleteCar) {
    return res.status(404).json({ error: "Car not found" });
  }
  res.json({
    message: "Car deleted successfully",
    car: deleteCar,
  });
});

router.get("/cars/:id", async(req, res) => {
  const carId = parseInt(req.params.id);

  const getCar = await db.select().from(cars).where(eq(cars.id,carId))
  //its important to have that returning becuase that like next it pretty much pass the data
  // to the next thing that wants it if you did not put that the data will not be pass to the
  // next thing that wants it
  if (!getCar) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.json(getCar);
});

app.use("/api/v1", router);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
