import { useState } from "react";
import VentModal from "./modal";

export type VentType = {
  id?: string;
  title: string;
  paragraph: string;
  password: string;
};

const VentItem = ({ id, title, paragraph, password }: VentType) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsModalOpened(true);
  };

  return (
    <div className="my-8 block rounded-md bg-neutral-50 px-20 py-8 shadow">
      <VentModal
        id={id}
        password={password}
        opened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{paragraph}</p>
      <button
        className="mt-5 rounded bg-red-700 px-4 py-1 font-light uppercase tracking-widest text-white shadow-md hover:bg-red-900"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default VentItem;
