import React, { useState } from "react";
import CarForm from "./CarForm.jsx";

const Car = ({ id, make, model, year, price }) => {
  const [showForm, setShowForm] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await fetch(`/api/v1/cars/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => alert("Delete car successfully"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{make}</td>
      <td>{model}</td>
      <td>{year}</td>
      <td>{price}</td>

      <td className="actions">
        <div>
        <button className="edit-btn" onClick={() => setShowForm(true)}>
          Edit
        </button>
        {showForm && <CarForm method='PUT' id={id}/>}
</div>
        <form action="" method="DELETE">
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </form>
      </td>
    </tr>
  );
};

export default Car;
