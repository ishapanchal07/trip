import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="flex items-center p-4 border-b">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <h1 className="text-xl font-semibold tracking-tight">
          AI Trip Planner
        </h1>
      </div>
    </header>
  );
}

export default Header;
