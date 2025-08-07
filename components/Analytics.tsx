"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtag from "../lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}
