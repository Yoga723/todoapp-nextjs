import Image from "next/image";
import bg from "@/public/bluebg.png";
import Todolist from "@/components/Todolist";
import FormToDo from "@/components/FormToDo";

export default function Home() {
  return (
    <main className="mainStyle">
      <Image
        src={bg}
        alt="blue bg"
        fill
        className="absolute -z-10"
      />
      <Todolist />
      <FormToDo FormMethod="POST" />
    </main>
  );
}
