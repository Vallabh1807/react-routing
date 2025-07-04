import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate()

  const backHandler = () => {
    navigate("/contact")
  };

  return (
    <div className="p-20 flex justify-center items-center h-[90vh] flex-col">
      <h1 className="text-2xl">{name}</h1>
      <button
        onClick={backHandler}
        className="mt-4 bg-red-300 rounded px-2 py-1 text-white cursor-pointer"
      >
        Back
      </button>
    </div>
  );
};

export default UserDetail;
