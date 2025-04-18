/**
 * Build types
 */
export enum BuildType {
  IOS_SIMULATOR_DEV = "IOS_SIMULATOR_DEV",
  IOS_PHYSICAL_DEV = "IOS_PHYSICAL_DEV",
  ANDROID_DEV = "ANDROID_DEV",
}

/**
 * Metadata of the build
 */
export interface Build {
  id: string;
  version: string;
  timestamp: number;
  url: string;
  buildNumber: string;
}

/**
 * Group of builds
 */
export type BuildGroup = {
  title: string;
  builds: Build[];
};

/**
 * Group of builds by build type
 */
export type BuildGroupByType = Record<BuildType, BuildGroup>;
