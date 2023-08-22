import { useState, useEffect } from "react";
import Layout from "./Layout";
import ShowCreators from "./pages/ShowCreators";
import { supabase } from "./client";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const { data } = await supabase.from("creators").select();
    console.log(data);
    setCreators(data);
  }

  return (
    <>
      <Layout>
        <h1 className="font-bold text-4xl tracking-tight">CreatorVerse</h1>
        <ShowCreators creators={creators} />
      </Layout>
    </>
  );
}

export default App;
