import FormToDo from "@/components/FormToDo";
import Todolist from "@/components/Todolist";
import Image from "next/image";
import bg from "@/public/bluebg.png";
import React from "react";

const page = () => {
  return (
    <main className="mainStyle">
      <Image
        src={bg}
        alt="blue bg"
        fill
        className="absolute -z-10"
      />
      <Todolist />
      <FormToDo FormMethod="UPDATE" />
    </main>
  );
};

export default page;
