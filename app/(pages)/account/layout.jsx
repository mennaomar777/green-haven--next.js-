import SideNavigation from "@/app/_components/SideNavigation/SideNavigation";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="grid sm:grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
