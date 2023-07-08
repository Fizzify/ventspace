import React, { useState } from "react";
import CreateInput from "./input";
import { IVentItem } from "../Vent";
import CreateButton from "./button";
import { api } from "~/utils/api";

const CreateForm = () => {
  const [newVent, setNewVent] = useState<IVentItem>({
    title: "",
    paragraph: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const { mutateAsync } = api.vent.createOne.useMutation({
    onSuccess() {
      setIsFormSubmitted(false);
    },
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

    setIsFormSubmitted(true);

    mutateAsync({
      ...newVent,
    });
  };

  return (
    <form
      className="mx-auto mt-5 w-96 rounded bg-neutral-50 py-10 shadow-md"
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
      <CreateButton submitted={isFormSubmitted}>Submit</CreateButton>
    </form>
  );
};

export default CreateForm;
