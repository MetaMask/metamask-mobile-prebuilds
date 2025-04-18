import { Build } from "../types";
import "../styles/BuildItem.css";

const BuildItem = ({ build }: { build: Build }) => {
  return (
    <div className="build-item">
      <span>
        {"Build link: "}
        <a href={build.url}>{build.url}</a>
      </span>
      <div>{`Created at: ${build.timestamp}`}</div>
      <div>{`Build number: ${build.buildNumber}`}</div>
    </div>
  );
};

export default BuildItem;
