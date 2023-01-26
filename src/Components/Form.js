import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e){
    (e).preventDefault()
    console.log(formData)
  }
  return (
    <div>
    <form onSubmit={handleSubmit} className="form-control">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input 
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Add food title "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleChange}
            className="form-control"
            id="description"
            rows="3"
            name="description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="ingredients"
            placeholder="Add Ingredients"
            name="ingredients"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
