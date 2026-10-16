import { Suspense } from "react";
import type { Metadata } from "next";
import StartFlow from "./StartFlow";

export const metadata: Metadata = { title: "Build your marketing playbook | Cavaco", robots: { index: false } };

export default function StartPage() {
  return (
    <Suspense fallback={null}>
      <StartFlow />
    </Suspense>
  );
}
