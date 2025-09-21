"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Portfolio = {
  id: number;
  firstName: string;
  lastName: string;
  address?: string;
  phone?: string;
  school?: string;
  gpa?: number;
  skills?: string;
  reason?: string;
  major?: string;
  university?: string;
};

type PortfolioContextType = {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Portfolio) => void;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  const addPortfolio = (portfolio: Portfolio) => {
    setPortfolios((prev) => [...prev, portfolio]);
  };

  return (
    <PortfolioContext.Provider value={{ portfolios, addPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within PortfolioProvider");
  return context;
};
