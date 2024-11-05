import { useApp } from "../context/AppContext";
import Card from "./common/Card";
import CardContainer from "./common/CardContainer";

const MyCards = () => {
  const { cards } = useApp();

  return (
    <CardContainer title="My Cards" link="/transaction" className="col-span-2">
      <div className="flex gap-10">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </CardContainer>
  );
};

export default MyCards;
