import React, { useState } from "react";
import Router from "next/router";
import CreateInput from "../Create/input";
import { api } from "~/utils/api";

type VentModalType = {
  id?: string;
  opened: boolean;
  password: string;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const VentModal = ({
  id,
  opened,
  password,
  setIsModalOpened,
}: VentModalType) => {
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const { mutateAsync } = api.vent.deleteOne.useMutation();

  const deleteVent = async (id: string) => {
    setIsFormSubmitted(true);
    mutateAsync(id);
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
    if (passwordValue === password) return deleteVent(id!);
  };
  return (
    <>
      {opened && (
        <>
          <div
            onClick={handleClick}
            className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/50"
          ></div>

          <form
            onSubmit={handleDelete}
            className="fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] rounded bg-white px-10 py-20 opacity-100 shadow-xl"
          >
            <h3 className="text-4xl font-bold text-black">Delete Vent</h3>
            <p className="mx-auto mt-5 w-96">
              To delete your vent, you need to type the password you made for it
              when the vent was created.
            </p>
            <CreateInput onChange={handleChange} className="mt-10" type="text">
              Password
            </CreateInput>
            <button
              disabled={isFormSubmitted ? true : false}
              className={`${
                !isFormSubmitted ? "bg-red-700 hover:bg-red-800" : "bg-red-400"
              } rounded px-4 py-2 font-light uppercase tracking-widest text-white shadow`}
            >
              Delete Forever
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default VentModal;
