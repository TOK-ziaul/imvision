"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode, useState } from "react";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Loader } from "@/components/Loader";
import { createQueryClient } from "@/lib/queryClient";

export function AppClientWrapper({ children }: { children: ReactNode }) {
  const [queryClient] = useState(createQueryClient);

  return (
    <>
      <Loader />
      <QueryClientProvider client={queryClient}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        {process.env.NODE_ENV === "development" ? (
          <ReactQueryDevtools initialIsOpen={false} />
        ) : null}
      </QueryClientProvider>
    </>
  );
}
