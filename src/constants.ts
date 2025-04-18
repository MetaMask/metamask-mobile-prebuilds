import { BuildGroupByType, BuildType } from "./types";

export const ERROR_SUGGESTION =
  "Try again or contact the @mobile-platform-team for support.";

/**
 * URL of the build JSON file
 */
// TODO: Replace this once the build JSON file is available
export const BUILD_JSON_URL =
  "https://raw.githubusercontent.com/MetaMask/metamask-mobile-prebuilds/main/tsconfig.json";

/**
 * Fake builds
 */
// TODO: Remove this once the build JSON file is available
export const fakeBuilds: BuildGroupByType = {
  [BuildType.IOS_SIMULATOR_DEV]: {
    title: "Expo iOS Simulator Builds",
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
    title: "Expo iOS Physical Builds",
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
    title: "Expo Android Builds",
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
