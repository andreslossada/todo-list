import Form from "../ui/Form";
import Button from "../ui/ButtonTodo";
import Input from "../ui/InputTodo";
import { create } from "@/app/actions/todoActions";
import { Plus as PlusIcon } from "lucide-react";

function AddTodo() {
  return (
    <Form className="w-full px-4 " action={create}>
      <div className="flex gap-6">
        <Input
          name="input"
          type="text"
          placeholder="Add Task"
          className="py-3 px-5 rounded-full text-black w-full border-2 border-red-600 focus:border-red-600 focus:border-3 focus:outline-none focus:border caret-red-600 "
        />
        <Button
          type="submit"
          text={<PlusIcon />}
          className="bg-red-600 p-4 rounded-full text-white bold hover:bg-red-400 transition duration-300 hover:font-bold"
        />
      </div>
    </Form>
  );
}

export default AddTodo;
