import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Ctx = {
  ids: string[];
  has: (id: string) => boolean;
  toggle: (id: string) => void;
};
const FavCtx = createContext<Ctx | null>(null);
const KEY = "dalpizzol.favorites.v1";

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ids, setIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]") as string[];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      /* ignore */
    }
  }, [ids]);
  const toggle = useCallback(
    (id: string) =>
      setIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id])),
    [],
  );
  const value = useMemo(
    () => ({ ids, has: (id: string) => ids.includes(id), toggle }),
    [ids, toggle],
  );
  return <FavCtx.Provider value={value}>{children}</FavCtx.Provider>;
};

export const useFavorites = () => {
  const c = useContext(FavCtx);
  if (!c) throw new Error("useFavorites fora do FavoritesProvider");
  return c;
};
