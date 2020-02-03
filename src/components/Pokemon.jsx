import React from "react";
import "./Pokemon.css";

const Pokemon = ({ mob }) => (
  <div>
    <img className="pokemon-sprite" alt={mob.name} src={mob.imgUrl} />
    <table>
      <tbody>
        <tr>
          <td>Name: {mob.name}</td>
          <td>HP: {mob.hp}</td>
          <td>{mob.message}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Pokemon;
