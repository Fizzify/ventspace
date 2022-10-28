import React, { useState } from "react";
import CreateInput from "./input";
import { IVentItem } from "../Vent";
import CreateButton from "./button";
import Router from "next/router";

const CreateForm = () => {
  const [newVent, setNewVent] = useState<IVentItem>({
    title: "",
    paragraph: "",
  });

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

    const res = await fetch("/api/vents", {
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
    <form onSubmit={handleSubmit}>
      <CreateInput onChange={handleChange} name="title" type="text">
        Title
      </CreateInput>
      <CreateInput onChange={handleChange} name="paragraph" type="text">
        Paragraph
      </CreateInput>
      <CreateButton>Submit</CreateButton>
    </form>
  );
};

export default CreateForm;
