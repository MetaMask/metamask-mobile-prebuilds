import { useCallback } from "react";
import BuildGroupHeader from "./components/BuildGroupHeader";
import BuildGroupList from "./components/BuildGroupList";
import Button from "./components/Button";
import useGetBuildGroups from "./hooks/useGetBuildGroups";

import "./styles/App.css";

function App() {
  const { buildGroups, fetchBuildGroups, isLoading, error } =
    useGetBuildGroups();

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
        {"MetaMask Mobile - Expo prebuilds for development"}
      </h1>
      <div>
        {"This page shows all the prebuilds for the MetaMask mobile app."}
      </div>
      <Button
        disabled={isLoading}
        className={"fetch-button"}
        onClick={fetchBuildGroups}
      >
        {"Fetch latest builds"}
      </Button>
      {error && <div className="error">{error}</div>}
      <hr className="divider" />
      {renderAllBuilds()}
    </div>
  );
}

export default App;
