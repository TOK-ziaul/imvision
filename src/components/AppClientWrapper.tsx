"use client";

import { type ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Loader } from "@/components/Loader";

export function AppClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </>
  );
}
