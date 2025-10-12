import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

import ButtonForm from "./ButtonForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signIn(email, password);
      navigate("/cms");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.log(err.message);
      } else {
        setError("An unexpected error occurred");
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-5"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
          required
        />

        <ButtonForm type="login" margin="auto" isLoading={loading} />

        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
