import { todo } from "node:test";
import React from "react";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

function Todo({ todo }: { todo: todoType }) {
  return (
    <div className="w-full flex items-center">
      <ChangeTodo todo={todo} />
      <span className="">{todo.title}</span>
      <div className="flex items-center">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
}

export default Todo;
