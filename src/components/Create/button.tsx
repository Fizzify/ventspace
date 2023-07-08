type CreateButtonType = {
  className?: string;
  submitted: boolean;
  children: React.ReactNode;
};

const CreateButton = ({ submitted, children }: CreateButtonType) => {
  return (
    <button
      disabled={submitted ? true : false}
      className="rounded bg-black px-8 py-2 font-light uppercase tracking-widest text-white hover:bg-neutral-700 disabled:bg-neutral-500"
    >
      {children}
    </button>
  );
};

export default CreateButton;
