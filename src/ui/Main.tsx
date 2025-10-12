import type { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="relative mx-auto max-w-7xl min-h-screen px-5">
      {children}
    </main>
  );
}

export default Main;
