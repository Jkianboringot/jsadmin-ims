import express from "express";

const app = express();
const port = 3000;

// app.use(express.json())//this express to read what is sent by request from frontend

app.use(express.json()); //parser, is using to read and understand what is sent to the route
//very important

const router = express.Router();

let cars = [
  { id: 1, make: "toyota", model: "fuck", year: 1, price: 400 },
  { id: 2, make: "shit", model: "fuck", year: 1, price: 400 },
  { id: 3, make: "fcuck", model: "fuck", year: 1, price: 400 },
  { id: 4, make: "bitch", model: "fuck", year: 1, price: 400 },
  { id: 5, make: "hell", model: "fuck", year: 1, price: 400 },
];

router.get("/", (req, res) => {
  res.json(cars);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id); //just gets the id that was sent by in url

  // this is wierd but i can understand it, what it does is
  //it gives find a callback function , and that callback searched a car that matches
  // the id that was sent by url , i dont know but its like using filter but learn becuase for
  // this to work we are suppose to loop through cars to get the id but in here it does not
  // do that
  const car = cars.find((car) => car.id === id);

  if (!car) return res.status(404).send("car not found");

  res.json(car);
});

router.post("/", (req, res) => {
  // mine
  // const { name, message } = req.body;

  // //  const arr={ name: name, message: `Message sent ${message}` }
  // res.json({ name: `name is ${name}`, message: `message is ${message}` });

  // i will not be making this since its not being save anyware and i dont feel like wasting time
  const { make, model, year, price } = req.body;

  if (!make || !model || !year || !price)
    return res.status(400).json({ error: "missing fields" });

  const newCar = {
    id: cars.length + 1,
    make,
    model,
    year,
    price,
  };

  cars.push(newCar);
  res.status(201).json(newCar);
});

router.put("/:id", (req, res) => {
  const { make, model, year, price } = req.body;

  if (!make || !model || !year || !price)
    return res.status(400).json({ error: "missing fields" });

  const car = cars.find((car) => car.id === id);

  const newCar = {
    id: cars.length + 1,
    make,
    model,
    year,
    price,
  };

  cars.push(newCar);
  res.status(201).json(newCar);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  //not really deleting but it fine, this is more like showing what is suppose to be delete
  const car = cars.filter((car) => car.id !== id);

  if (!car) return res.status(404).send("car not found");

  //just to make it true with out any shit, this is just testing anyway
  //this is the easiest way and with no gpt help hahahaha am a genius
  //i thought of using find then pop but nah and gpt solution is long for something
  //of simple but i should do it even fi its hard, i will just let it go for now becuae
  // am pretty busy
  cars = car;

  res.status(204).json({message:'successfully deleted'});
});

app.use("/api/v1/cars", router); //this is broken btw

app.listen(port, () =>
  console.log(`Express server is running on http://localhost:${port}`),
);

// this is fine for now since the controller is the one who will handle the logic, and this route
// will just call that so no worrys for now it just sending back a message or the id that was
// illigeble for delete or update and that is all i need for now, but when doing an operation that will be
// the controllers responsibility, also great idea on making it a function ,this works for now
// since we are just returning an id but when we add controller this should be hadle thier
