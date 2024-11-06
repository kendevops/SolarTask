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
      className={`rounded-3xl w-full max-w-[265px] md:max-w-[350px] flex-shrink-0 ${
        plain ? "bg-white border border-#DFEAF2" : "bg-primary-gradient"
      }`}
    >
      <div className="px-8 py-4 flex flex-col gap-5 md:gap-10">
        <div className="flex justify-between">
          <div className="">
            <p
              className={`text-11 md:text-12 ${
                plain ? "text-textSecondary" : "text-white "
              }`}
            >
              Balance
            </p>
            <p
              className={`text-16 md:text:20 ${
                plain ? "text-textPrimary" : "text-white"
              }`}
            >
              {formatCurrency(balance)}
            </p>
          </div>
          {plain ? (
            <img src={cardChip2} alt="Card Chip" className="w-7 h-7" />
          ) : (
            <img src={cardChip} alt="Card Chip" className="w-7 h-7" />
          )}
        </div>
        <div className="flex gap-5 md:gap-14 justify-start items-center mb-1 md:mb-6">
          <div>
            <p
              className={`text-10 md:text-12 uppercase ${
                plain ? "text-textSecondary" : "text-[#FFFFFFB2]"
              }`}
            >
              Card Holder
            </p>
            <p
              className={`text-13 md:text-15 ${
                plain ? "text-textPrimary" : "text-white"
              }`}
            >
              {cardHolder}
            </p>
          </div>
          <div>
            <p
              className={`text-10 md:text-12 font-normal uppercase ${
                plain ? "text-textSecondary" : "text-[#FFFFFFB2] "
              }`}
            >
              Valid Thru
            </p>
            <p
              className={`text-13 md:text-15  ${
                plain ? "text-textPrimary" : "text-white"
              }`}
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
          className={`text-15 md:text-22 py-4 ${
            plain ? "text-textPrimary" : "text-white"
          }`}
        >
          {cardNumber}
        </p>
        <div className="flex justify-center items-center">
          {plain ? (
            <img
              src={cardSeal}
              alt="Card Seal"
              className="w-7 h-5 md:w-11 md:h-8"
            />
          ) : (
            <img
              src={cardSeal2}
              alt="Card Seal"
              className="w-7 h-5 md:w-11 md:h-8"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
