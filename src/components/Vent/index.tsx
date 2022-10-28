export interface IVentItem {
  id?: string;
  title: string;
  paragraph: string;
}

const VentItem = ({ title, paragraph }: IVentItem) => {
  return (
    <div className="py-8 bg-neutral-50 block my-8 rounded-md shadow hover:bg-neutral-100">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default VentItem;
