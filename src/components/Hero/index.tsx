import { api } from "~/utils/api";
import VentList from "../Vent/list";

const Hero = () => {
  const { data: ventData, isLoading } = api.vent.getAll.useQuery();

  if (!ventData) {
    return <h1>No vent</h1>;
  }

  return (
    <section className="mx-28 mt-10 text-center">
      <h1 className="text-5xl font-bold">Vent anonymously</h1>
      <p>Begin by creating one of your own.</p>
      {!isLoading && <VentList ventData={ventData} />}
    </section>
  );
};

export default Hero;
