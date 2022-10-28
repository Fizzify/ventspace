import Router from "next/router";

export interface IVentItem {
  id?: string;
  title: string;
  paragraph: string;
}

const VentItem = ({ id, title, paragraph }: IVentItem) => {
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const res = await fetch(`https://ventspace.vercel.app/api/vents?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.ok) return Router.push("/");
  };

  return (
    <div className="py-8 bg-neutral-50 block my-8 rounded-md shadow hover:bg-neutral-100">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{paragraph}</p>
      <button
        className="px-4 py-1 bg-red-700 text-white rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default VentItem;
