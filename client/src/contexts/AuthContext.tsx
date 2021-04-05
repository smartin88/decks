import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/app';

const AuthContext = React.createContext<Partial<Value>>({});

export function useAuth() {
  return useContext(AuthContext);
}

interface Props {
  children: React.ReactNode;
}

export function AuthProvider(props: Props) {
  const children = props.children;
  const [currentUser, setCurrentUser] = useState<firebase.User>();
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email: string): Promise<void> | undefined {
    if (currentUser) return currentUser.updateEmail(email);
  }
  function updatePassword(password: string): Promise<void> | undefined {
    if (currentUser) return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user && setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: Value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

interface Value {
  currentUser: firebase.User | undefined;
  signup: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  login: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void> | undefined;
  updatePassword: (password: string) => Promise<void> | undefined;
}
