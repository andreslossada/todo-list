interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
}

function InputTodo({ name, type, placeholder, value, className }: inputProps) {
  return (
    <>
      <input
        className={className}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

export default InputTodo;
