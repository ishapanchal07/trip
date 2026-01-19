"use client";

import React from "react";
import Header from "./_components/Header";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default Provider;
