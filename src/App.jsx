import { useState, useEffect } from "react";
import { supabase } from "./client";
import { useRoutes } from "react-router-dom";

import AddCreator from "./pages/AddCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
    console.log(creators)
  }, []);

  async function getCreators() {
    const { data } = await supabase.from("creators").select();
    setCreators(data);
  }

  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators creators={creators} />,
    },
    {
      path: "/creators/:name",
      element: <ViewCreator creators={creators} />,
    },
    {
      path: "/edit",
      element: <EditCreator creators={creators} />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
  ]);

  return element;
}

export default App;
