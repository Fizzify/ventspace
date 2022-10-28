import { IVentItem } from "../Vent";
import VentList from "../Vent/list";

interface IVentList {
  ventData: IVentItem[];
}

const Hero = ({ ventData }: IVentList) => {
  return (
    <section className="mx-28 mt-10 text-center">
      <h1 className="text-5xl font-bold">Vent anonymously</h1>
      <p>Begin by creating one of your own.</p>
      <VentList ventData={ventData} />
    </section>
  );
};

export default Hero;
