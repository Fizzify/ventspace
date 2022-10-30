interface ICreateButton {
  className?: string;
  submitted: boolean;
  children: React.ReactNode;
}

const CreateButton = ({ className, submitted, children }: ICreateButton) => {
  return (
    <button
      disabled={submitted ? true : false}
      className={`py-2 px-8 text-white font-light tracking-widest uppercase ${
        !submitted ? "hover:bg-neutral-700 bg-black" : "bg-neutral-500"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default CreateButton;
