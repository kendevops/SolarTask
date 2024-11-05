import { formatCurrency } from "../../utils/FormatCurrency";
import cardChip from "../../assets/chipCard.png";
import cardChip2 from "../../assets/chipCard2.png";
import cardSeal from "../../assets/cardSeal.png";
import cardSeal2 from "../../assets/cardSeal2.png";

interface CardProps {
  plain: boolean;
  balance: number;
  cardHolder: string;
  expiry: string;
  cardNumber: string;
}

const Card = ({
  plain,
  balance,
  cardHolder,
  expiry,
  cardNumber,
}: CardProps) => {
  return (
    <div
      className={`rounded-3xl w-full max-w-[265px] lg:max-w-[350px] ${
        plain ? "bg-white" : "bg-primary-gradient"
      }`}
    >
      <div className="px-8 py-4 flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="">
            <p
              className={`text-12 ${
                plain ? "text-textSecondary" : "text-white "
              }`}
            >
              Balance
            </p>
            <p
              className={`text-20 ${plain ? "text-cardAccent" : "text-white"}`}
            >
              {formatCurrency(balance)}
            </p>
          </div>
          {plain ? (
            <img src={cardChip2} alt="Card Chip" className="w-9 h-9" />
          ) : (
            <img src={cardChip} alt="Card Chip" className="w-9 h-9" />
          )}
        </div>
        <div className="flex gap-14 justify-start items-center mb-6">
          <div>
            <p
              className={`text-12 uppercase ${
                plain ? "text-textSecondary" : "text-[#FFFFFFB2]"
              }`}
            >
              Card Holder
            </p>
            <p
              className={`text-15 ${plain ? "text-cardAccent" : "text-white"}`}
            >
              {cardHolder}
            </p>
          </div>
          <div>
            <p
              className={`text-12 font-normal uppercase ${
                plain ? "text-textSecondary" : "text-[#FFFFFFB2] "
              }`}
            >
              Valid Thru
            </p>
            <p
              className={`text-15  ${plain ? "text-cardAccent" : "text-white"}`}
            >
              {expiry}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`border-t px-8 py-2 flex justify-between ${
          plain
            ? "bg-white border-[#DFEAF2] rounded-b-3xl"
            : "bg-secondary-gradient border-transparent"
        }`}
      >
        <p
          className={`text-22 py-4 ${plain ? "text-cardAccent" : "text-white"}`}
        >
          {cardNumber}
        </p>
        <div className="flex justify-center items-center">
          {plain ? (
            <img src={cardSeal} alt="Card Seal" className="w-11 h-8" />
          ) : (
            <img src={cardSeal2} alt="Card Seal" className="w-11 h-8" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
