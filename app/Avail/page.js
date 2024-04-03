'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";

const Page = () => {
  const [formData, setFormData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/Donate");
      const data = await response.json();
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {formData.map((data, index) => (
        <div key={index}>{data.name}</div>
      ))}
    </>
  );
};

export default Page;
