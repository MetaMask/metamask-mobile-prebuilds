import { Build } from "../types";
import "../styles/BuildItem.css";

const BuildItem = ({ build }: { build: Build }) => {
  const { url, timestamp, buildNumber, version } = build;
  const timestampDate = new Date(timestamp);
  const formattedTimestamp = timestampDate.toLocaleString();

  return (
    <div className="build-item">
      <span>
        {"Build link: "}
        <a href={url}>{url}</a>
      </span>
      <div>{`Created at: ${formattedTimestamp}`}</div>
      <div>{`Build number: ${buildNumber}`}</div>
      <div>{`Version: ${version}`}</div>
    </div>
  );
};

export default BuildItem;
