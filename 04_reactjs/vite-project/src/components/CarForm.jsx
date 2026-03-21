import React, { useEffect } from "react";

const CarForm = () => {
  useEffect(() => {
    const addCar = document.querySelector(".submit-btn");

    const make = document.querySelector('input[name="make"]');
    const model = document.querySelector('input[name="model"]');
    const year = document.querySelector('input[name="year"]');
    const price = document.querySelector('input[name="price"]');

    const handler = (e) => {
      e.preventDefault();

      const m = make.value;
      const n = model.value;
      const y = year.value;
      const p = price.value;

      fetch("/api/v1/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          make: m,
          model: n,
          year: y,
          price: p,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Add car Successfully");
        })
        .catch((err) => console.log(err));
    };

    addCar.addEventListener("click", handler);

    return () => {
      addCar.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="form-container">
      <h1>Add Car</h1>

      <form className="car-form">
        <div className="form-group">
          <label>Make</label>
          <input type="text" name="make" placeholder="e.g Toyota" />
        </div>

        <div className="form-group">
          <label>Model</label>
          <input type="text" name="model" placeholder="e.g Corolla" />
        </div>

        <div className="form-group">
          <label>Year</label>
          <input type="number" name="year" placeholder="e.g 2022" />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" placeholder="e.g 800000" />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarForm;
