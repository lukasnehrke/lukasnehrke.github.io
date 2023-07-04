import * as React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto flex px-4 pt-6 md:max-w-4xl md:pt-8">{children}</main>;
}
