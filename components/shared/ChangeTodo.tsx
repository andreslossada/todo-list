import Form from "../ui/Form";
import Button from "../ui/ButtonTodo";
import Input from "../ui/InputTodo";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";
import { CircleCheck } from "lucide-react";

function ChangeTodo({ todo }: { todo: todoType }) {
  const isComplete = todo.isCompleted;
  return (
    <Form action={changeStatus} className="">
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton
        type="submit"
        text={isComplete ? <CircleCheck className="mx-auto " /> : "Pending"}
        className={`${
          isComplete
            ? "hover:bg-green-400 bg-green-500 "
            : "hover:bg-red-400 bg-red-500"
        } py-2 px-4 rounded-full text-white font-medium min-w-[90px] transition duration-300 hover:font-semibold`}
      />
    </Form>
  );
}

export default ChangeTodo;
