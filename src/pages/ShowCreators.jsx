import Card from "../components/Card";

export default function ShowCreators({creators}) {

  return (
    <div>
      <h1>Show Creators</h1>
      {(creators === null || creators.length === 0) && <h2>Looks like no one is here...</h2>}
    </div>
  );
}
