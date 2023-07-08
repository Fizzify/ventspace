type CreateInputType = {
  children: React.ReactNode;
  type: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const CreateInput = ({
  children,
  type,
  name,
  onChange,
  className,
}: CreateInputType) => {
  return (
    <div className={`${className ? className : ""}`}>
      <label className="text-xl">{children}</label>
      <input
        className={`mx-auto my-4 block rounded border border-neutral-400 px-2 shadow`}
        onChange={onChange}
        name={name}
        type={type}
        autoComplete="off"
      />
    </div>
  );
};

export default CreateInput;
