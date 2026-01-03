// "use client";

// import { useEffect, useState } from "react";
// import Loader from "./loader";

// export default function AppWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // total loader time

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && <Loader />}
//       {!loading && children}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Detect page reload
    const navEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    const isReload = navEntry?.type === "reload";

    // Show loader ONLY:
    // 1️⃣ First time site load
    // 2️⃣ Homepage refresh
    if (pathname === "/" && isReload) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 3200);

      return () => clearTimeout(timer);
    }

    // First visit (no reload detection possible on first load)
    if (!sessionStorage.getItem("meta_master_loaded")) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("meta_master_loaded", "true");
      }, 3200);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
