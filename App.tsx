import Router from "./src/routes/Router";
import { AuthProvider } from "./src/contexts/Auth";
import { AuthContext } from "./src/contexts/Auth";
import React, { useContext, useEffect } from "react";

export default function App() {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
