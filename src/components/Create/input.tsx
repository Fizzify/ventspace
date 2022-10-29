interface ICreateInput {
  children: React.ReactNode;
  type: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const CreateInput = ({
  children,
  type,
  name,
  onChange,
  className,
}: ICreateInput) => {
  return (
    <div className={`${className ? className : ""}`}>
      <label className="text-xl">{children}</label>
      <input
        className={`block border border-black mx-auto outline-none px-2 my-4`}
        onChange={onChange}
        name={name}
        type={type}
        autoComplete="off"
      />
    </div>
  );
};

export default CreateInput;
