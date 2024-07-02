import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-6xl mx-auto py-16 lg:py-32 px-4 h-full grid place-items-center">
      {children}
    </div>
  );
}
export default Container;
