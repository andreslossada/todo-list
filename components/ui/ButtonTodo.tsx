"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  className?: string;
}

function ButtonTodo({
  type,
  text,
  onClick,
  actionButton,
  className,
}: buttonProps) {
  return (
    <>
      <button onClick={onClick} type={type} className={className}>
        {text}
      </button>
    </>
  );
}

export default ButtonTodo;
