import express from "express";

const app = express();
const port = 3000;

const router = express.Router();

app.use(express.json()); //parser, is using to read and understand what is sent to the route
//very important

let cars = [
  { id: 1, make: "toyota", model: "fuck", year: 1, price: 400 },
  { id: 2, make: "shit", model: "fuck", year: 1, price: 400 },
  { id: 3, make: "fcuck", model: "fuck", year: 1, price: 400 },
  { id: 4, make: "bitch", model: "fuck", year: 1, price: 400 },
  { id: 5, make: "hell", model: "fuck", year: 1, price: 400 },
];


const getId = function (req){
  const id = Number(req.params.id);
  const car = cars.find((car) => cars.id === id);

  if (!car) return res.status(404).send("car not found");

  res.json(car);
};


app.get("/", (req, res) => {
  // res.send('hello bitch') //this are like the web/routes in laravel
  res.json(cars);
});

app.post("/", (req, res) => {
  res.send("New cars");
});

app.put("/:id", (req, res) => {
  getId(req);
});

app.delete("/:id", (req, res) => {
  getId(req);
});

app.get("/:id", (req, res) => {
  const id = Number(req.params.id); //just gets the id that was sent by in url

  // this is wierd but i can understand it, what it does is
  //it gives find a callback function , and that callback searched a car that matches
  // the id that was sent by url , i dont know but its like using filter but learn becuase for
  // this to work we are suppose to loop through cars to get the id but in here it does not
  // do that
  const car = cars.find((car) => cars.id === id);

  if (!car) return res.status(404).send("car not found");

  res.json(car);
});

app.use("/api/v1/cars", router);

app.listen(port, () =>
  console.log(`Express server is running on http://localhost:${port}`),
);

// this is fine for now since the controller is the one who will handle the logic, and this route
// will just call that so no worrys for now it just sending back a message or the id that was
// illigeble for delete or update and that is all i need for now, but when doing an operation that will be
// the controllers responsibility, also great idea on making it a function ,this works for now 
// since we are just returning an id but when we add controller this should be hadle thier
