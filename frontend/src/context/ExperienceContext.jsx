import React, { createContext, useState, useContext, useEffect } from "react";

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  // load from localStorage if available
  const [experiences, setExperiences] = useState(() => {
    try {
      const raw = localStorage.getItem("experiences");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences));
  }, [experiences]);

  const addExperience = (newExp) => {
    setExperiences((prev) => [...prev, { ...newExp, id: Date.now() }]);
  };

  return (
    <ExperienceContext.Provider value={{ experiences, addExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperiences = () => useContext(ExperienceContext);
