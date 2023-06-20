import { PathMatch } from "react-router-dom";

export function pipe<First, Last>(...funcs: ((arg: any) => any)[]) {
  return (x: First): Last => {
    const result = funcs.reduce(
      (currResult, currFunc) => currFunc(currResult),
      x
    ) as unknown;
    return result as Last;
  };
}
export const getLastSegment = pipe<string, string>(
  (pathName: string) => pathName.split("/"),
  (routeNames: string[]) => routeNames[routeNames.length - 1]
);

export function removeSegmentFromPath(path: string, partToRemove?: string) {
  if (!partToRemove) return path;
  return pipe<string, string>(
    (path: string) => path.split("/"),
    (parts: string[]) => parts.filter((part) => part !== partToRemove),
    (parts: string[]) => parts.join("/")
  )(path);
}

type PropertyMap = Record<string, any>;
export function getObjectByProps<T extends PropertyMap>(
  props: string[],
  source: PropertyMap,
  target: T = {} as T
): T {
  for (const prop of props) {
    if (source[prop] !== undefined) {
      (target as PropertyMap)[prop] = source[prop];
    }
  }

  return target;
}

export function matchOnCondition<T extends string, U extends string>(
  match1: PathMatch<T> | null,
  match2: PathMatch<U> | null,
  matchCallback: (
    arg1: PathMatch<T> | null,
    arg2: PathMatch<U> | null
  ) => boolean
) {
  if (!match1 && !match2) return false;
  return matchCallback(match1, match2);
}
