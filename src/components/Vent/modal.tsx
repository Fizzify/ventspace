import React, { useState } from "react";
import CreateInput from "../Create/input";
import Router from "next/router";

interface IVentModal {
  id?: string;
  opened: boolean;
  password: string;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const VentModal = ({ id, opened, password, setIsModalOpened }: IVentModal) => {
  const [passwordValue, setPasswordValue] = useState<string>("");

  const deleteVent = async (id: string | undefined) => {
    const res = await fetch(`https://ventspace.vercel.app/api/vents?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.ok) return Router.push("/");
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsModalOpened(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const handleDelete: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (passwordValue === password) return deleteVent(id);
    console.error("WRONG PASSWORD LOL!");
  };
  return (
    <>
      {opened && (
        <>
          <div
            onClick={handleClick}
            className="absolute w-screen h-screen bg-black/50 top-0 left-0 flex justify-center items-center"
          ></div>

          <form
            onSubmit={handleDelete}
            className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] bg-white opacity-100 px-10 py-20 rounded shadow-xl"
          >
            <h3 className="text-black text-4xl font-bold">Delete Vent</h3>
            <p className="w-96 mx-auto mt-5">
              To delete your vent, you need to type the password you made for it
              when the vent was created.
            </p>
            <CreateInput onChange={handleChange} className="mt-10" type="text">
              Password
            </CreateInput>
            <button className="bg-red-700 hover:bg-red-800 text-white uppercase tracking-widest font-light px-4 py-2 rounded shadow">
              Delete Forever
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default VentModal;
