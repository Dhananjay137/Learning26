import React from "react";

export const ContentComponent = () => {
  var year = 2026;
  var name = "react project";
  var isAvailable = true;

  var student = {
    id: 1,
    name: "manoj",
    city: "Ahmedabad",
  };
  return (
    <div style={{backgroundColor:"white",border:"1px solid black",height:"auto",width:"auto",padding:"10px"}}>
      <h1>Hello</h1>
      <h1>{2026}</h1>
      <h3>{name}</h3>
      <p>is availabe???{isAvailable == true ? "TRUE" : "FALSE"}</p>
      <h1>Student details</h1>
      <h2>ID: {student.id}</h2>
      <h2>Name: {student.name}</h2>
      <h2>city: {student.city}</h2>
    </div>
  );
};
