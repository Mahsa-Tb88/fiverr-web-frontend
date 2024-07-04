import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import newRequest from "../utils/api";
import GigCard from "../components/GigCard";
import { useLocation } from "react-router-dom";

export default function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const { search } = useLocation();
  console.log(useLocation());

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  const minRef = useRef();
  const maxRef = useRef();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/api/gig${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const apply = () => {
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [sort]);
  return (
    <div className="w-5/6 mx-auto my-14">
      <h2 className="font-bold text-lg">AI Artists</h2>
      <h4 className="text-slate-400 mt-3 mb-5">
        Explore the boundaries of art and technology
      </h4>
      <div className="flex justify-between items-center">
        <div className="">
          <span className="text-slate-500">Budget</span>
          <input
            className="border border-1 px-2 py-1 rounded-md ml-4"
            placeholder="min"
            ref={minRef}
            type="number"
          />
          <input
            className="border border-1 px-2 py-1 rounded-md ml-2"
            placeholder="max"
            ref={maxRef}
            type="number"
          />
          <button
            className="bg-emerald-600 text-white px-3 ml-4 py-1 rounded-md hover:bg-emerald-700"
            onClick={apply}
          >
            Apply
          </button>
        </div>
        <div className="">
          <div className="flex justify-start items-center">
            <span className="text-slate-500 mr-1">Sort By</span>
            <span className="font-semibold">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down-arrow.png"
              width={15}
              onClick={() => setOpen(!open)}
              className="ml-2 cursor-pointer"
            />
          </div>

          {open && (
            <div className="border border-1 py-1 px-1 rounded-md">
              {sort === "sales" ? (
                <div className="" onClick={() => reSort("updatedAt")}>
                  Newest
                </div>
              ) : (
                <div className="" onClick={() => reSort("sales")}>
                  Best Selling
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 my-16">
        {isPending
          ? "Loading"
          : error
          ? "Something is wrong"
          : data.map((gig) => <GigCard item={gig} key={gig._id} />)}
      </div>
    </div>
  );
}
