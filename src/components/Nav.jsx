import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex gap-10 items-center justify-center">
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"tomato":"black"
          }
        }} to="/">Home</NavLink>
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"tomato":"black"
          }
        }} to="/about">About</NavLink>
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"tomato":"black"
          }
        }} to="/contact">Contact</NavLink>
      </nav>
      ;
    </div>
  );
};

export default Nav;
