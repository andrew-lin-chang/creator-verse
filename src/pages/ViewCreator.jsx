import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { extractHandle } from "../components/Card";

export function CreatorDetails({ creator }) {
  return (
    <div>
      <div className="my-4">
        <h1 className="font-bold text-3xl">{creator.name}</h1>
        <p className="text-gray-300 text-xl">{extractHandle(creator.url)}</p>
      </div>
      <img className="rounded-full" src={creator.image} />
      <div className="leading-relaxed my-6">{creator.desc}</div>
      <div className="flex gap-6">
        <Link to={creator.url}>
          <div className="bg-primary px-6 py-2 rounded-xl grid place-items-center">
            <svg
              className="fill-white h-10 w-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        </Link>

        <div className="bg-primary px-6 py-2 rounded-xl grid place-items-center">
          <svg
            className="fill-white h-8 w-8"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ViewCreator({ creators }) {
  const { name } = useParams();

  const creator = creators.find((creator) => {
    return name === creator.name.toLowerCase();
  });

  return (
    <div>
      <CreatorDetails creator={creator} />
    </div>
  );
}
