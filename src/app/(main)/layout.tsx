import React from "react";

type Props = { childern: React.ReactNode };

const Layout = ({childern}: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="w-full">{childern}</div>
    </div>
  );
};
export default Layout;
