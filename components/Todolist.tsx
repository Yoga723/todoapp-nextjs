"use client";
import React, { useEffect, useState } from "react";
import { ToDoItem } from "@/utils";
import Card from "./Card";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import Loader from "./Loader";

const Todolist = () => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api", { method: "GET" }).then((res) =>
          res.json()
        );
        const data = await response;
        setToDoItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex items-center justify-center bg-[#161616] w-full lg:w-5/12 h-[38rem] rounded-2xl p-4 ">
      <div className="flex flex-col w-full h-full">
        <h1 className="font-bold text-2xl font-archivo leading-relaxed tracking-wider ">
          To Do List Today
        </h1>

        <div className="h-full w-full flex overflow-y-scroll items-center justify-center my-4">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-2  h-full w-full ">
              {toDoItems.map((item) => (
                <Card
                  {...item}
                  key={item._id}
                />
              ))}
            </div>
          )}
        </div>
        <Link
          href={`/`}
          className="flex items-center border-2 border-neutral-200 rounded-xl w-4/12 lg:w-3/12 py-2 px-5 gap-2 hover:cursor-pointer hover:bg-neutral-300 hover:bg-opacity-20"
        >
          <IoMdAdd />
          <span>Add </span>
        </Link>
      </div>
    </section>
  );
};

export default Todolist;
