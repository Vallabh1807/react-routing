import React from "react";
import { Link } from "react-router-dom";

const Ayush = () => {
  return (
    <div className='p-20'>
      <h1 className="text-2xl">Ayush</h1>
      <Link to="/contact">
        <button className="mt-4 bg-red-300 rounded px-2 py-1 text-white cursor-pointer">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Ayush;
