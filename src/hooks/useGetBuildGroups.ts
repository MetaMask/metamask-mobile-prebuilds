import { useState, useEffect, useCallback } from "react";
import {
  BuildGroup,
  // BuildGroupByType
} from "../types";
import {
  fakeBuilds,
  ERROR_SUGGESTION,
  // BUILD_JSON_URL
} from "../constants";

const useGetBuildGroups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [buildGroups, setBuildGroups] = useState<BuildGroup[]>([]);

  const fetchBuildGroups = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      // const response = await fetch(BUILD_JSON_URL);
      // const data: BuildGroupByType = await response.json();
      // const buildGroups = Object.values(data);
      // setBuildGroups(buildGroups);

      // TODO: Remove this once the build JSON file is available
      setBuildGroups(Object.values(fakeBuilds));
    } catch (error) {
      if (error instanceof Error) {
        const message = `${error.message} - ${ERROR_SUGGESTION}`;
        setError(message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBuildGroups();
  }, []);

  return { buildGroups, fetchBuildGroups, isLoading, error };
};

export default useGetBuildGroups;
