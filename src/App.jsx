import { useState, useEffect } from "react";
import { supabase } from "./client";
import { useRoutes, useLocation } from "react-router-dom";

import AddCreator from "./pages/AddCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

function App() {
  let location = useLocation();
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
    console.log(creators);
  }, [location]);

  async function getCreators() {
    const { data, error } = await supabase.from("creators").select();
    if (error) {
      console.log(error);
    }
    setCreators(data);
    console.log(data);
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
      path: "/edit/:name",
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
