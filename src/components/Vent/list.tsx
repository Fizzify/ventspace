import type { VentType } from "~/types/vent";
import VentItem from "./";

type VentListType = {
  ventData: VentType[];
};

const VentList = ({ ventData }: VentListType) => {
  return (
    <div className="mt-10">
      {ventData.reverse().map((vent) => {
        return (
          <VentItem
            key={vent.id}
            id={vent.id}
            title={vent.title}
            paragraph={vent.paragraph}
            password={vent.password}
          />
        );
      })}
    </div>
  );
};

export default VentList;
