import { Platform } from "@/types";

export type ProjectFilter = "all" | Platform;

const EVENT = "portfolio:project-filter";

/** Ask the Projects section to switch filter (used by the hero shortcuts). */
export function requestProjectFilter(filter: ProjectFilter) {
  window.dispatchEvent(new CustomEvent<ProjectFilter>(EVENT, { detail: filter }));
}

export function onProjectFilterRequest(handler: (filter: ProjectFilter) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<ProjectFilter>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
