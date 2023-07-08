import type { NextPage } from "next";
import CreateForm from "~/components/Create/create";

const Create: NextPage = () => {
  return (
    <section className="mx-28 mt-10 text-center">
      <h1 className="text-5xl font-bold">Create</h1>
      <CreateForm />
    </section>
  );
};

export default Create;
