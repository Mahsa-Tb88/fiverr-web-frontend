import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import newRequest from "../utils/api";

export default function ({ item }) {
  const { isPending, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/api/user/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  console.log("item...", data);
  return (
    <Link to={`/gig/${item._id}`}>
      {isPending ? (
        "loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="border border-1">
          <div className=" bg-orange-300">
            <img src={item.cover} />
          </div>
          <div className="px-2 pt-14 pb-3 ">
            <div className="flex justify-start items-center mb-6">
              <img
                src={data.image || "./profile.png"}
                width={20}
                className="rounded-full mr-3"
              />
              <span className="font-semibold">{data.username}</span>
            </div>
            <h5>{item.desc}</h5>
            <div className="flex justify-start items-center text-yellow-400">
              <img src="./img/star.png" width={16} className="mr-2" />
              {!isNaN(Math.floor(item.totalStars / item.numberStar)) &&
                Math.floor(item.totalStars / item.numberStar)}
            </div>
          </div>
          <div className="flex justify-between items-center border-t py-4 px-2">
            <span>heart</span>
            <span>${item.price} </span>
          </div>
        </div>
      )}
    </Link>
  );
}
