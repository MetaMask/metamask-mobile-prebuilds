import { useState, useEffect, useCallback } from "react";
import {
  BuildGroup,
  // BuildGroupByType
} from "../types";
import {
  fakeBuilds,
  // BUILD_JSON_URL
} from "../constants";

const useGetBuildGroups = () => {
  const [buildGroups, setBuildGroups] = useState<BuildGroup[]>([]);

  const fetchBuildGroups = useCallback(async () => {
    try {
      // const response = await fetch(BUILD_JSON_URL);
      // const data: BuildGroupByType = await response.json();
      // const buildGroups = Object.values(data);
      // setBuildGroups(buildGroups);

      // TODO: Remove this once the build JSON file is available
      setBuildGroups(Object.values(fakeBuilds));
    } catch (error) {
      console.error("Error fetching build groups", error);
    }
  }, []);

  useEffect(() => {
    fetchBuildGroups();
  }, []);

  return { buildGroups, fetchBuildGroups };
};

export default useGetBuildGroups;
