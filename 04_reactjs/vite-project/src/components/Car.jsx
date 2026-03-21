import React from "react";

const Car = ({ make, model, year, price }) => {
  return (
     <tr>
      <td>{make}</td>
      <td>{model}</td>
      <td>{year}</td>
      <td>{price}</td>

      <td className="actions">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </td>
    </tr>
  );
};

export default Car;