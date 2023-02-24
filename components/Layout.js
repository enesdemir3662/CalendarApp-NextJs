import React, { useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {children}
    </>
  );
};
export default Layout;
