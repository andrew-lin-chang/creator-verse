import { Link } from "react-router-dom";

export const extractHandle = (url) => {
  const youtubePrefix = "https://www.youtube.com/";
  if (url.startsWith(youtubePrefix)) {
    return url.slice(youtubePrefix.length);
  }
  return null;
};

const truncate = (input) => {
  return input?.length > 100 ? `${input.substring(0, 94)}...` : input;
}

export default function Card({ name, url, desc, image }) {
  return (
    <>
      <div className="flex bg-dark rounded-lg p-4 max-w-lg hover:scale-105 transform transition duration-200">
        <img className="rounded-full h-20 w-20 mr-4" src={image}></img>
        <div>
          <Link to={`/creators/${name.toLowerCase()}`}>
            <h1 className="text-lg font-bold hover:underline">{name}</h1>
          </Link>
          <p className="mb-2 text-gray-400">{extractHandle(url)}</p>
          <p className="mb-2">{truncate(desc)}</p>
          <div className="flex gap-2">
            <svg
              className="fill-primary h-8 w-8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>

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
    </>
  );
}
