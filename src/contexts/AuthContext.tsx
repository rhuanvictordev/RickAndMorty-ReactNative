import React, { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";

type User = {
  id: number;
  nome: string;
  email: string;
  token: string;
}

type AuthContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>( {} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login(usuario: User) {
    if (user == null){
      setUser(usuario);
      //Alert.alert("Usuário Logado");
    }else{
      Alert.alert("Usuário já está Logado");
    }
  }

  function logout() {
    if (user == null){
      Alert.alert("Não existe usuário Logado");
    }else{
      setUser(null);
      //Alert.alert("Usuário Deslogado");
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}