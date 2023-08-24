import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-2 bg-dark sticky justify-center items-center p-4 text-white">
      <Link to="/">
        <h1 className="font-bold text-4xl">
          creator<span className="text-primary">verse</span>
        </h1>
      </Link>
    </div>
  );
}
