import React from "react";

type Props = { childern: React.ReactNode };

const Layout = ({ childern }: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      {childern}
    </div>
  );
};

export default Layout;
