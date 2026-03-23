import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/auth";

interface AuthContextType {
  user: User | null;
  signIn: (emil: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, signIn, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error("UserAuth must be used within an AuthContextProvider");

  return context;
};
