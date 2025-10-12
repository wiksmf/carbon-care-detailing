import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

function PrivateRoute({ children }: { children: ReactNode }) {
  const { user } = UserAuth();

  if (!user) return <Navigate to="/" />;

  return children;
}

export default PrivateRoute;
