import { useParams } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

async function updateCreator(data, id) {
  const { error } = await supabase.from("creators").update(data).eq("id", id);
  if (error) {
    console.log(error);
  }
}

async function deleteCreator(id) {
  const { error } = await supabase.from("creators").delete().eq("id", id);
  if (error) {
    console.log(error);
  }
}

function EditForm({ creator }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: creator.name,
    url: creator.url,
    desc: creator.desc,
    image: creator.image,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    deleteCreator(creator.id);
    navigate("/");
  };

  return (
    <div>
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
      </form>
      <div className="flex gap-8">
        <button
          className="bg-primary text-2xl font-bold p-2 rounded-lg mb-6"
          onClick={() => {
            updateCreator(formData, creator.id);
          }}
        >
          Save
        </button>
        <button
          className="bg-primary text-2xl font-bold p-2 rounded-lg mb-6"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default function EditCreator({ creators }) {
  const { name } = useParams();

  const creator = creators.find((c) => {
    return name === c.name.toLowerCase();
  });

  if (!creator) {
    return <Loading />;
  }

  return (
    <div className="grid items-center">
      <h1 className="font-bold text-4xl my-4">{creator.name}</h1>
      <img className="rounded-full" src={creator.image} />
      <EditForm creator={creator} />
    </div>
  );
}
