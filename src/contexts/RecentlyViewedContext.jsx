import { createContext, useContext, useCallback, useState } from "react";

const RecentlyViewedContext = createContext();

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);

export function RecentlyViewedProvider({ children }) {
  const [viewed, setViewed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("recentViewed") || "[]");
    } catch {
      return [];
    }
  });

  const addViewed = useCallback((id) => {
    setViewed((prev) => {
      const next = [id, ...prev.filter((x) => x !== id)].slice(0, 10);

      try {
        localStorage.setItem("recentViewed", JSON.stringify(next));
      } catch {}

      return next;
    });
  }, []);

  return (
    <RecentlyViewedContext.Provider value={{ viewed, addViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}
