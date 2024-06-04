import { ToDoItem } from "@/utils";
import Link from "next/link";
import React from "react";
import DropIndicator from "./DropIndicator";

const Card = ({ _id, title, description, order }: ToDoItem) => {
  return (
    <>
      <DropIndicator beforeId={_id} />
      <Link
        href={`/${_id}`}
        draggable={true}
        className="w-full min-h-16 overflow-hidden hover:cursor-pointer active:cursor-grabbing hover:bg-neutral-300 hover:bg-opacity-20 rounded-xl px-4 py-1 "
      >
        <h2 className="text-xl truncate font-semibold tracking-wider">{title}</h2>
        <p className="text-base text-gray-400 truncate font-light tracking-wide">{description}</p>
      </Link>
      <DropIndicator beforeId={"-1"} />
    </>
  );
};

export default Card;
