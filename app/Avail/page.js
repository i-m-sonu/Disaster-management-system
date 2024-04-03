'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";

const Page = () => {
  const [name, setName] = useState("");
  const [formData, setFormData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/Donate");
      const data = await response.json();
      console.log(data);
      setFormData(data);
      setOriginalData(data); // Store original data for reset
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleClick = () => {
    console.log(name);
    if (name.trim() === "") {
      // If input is empty, reset to original data
      setFormData(originalData);
      return;
    }
    const filteredData = formData.filter((data) => {
      return data.commodity === name;
    });
    console.log(filteredData);
    setFormData(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
     
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      
      <div>
        {formData.map((data, index) => (
          <div className="card" key={index}>
            <div>{data.name}</div>
            <div>{data.commodity}</div>
            <div>{data.address}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
