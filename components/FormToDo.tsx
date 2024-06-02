"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";
import Image from "next/image";
import { ToDoItem, dummyData } from "@/utils";

interface formToDoProps {
  FormMethod: string;
}

const FormToDo = ({ FormMethod }: formToDoProps) => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoData, setToDoData] = useState<ToDoItem>();
  useEffect(() => {
    if (!params) {
      return;
    }
    // Men id params aya mulai fetch data sesuai dengan ID
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api${params.id ? `?id=${params.id}` : ""}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setToDoData(data);
      } catch (error) {
        console.error("Error fetching specific products:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!toDoData?.title) {
      return;
    }
    // bagian payloadnya tinggal dikirim ke api POST dan UPDATE
    const payload = { title, description };
    switch (FormMethod) {
      // Nanti pindahken function untuk post dan update ke index di utils
      case "POST":
        console.log("Sedang Ngepush!!!");
        // Need to define id.
        // dummyData.push(toDoData);
        try {
          await fetch("/api", {
            method: "POST",
            // body: JSON.stringify(toDoData),
          });
          console.log("Data berhasil di PUSH!!!");
        } catch (error) {
          console.log(error);
        } finally {
          // nanti ganti dengan request GET data
          alert("Data sedang dikirim, akan segera kembali ke halaman list!");
        }
        break;

      case "UPDATE":
        dummyData.map((toDoData) => {
          if (toDoData._id == params.id) {
            toDoData.title = toDoData.title;
            toDoData.description = toDoData.description;
            console.log("data telah diubah!");
          }
        });

        break;
      default:
        console.error("Invalid FormMethod value:", FormMethod);
        break;
    }
  };

  return (
    <section className="w-5/12 h-[38rem] border-2 border-[#161616] rounded-2xl bg-[#161616] p-4 max-lg:hidden">
      <form className="w-full h-full flex flex-col justify-between ">
        <h1 className="font-bold text-2xl text-gray-400 font-mono leading-relaxed tracking-wider ">
          {FormMethod == "POST" ? "Tambah List" : "Details"}
        </h1>
        <div className="flex flex-col gap-4 items-start justify-start w-full h-full my-4 ">
          <textarea
            id="title"
            className="w-full h-auto bg-[#161616] text-xl font-serif tracking-wide focus:outline-none resize-none"
            value={`${toDoData?.title ? toDoData?.title : ""}`}
            placeholder="Add Title here..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            htmlFor="description"
            className="text-base text-gray-400 font-mono leading-relaxed tracking-wider "
          >
            DESCRIPTIONS
          </label>
          <textarea
            id="description"
            className="w-full h-auto bg-[#161616] text-xl font-serif tracking-wide focus:outline-none resize-none"
            rows={10}
            value={`${toDoData?.description ? toDoData?.description : ""}`}
            placeholder="Add descriptions here..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {FormMethod === "POST" ? (
          <div className="w-full flex justify-end gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center border-2 border-neutral-200 rounded-xl w-3/12 py-2 px-2 gap-2 hover:cursor-pointer hover:bg-neutral-300 hover:bg-opacity-20 relative"
            >
              <FaCheck />
              <span>Complete</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-end gap-4">
            <button
              type="submit"
              className="flex items-center border-2 border-neutral-200 rounded-xl w-3/12 py-2 px-2 gap-2 hover:cursor-pointer hover:bg-neutral-300 hover:bg-opacity-20 relative"
            >
              <FaTrash />
              <span>Delete</span>
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center border-2 border-neutral-200 rounded-xl w-3/12 py-2 px-2 gap-2 hover:cursor-pointer hover:bg-neutral-300 hover:bg-opacity-20 relative"
            >
              <FaEdit />
              <span>Edit</span>
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default FormToDo;
