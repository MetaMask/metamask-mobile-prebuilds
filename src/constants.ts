import { BuildGroupByType, BuildType } from "./types";

export const ERROR_SUGGESTION =
  "Try again or contact the @mobile-platform-team for support.";

/**
 * URL of the build JSON file
 */
export const BUILD_JSON_URL =
  "https://raw.githubusercontent.com/MetaMask/metamask-mobile-prebuilds/main/builds.json";

/**
 * Fake builds
 */
// TODO: Sample test data for builds
export const fakeBuilds: BuildGroupByType = {
  [BuildType.IOS_SIMULATOR_DEV]: {
    title: "Expo iOS builds for simulators",
    builds: [
      {
        id: "1",
        version: "1.0.0",
        timestamp: 1744940773770,
        url: "https://app.bitrise.io/...",
        buildNumber: "1.0.0",
      },
      {
        id: "1",
        version: "1.0.0",
        timestamp: 1744940773770,
        url: "https://app.bitrise.io/...",
        buildNumber: "1.0.0",
      },
    ],
  },
  [BuildType.IOS_PHYSICAL_DEV]: {
    title: "Expo iOS builds for physical devices",
    builds: [
      {
        id: "1",
        version: "1.0.0",
        timestamp: 1744940773770,
        url: "https://app.bitrise.io/...",
        buildNumber: "1.0.0",
      },
      {
        id: "1",
        version: "1.0.0",
        timestamp: 1744940773770,
        url: "https://app.bitrise.io/...",
        buildNumber: "1.0.0",
      },
    ],
  },
  [BuildType.ANDROID_DEV]: {
    title: "Expo Android builds for both emulators and physical devices",
    builds: [
      {
        id: "1",
        version: "1.0.0",
        timestamp: 1744940773770,
        url: "https://app.bitrise.io/...",
        buildNumber: "1.0.0",
      },
      {
        id: "1",
        version: "1.0.0",
        timestamp: 1744940773770,
        url: "https://app.bitrise.io/...",
        buildNumber: "1.0.0",
      },
    ],
  },
};
