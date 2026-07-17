import {
  useCallback,
  useMemo,
  useState,
} from "react";

import { AuthContext } from "./AuthContext";

const USER_STORAGE_KEY = "commerce_auth_user";

function getStoredUser() {
  try {
    const storedUser =
      localStorage.getItem(USER_STORAGE_KEY);

    return storedUser
      ? JSON.parse(storedUser)
      : null;
  } catch {
    localStorage.removeItem(USER_STORAGE_KEY);
    return null;
  }
}

export default function AuthProvider({
  children,
}) {
  const [user, setUser] = useState(getStoredUser);

  const saveUser = useCallback((newUser) => {
    setUser(newUser);

    localStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify(newUser)
    );
  }, []);

  const clearUser = useCallback(() => {
    setUser(null);

    localStorage.removeItem(USER_STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      saveUser,
      clearUser,
    }),
    [user, saveUser, clearUser]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}