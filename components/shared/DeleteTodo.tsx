"use client";
import { deleteTodo } from "@/app/actions/todoActions";
import Button from "../ui/ButtonTodo";
import Form from "../ui/Form";
import Input from "../ui/InputTodo";
import { todoType } from "@/types/todoType";
import { BsFillTrash2Fill } from "react-icons/bs";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

function DeleteTodo({ todo }: { todo: todoType }) {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button
        actionButton
        text={<Trash2 />}
        type="submit"
        onClick={() => toast("Task deleted")}
      />
    </Form>
  );
}

export default DeleteTodo;
