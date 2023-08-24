import { useParams } from "react-router-dom";

export function CreatorDetails({ creator }) {
  return (
    <div>
      <p>{creator.name}</p>
    </div>
  );
}

export default function ViewCreator({ creators }) {
  const { name } = useParams();

  const creator = creators.find((creator) => {
    return name === creator.name.toLowerCase()
  })

  return (
    <div>
      <h1>View Creator</h1>
      <CreatorDetails creator={creator} />
    </div>
  );
}
