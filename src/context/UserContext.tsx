"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type User = {
  id: string;
  email: string;
  username: string;
  name?: string;
  bio?: string;
  avatarUrl?: string;
  createdAt?: string;
  updatedAt?: string;
} | null;

interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  clearUser: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User>(null);

  useEffect(() => {
    // load stored user on mount
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        setUserState(JSON.parse(stored));
      } catch (error) {
        console.error('Could not parse stored user', error);
      }
    }
  }, []);

  const setUser = (user: User) => {
    setUserState(user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  };

  const clearUser = () => {
    setUserState(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
