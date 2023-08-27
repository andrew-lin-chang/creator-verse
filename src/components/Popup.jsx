export default function Popup({ message }) {
  return (
    <div className="flex gap-2 justify-center items-center rounded-full text-white bg-green-600 uppercase px-2 py-1 text-sm font-bold w-fit absolute bottom-10 m-auto left-0 right-0">
      <svg className="fill-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm7.258 9.307-9.486 9.485a.61.61 0 0 1-.861 0l-.191-.191-.001.001L7.5 16.346a.61.61 0 0 1 0-.862l1.294-1.293a.61.61 0 0 1 .862 0l3.689 3.716 7.756-7.756a.61.61 0 0 1 .862 0l1.294 1.294a.609.609 0 0 1 .001.862z" />
      </svg>
      <p>{message}</p>
    </div>
  );
}
