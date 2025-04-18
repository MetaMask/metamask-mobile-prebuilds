import { useCallback } from "react";
import BuildGroupHeader from "./components/BuildGroupHeader";
import BuildGroupList from "./components/BuildGroupList";
import useGetBuildGroups from "./hooks/useGetBuildGroups";

import "./styles/App.css";

function App() {
  const { buildGroups, fetchBuildGroups } = useGetBuildGroups();

  const renderAllBuilds = useCallback(() => {
    return buildGroups.map(({ title, builds }) => (
      <div key={title}>
        <BuildGroupHeader title={title} />
        <BuildGroupList builds={builds} />
      </div>
    ));
  }, [buildGroups]);

  return (
    <div className="App">
      <h1 className="app-title">
        {"MetaMask Mobile - Expo Prebuilds for Development"}
      </h1>
      <div>
        {"This page shows all the prebuilds for the MetaMask Mobile app."}
      </div>
      <button className="fetch-button" onClick={fetchBuildGroups}>
        {"Fetch latest builds"}
      </button>
      <hr />
      {renderAllBuilds()}
    </div>
  );
}

export default App;
