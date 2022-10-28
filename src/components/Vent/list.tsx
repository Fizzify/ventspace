import VentItem, { IVentItem } from "./";

interface IVentList {
  ventData: IVentItem[];
}

const VentList = ({ ventData }: IVentList) => {
  return (
    <div className="mt-10">
      {ventData.reverse().map((vent) => {
        return (
          <VentItem
            key={vent.id}
            id={vent.id}
            title={vent.title}
            paragraph={vent.paragraph}
          />
        );
      })}
    </div>
  );
};

export default VentList;
