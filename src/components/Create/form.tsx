import React, { useState } from "react";
import CreateInput from "./input";
import { IVentItem } from "../Vent";
import CreateButton from "./button";
import Router from "next/router";

const CreateForm = () => {
  const [newVent, setNewVent] = useState<IVentItem>({
    title: "",
    paragraph: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setNewVent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    const res = await fetch("https://ventspace.vercel.app/api/vents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newVent),
    });

    if (res.ok) return Router.push("/");
  };

  return (
    <form
      className="mt-5 bg-neutral-50 rounded shadow-md py-10 w-96 mx-auto"
      onSubmit={handleSubmit}
    >
      <CreateInput onChange={handleChange} name="title" type="text">
        Title
      </CreateInput>
      <CreateInput onChange={handleChange} name="paragraph" type="text">
        Paragraph
      </CreateInput>
      <CreateInput onChange={handleChange} name="password" type="text">
        Password
      </CreateInput>
      <CreateButton submitted={isFormSubmitted} className="mt-5 rounded">
        Submit
      </CreateButton>
    </form>
  );
};

export default CreateForm;
