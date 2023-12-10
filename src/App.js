import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

export default function App() {
  const token = useStoreState((state) => state.initialState.token);
  const updateToken = useStoreActions((actions) => actions.updateToken);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token1 = hash.substring(1).split("&")[0].split("=")[1];
      updateToken(token1);
    }
  }, []);

  return <div>{token ? <Dashboard /> : <Login />}</div>;
}
