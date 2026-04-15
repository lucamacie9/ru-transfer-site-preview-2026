import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type Role = 'admin' | 'student';

type RoleViewContextValue = {
  role: Role;
  isLoggedIn: boolean;
  setRole: (role: Role) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const ROLE_STORAGE_KEY = 'tc_role';
const LOGIN_STORAGE_KEY = 'tc_logged_in';

const RoleViewContext = createContext<RoleViewContextValue | undefined>(undefined);

function getInitialRole(): Role {
  const storedRole = localStorage.getItem(ROLE_STORAGE_KEY);
  return storedRole === 'admin' ? 'admin' : 'student';
}

function getInitialLoginState() {
  return localStorage.getItem(LOGIN_STORAGE_KEY) === 'true';
}

export function RoleViewProvider({ children }: { children: ReactNode }) {
  const [roleState, setRoleState] = useState<Role>(getInitialRole);
  const [isLoggedInState, setIsLoggedInState] = useState(getInitialLoginState);

  const setRole = (role: Role) => {
    setRoleState(role);
    localStorage.setItem(ROLE_STORAGE_KEY, role);
  };

  const setIsLoggedIn = (isLoggedIn: boolean) => {
    setIsLoggedInState(isLoggedIn);
    localStorage.setItem(LOGIN_STORAGE_KEY, String(isLoggedIn));
  };

  const value = useMemo(
    () => ({
      role: roleState,
      isLoggedIn: isLoggedInState,
      setRole,
      setIsLoggedIn,
    }),
    [roleState, isLoggedInState],
  );

  return <RoleViewContext.Provider value={value}>{children}</RoleViewContext.Provider>;
}

export function useRoleView() {
  const context = useContext(RoleViewContext);
  if (!context) {
    throw new Error('useRoleView must be used within a RoleViewProvider');
  }
  return context;
}
