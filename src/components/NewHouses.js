import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";

import CardCom from "./CardCom";
const NewHouses = () => {
  const cards = [
    { photo: house1, price: "$345,760" },
    { photo: house2, price: "$785,870" },
    { photo: house3, price: "$700,910" },
    { photo: house4, price: "$496,910" },
  ];
  return (
    <div>
      {/* Title */}
      <div className="mx-8 mt-10  ">
        <p className="text-[18.5px] font-medium ">
          New Listings in Westmund, CA
        </p>
        <p className="text-blue-600 text-[15px]">View All New Listings</p>
      </div>
      {/* Listings for the Houses */}
      <div className=" flex pt -4 overflow-x-auto  space-x-6 ">
        {cards.map((card) => (
          <CardCom photo={card.photo} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default NewHouses;
