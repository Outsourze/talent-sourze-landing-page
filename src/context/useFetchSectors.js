// context/SectorContext.js
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

const SectorContext = createContext();

export const SectorProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSectors = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/sectors`);
      // Only update if data is different
      setSectors(prev => JSON.stringify(prev) !== JSON.stringify(data) ? data : prev);
    } catch (err) {
      console.error("Failed to fetch sectors", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSectors();
  }, [fetchSectors]);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ sectors, loading, error, refetch: fetchSectors }), [sectors, loading, error, fetchSectors]);

  return (
    <SectorContext.Provider value={value}>
      {children}
    </SectorContext.Provider>
  );
};

// Custom hook to use sectors
export const useSectors = () => useContext(SectorContext);
