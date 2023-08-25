import Card from "../components/Card";

export default function ShowCreators({ creators }) {
  return (
    <div>
      <h1 className="text-3xl font-bold my-6">Show Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creators === null || creators.length === 0 ? (
          <h2 className="text-center font-bold text-4xl my-4">Looks like no one is here...</h2>
        ) : (
          creators.map((creator, index) => (
            <Card key={index} {...creator} />
          ))
        )}
      </div>
    </div>
  );
}
