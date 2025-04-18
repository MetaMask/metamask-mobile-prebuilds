import { Build } from "../types";
import BuildItem from "./BuildItem";

const BuildGroupList = ({ builds }: { builds: Build[] }) => {
  return (
    <div>
      {builds.map((build) => (
        <BuildItem key={build.id} build={build} />
      ))}
    </div>
  );
};

export default BuildGroupList;
