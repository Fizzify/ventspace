import { useState } from "react";
import VentModal from "./modal";

export interface IVentItem {
  id?: string;
  title: string;
  paragraph: string;
  password: string;
}

const VentItem = ({ id, title, paragraph, password }: IVentItem) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setIsModalOpened(true);
  };

  return (
    <div className="py-8 bg-neutral-50 block my-8 rounded-md shadow">
      <VentModal
        id={id}
        password={password}
        opened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{paragraph}</p>
      <button
        className="px-4 py-1 bg-red-700 hover:bg-red-900 text-white uppercase tracking-widest mt-5 font-light"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default VentItem;
