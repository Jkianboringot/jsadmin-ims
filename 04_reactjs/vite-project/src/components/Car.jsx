import React from "react";

const Car = ({ id, make, model, year, price }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    

    try {
      
       await fetch(`/api/v1/cars/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>alert('Delete car successfully'));

    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    try {
      await fetch("/api/v1/cars", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      alert("Edit car successfully");
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
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
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
