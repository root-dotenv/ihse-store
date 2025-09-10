import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>This is categories root layout common to all other categories pages</p>
      {children}
    </div>
  );
}
