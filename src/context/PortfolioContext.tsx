'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Portfolio = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: string;
  skills: string;
  reason: string;
  major: string;
  university: string;
};

type PortfolioContextType = {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Portfolio) => void;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  // โหลดจาก localStorage ตอนเริ่มต้น
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('portfolios') || '[]');
    setPortfolios(stored);
  }, []);

  const addPortfolio = (portfolio: Portfolio) => {
    setPortfolios((prev) => {
      const updated = [...prev, portfolio];
      localStorage.setItem('portfolios', JSON.stringify(updated));
      return updated;
    });
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
