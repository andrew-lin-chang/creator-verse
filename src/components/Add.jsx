import { Link, useNavigationType } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  return (
    <button onClick={() => {navigate("/add")}} className="grid place-items-center rounded-full bg-dark text-primary w-20 h-20 hover:text-white hover:bg-primary transition duration-200">
      <p className="text-4xl font-bold leading-none top-5">+</p>
    </button>
  );
}
