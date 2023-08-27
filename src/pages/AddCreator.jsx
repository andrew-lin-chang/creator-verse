import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

async function insertCreator(data) {
  const { error } = await supabase.from("creators").insert(data);
  if (error) {
    console.log(error);
  }
  return;
}

export default function AddCreator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    desc: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInsert = () => {
    insertCreator(formData);
    navigate("/");
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Add Creator</h1>
      <form>
        <div className="my-4">
          <label
            htmlFor="creatorname"
            className="font-bold text-2xl my-2 block"
          >
            Name
          </label>
          <input
            id="creatorname"
            className="bg-dark block text-lg p-2 w-full"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="creatorimage"
            className="font-bold text-2xl my-2 block"
          >
            Image URL
          </label>
          <input
            id="creatorimage"
            className="bg-dark block text-lg p-2 w-full"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="creatorchannel"
            className="font-bold text-2xl my-2 block"
          >
            Channel URL
          </label>
          <input
            id="creatorchannel"
            className="bg-dark block text-lg p-2 w-full"
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="description"
            className="font-bold text-2xl my-2 block"
          >
            Description
          </label>
          <textarea
            id="description"
            className="bg-dark block text-lg p-2 w-full h-52"
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-2xl font-bold p-2 rounded-lg mb-6"
          onClick={handleInsert}
        >
          Add
        </button>
      </form>
    </div>
  );
}
