"use client";

import { useState } from "react";

import { UserAuth } from "../context/AuthContext";

import ButtonForm from "./ButtonForm";

function ButtonLogout() {
  const { logout } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      await logout();
    } catch (err) {
      console.error("Logout error:", err);
      setError("Nie udało się wylogować");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ButtonForm type="logout" isLoading={loading} onClick={handleLogout} />
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </>
  );
}

export default ButtonLogout;
