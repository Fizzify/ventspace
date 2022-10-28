interface ICreateButton {
  className?: string;
  children: React.ReactNode;
}

const CreateButton = ({ className, children }: ICreateButton) => {
  return (
    <button
      className={`py-2 px-8 bg-black text-white font-light tracking-widest uppercase hover:bg-neutral-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default CreateButton;
