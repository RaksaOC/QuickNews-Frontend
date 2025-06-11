import { User } from "@/types/User";

import { useState } from "react";

import { useEffect } from "react";

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, password: string) => {
        const user = DEMO_USERS[0];
        if (user && user.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          setUser(user);
          return user;
        }
        throw new Error('Invalid credentials');
      };
    
      const logout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
      };
    
      return { 
        user, 
        isLoggedIn: !!user, 
        login, 
        logout, 
        isLoading 
      };
}