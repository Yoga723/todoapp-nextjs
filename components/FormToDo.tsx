"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";
import { ToDoItem } from "@/utils";
import Link from "next/link";

interface formToDoProps {
  FormMethod: string;
}

const FormToDo = ({ FormMethod }: formToDoProps) => {
  const params = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoData, setToDoData] = useState<ToDoItem>();
  useEffect(() => {
    if (!params) {
      return;
    }
    fetchData();
  }, []);

  // Men id params aya mulai fetch data sesuai dengan ID
  const fetchData = async () => {
    if (params.id) {
      try {
        const response = await fetch(
          `/api${params.id ? `?id=${params.id}` : ""}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching specific products:", error);
      }
    }
  };

  const handleSubmit = async (e: any, FormMethod: string) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    // bagian payloadnya tinggal dikirim ke api POST dan UPDATE
    const payload = { title, description };
    switch (FormMethod) {
      // Nanti pindahken function untuk post dan update ke index di utils
      case "POST":
        try {
          await fetch(`/api`, {
            method: "POST",
            body: JSON.stringify(payload),
          });
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
        break;

      case "PUT":
        try {
          await fetch(`/api${params.id && `?id=${params.id}`}`, {
            method: "PUT",
            body: JSON.stringify(payload),
          });
          window.location.reload();
        } catch (error) {
          console.error("Error:", error);
        }
        break;
      case "DELETE":
        const response = await fetch(`/api${params.id && `?id=${params.id}`}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/");
        }
        break;
      default:
        console.error("Invalid FormMethod value:", FormMethod);
        break;
    }
  };

  return (
    <section className="w-full lg:w-5/12 h-[38rem] rounded-2xl bg-[#161616] p-4">
      <form className="w-full h-full flex flex-col justify-between ">
        <h1 className="font-bold text-2xl text-gray-400 font-mono leading-relaxed tracking-wider ">
          {FormMethod == "POST" ? "Tambah List" : "Details"}
        </h1>
        <div className="flex flex-col gap-4 items-start justify-start w-full h-full my-4 ">
          <textarea
            id="title"
            className="w-full h-auto bg-[#161616] text-xl font-serif tracking-wide focus:outline-none resize-none"
            value={`${title}`}
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
            value={`${description}`}
            placeholder="Add descriptions here..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {FormMethod === "POST" ? (
          <div className="w-full flex justify-end gap-4">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, "POST")}
              className="flex items-center border-2 border-neutral-200 rounded-xl w-5/12 lg:w-3/12 py-2 px-2 gap-2 hover:cursor-pointer hover:bg-neutral-300 hover:bg-opacity-20 relative"
            >
              <FaCheck />
              <span>Complete</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-end gap-4">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, "DELETE")}
              className="flex items-center border-2 border-neutral-200 rounded-xl w-4/12 lg:w-3/12 py-2 px-2 gap-2 hover:cursor-pointer hover:bg-neutral-300 hover:bg-opacity-20 relative"
            >
              <FaTrash />
              <span>Delete</span>
            </button>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, "PUT")}
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
