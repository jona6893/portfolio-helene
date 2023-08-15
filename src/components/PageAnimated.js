"use client";
import React from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function PageAnimated({ children }) {
  const [parent] = useAutoAnimate();
  return <div ref={parent}>{children}</div>;
}

export default PageAnimated;
