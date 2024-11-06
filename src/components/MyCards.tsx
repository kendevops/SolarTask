import { useApp } from "../context/AppContext";
import Card from "./common/Card";
import CardContainer from "./common/CardContainer";

const MyCards = () => {
  const { cards, loadingCards } = useApp();

  return (
    <CardContainer title="My Cards" link="/credit-cards" className="col-span-2">
      <div className="flex gap-10 w-full overflow-x-auto hide-scrollbar flex-nowrap">
        {loadingCards ? (
          <p>Loading cards...</p>
        ) : cards.length > 0 ? (
          cards.map((card) => <Card key={card.id} {...card} />)
        ) : (
          <p>No cards available.</p>
        )}
      </div>
    </CardContainer>
  );
};

export default MyCards;
