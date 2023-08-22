import Card from "../components/Card";

export default function ShowCreators({ creators }) {
  return (
    <div>
      <h1>Show Creators</h1>
      <div className="grid grid-cols-2 gap-4">
        {creators === null || creators.length === 0 ? (
          <h2>Looks like no one is here...</h2>
        ) : (
          creators.map((creator, index) => (
            <Card key={index} {...creator} />
          ))
        )}
      </div>
    </div>
  );
}
