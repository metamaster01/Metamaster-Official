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
import Loader from "./loader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200); // ⏱️ SAME as Loader fade delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && children}
    </>
  );
}

