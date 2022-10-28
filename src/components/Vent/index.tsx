import Router from "next/router";

export interface IVentItem {
  id?: string;
  title: string;
  paragraph: string;
  password: string;
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
    <div className="py-8 bg-neutral-50 block my-8 rounded-md shadow">
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
