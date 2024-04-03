"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/InputTodo";
import Button from "../ui/ButtonTodo";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { todoType } from "@/types/todoType";
import { Pencil } from "lucide-react";

function EditTodo({ todo }: { todo: todoType }) {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    // if (todo.isCompleted) return;
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<Pencil />} />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input
              type="text"
              name="newTitle"
              placeholder={todo.title as string}
            />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : (
        todo.title
      )}
    </div>
  );
}

export default EditTodo;
