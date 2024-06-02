import React from "react";

const DropIndicator = ({ beforeId }: any) => {
  return (
    <div
      data-before={beforeId || "-1"}
      className=" h-0.2 w-full bg-violet-400 opacity-0"
    />
  );
};

export default DropIndicator;
