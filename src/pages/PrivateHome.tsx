import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

function PrivateHome() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setEmail(user.email);
      else setEmail(null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <h1 className="mb-10 text-2xl font-bold">Panel administracyjny</h1>
      <p className="text-xl">Witaj, {email}</p>
    </>
  );
}

export default PrivateHome;
