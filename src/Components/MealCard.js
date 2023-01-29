import React from "react";
import { Link } from "react-router-dom";

export default function MealCard({title, image, id}) {
  return (
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Wanna make some {title} ?
        </p>
        <Link to={`/recipe/${id}`} className="btn btn-primary">
          View Recipe
        </Link>
      </div>
    </div>
    </div>
  );
}
