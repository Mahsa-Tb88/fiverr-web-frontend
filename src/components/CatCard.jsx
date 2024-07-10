import React from "react";
import { Link } from "react-router-dom";

export default function CatCard({ card }) {
  return (
    <div className="relative mx-3 cursor-pointer ">
      <Link
        to={`/gig/${card._id}`}
        className="absolute top-0 w-full bg-black opacity-45 hover:opacity-70 h-full rounded-md"
      ></Link>

      <img src={card.cover} className=" rounded-md " />

      <div className="absolute top-0 text-sm text-white pl-3 pt-2 font-semibold">
        <h4>{card.title}</h4>
        <p>{card.desc}</p>
      </div>
    </div>
  );
}
