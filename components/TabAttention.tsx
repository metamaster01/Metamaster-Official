"use client";

import { useEffect } from "react";

export default function TabAttention() {
  useEffect(() => {
    const originalTitle = document.title;
    const originalFavicon = getFaviconHref();

    function updateFavicon(href: string) {
      let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = href;
    }

    const visibilityHandler = () => {
      if (document.hidden) {
        document.title = "Missing you already ";
        updateFavicon("/emoji.png");
      } else {
        document.title = originalTitle;
        updateFavicon(originalFavicon);
      }
    };

    document.addEventListener("visibilitychange", visibilityHandler);

    return () => {
      document.removeEventListener("visibilitychange", visibilityHandler);
    };
  }, []);

  return null;
}

function getFaviconHref() {
  const link = document.querySelector<HTMLLinkElement>(
    "link[rel*='icon']"
  );
  return link?.href || "/favicon.ico";
}
