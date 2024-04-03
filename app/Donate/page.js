"use client";
import React, { useState } from "react";
import Navbar from "../pages/Navbar";

function page() {
  const [name, setName] = useState("");
  const [commodity, setCommodity] = useState("");
  const [address, setAddress] = useState("");
  // const [formData,setFormData] = useState({
  //   name:"",
  //   commodity:"",
  //   address:""
  // })
  const DisplayMessage = () => {
    window.alert("Thank You For donating");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/Donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, commodity, address }),
      });
      if (response.ok) {
        console.log("Name:", name);
        console.log("Commodity:", commodity);
        console.log("Address:", address);
        DisplayMessage();
        // setName("");
        // setCommodity("");
        // setAddress("");
       
      } else {
        throw new Error("Failed to submit donation");
      }
    } catch (e) {
      console.log(e);
      alert("Failed to submit donation");
    }
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="commodity">Commodity needed to be donated:</label>
          <input
            type="text"
            id="commodity"
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default page;
