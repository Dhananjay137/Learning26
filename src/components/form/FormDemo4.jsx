import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const FormDemo4 = () => {
  const { register, handleSubmit } = useForm();
  const [propertyData, setPropertyData] = useState();
  const [isSubmitted, setSubmitted] = useState(false);

  const submitHandler = (data) => {
    console.log("Form Data:", data);
    setPropertyData(data);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>FormDemo4</h1>
      <h2>Add New Listing</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        
        {/* 1. Number Input */}
        <div>
          <label>Property Age (Years):</label>
          <input type="number" {...register("age")} />
        </div>

        {/* 2. Textarea */}
        <div>
          <label>Full Address:</label> <br />
          <textarea {...register("address")} rows="3" cols="30"></textarea>
        </div>

        {/* 3. Dropdown (Select) */}
        <div>
          <label>Furnishing Status:</label>
          <select {...register("furnishing")}>
            <option value="unfurnished">Unfurnished</option>
            <option value="semi-furnished">Semi-Furnished</option>
            <option value="fully-furnished">Fully-Furnished</option>
          </select>
        </div>

        {/* 4. Phone Input */}
        <div>
          <label>Owner Contact:</label>
          <input type="tel" {...register("contact")} placeholder="99999-00000" />
        </div>

        {/* 5. Boolean Checkbox (Single) */}
        <div>
          <label>
            <input type="checkbox" {...register("parking")} /> Available Parking?
          </label>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Submit Listing</button>
      </form>

      <hr />

      {isSubmitted && propertyData && (
        <div style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
          <h1>LISTING PREVIEW</h1>
          <p><strong>AGE:</strong> {propertyData.age} Years</p>
          <p><strong>ADDRESS:</strong> {propertyData.address}</p>
          <p><strong>FURNISHING:</strong> {propertyData.furnishing}</p>
          <p><strong>CONTACT:</strong> {propertyData.contact}</p>
          <p><strong>PARKING:</strong> {propertyData.parking ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};
