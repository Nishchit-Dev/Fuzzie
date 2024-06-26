import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/connection-card";

type Props = {
  serachParams?: { [key: string]: string | undefined };
};
const Connections = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground ">
          connect all your apps directly from here. you may need to connect
          these app regularly to refresh verification
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              type={connection.title}
              icon={connection.image}
              title={connection.title}
              description={connection.description}
              //  connected={undefined}              //  connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
