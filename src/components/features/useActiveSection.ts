"use client";

import { useEffect, useState } from "react";

/** Returns the id of the section currently in the upper-middle of the viewport. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0]);
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key.split("|");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // The last section can be too short to reach the trigger line: activate it at the bottom.
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) setActiveId(sectionIds[sectionIds.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [key]);

  return activeId;
}
