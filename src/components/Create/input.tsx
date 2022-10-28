interface ICreateInput {
  children: React.ReactNode;
  type: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CreateInput = ({ children, type, name, onChange }: ICreateInput) => {
  return (
    <>
      <label>{children}</label>
      <input
        className="block border border-black mx-auto outline-none px-2"
        onChange={onChange}
        name={name}
        type={type}
        autoComplete="off"
      />
    </>
  );
};

export default CreateInput;
