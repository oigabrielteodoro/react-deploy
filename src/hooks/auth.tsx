import React, { createContext, useCallback, useContext, useState } from 'react';
import { addMinutes } from 'date-fns';

import api from '../services/api';

interface AuthState {
  user: User;
  token: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface Attempt {
  id: string;
  created_at: Date;
  endsIn: Date;
}

export interface ISignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  attempts: Attempt[];
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
  clearAttempts(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [attempts, setAttempts] = useState<Attempt[]>(() => {
    const storaged = localStorage.getItem('@GabrielTeodoro:attempts');

    if (storaged) {
      const parsedStorage = JSON.parse(storaged);

      return parsedStorage;
    }

    return [] as Attempt[];
  });

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GabrielTeodoro:token');
    const user = localStorage.getItem('@GabrielTeodoro:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      try {
        const response = await api.post<AuthState>('sessions', {
          email,
          password,
        });

        const { user, token } = response.data;

        localStorage.setItem('@GabrielTeodoro:user', JSON.stringify(user));
        localStorage.setItem('@GabrielTeodoro:token', token);

        setData({ user, token });
      } catch (err) {
        const attempt = {
          id: String(Math.random()),
          created_at: new Date(),
          endsIn: addMinutes(new Date(), 5),
        };

        localStorage.setItem(
          '@GabrielTeodoro:attempts',
          JSON.stringify([...attempts, attempt]),
        );

        setAttempts([...attempts, attempt]);

        throw new Error(err);
      }
    },
    [attempts, setAttempts],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@GabrielTeodoro:user');
    localStorage.removeItem('@GabrielTeodoro:token');

    setData({} as AuthState);
  }, []);

  const clearAttempts = useCallback(() => {
    console.log('limpando');

    localStorage.removeItem('@GabrielTeodoro:attempts');
    setAttempts([]);
  }, []);

  return (
    <AuthContext.Provider
      value={
        {
          user: data.user,
          attempts,
          signIn,
          signOut,
          clearAttempts,
        } as AuthContextData
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
