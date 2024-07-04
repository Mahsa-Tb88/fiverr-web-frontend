import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/api";
import { useParams } from "react-router-dom";

export default function Gig() {
  const params = useParams();
  const id = params.id;
  const { isPending, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/api/gig/single/${id}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);

  return (
    <div className="w-5/6 mx-auto ">
      {isPending ? (
        "Loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="flex flex-row my-10">
          <div className="basis-3/4">
            <h1 className="text-slate-900 font-bold text-3xl">{data.title}</h1>
            <div className="my-5 flex justify-start items-center">
              <img
                src={data.image || "../public/profile.png"}
                width={25}
                className="rounded-full mr-3"
              />
              <span className="text-slate-700 font-semibold">name family</span>
              <img
                src="../public/img/star.png"
                width={15}
                className="ml-3 mr-1"
              />
              <span className="text-yellow-500">
                {Math.floor(data.numberStar / data.totalStars)}
              </span>
            </div>
            <div>
              <img src={data.cover} />
            </div>
            <div>
              <h4 className="text-lg mt-5 mb-3">About this gig</h4>
              <p>{data.desc}</p>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="border border-1 rounded-md px-2 py-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{data.shortTitle}</h3>
                <span className="font-semibold">${data.price}</span>
              </div>
              <p className="py-4 text-slate-400">{data.shortDesc}</p>
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                  <img
                    src="../public/img/clock.png"
                    className="mr-1"
                    width={13}
                  />
                  <span className="text-sm">{data.deliveryTime}</span>
                  <span className="text-sm">Days delivery</span>
                </div>
                <div className="flex justify-start items-center">
                  <img
                    src="../public/img/recycle.png"
                    width={14}
                    className="mr-1"
                  />
                  <span className="mr-1 text-sm">{data.revisionNumber}</span>
                  <span className="text-sm">revisions</span>
                </div>
              </div>
              <div className="flex flex-col my-5">
                {data.features.map((f) => {
                  return (
                    <div className="flex justify-start items-center">
                      <img
                        src="../public/img/greencheck.png"
                        width={12}
                        className="mr-1"
                      />
                      <span>{f}</span>
                    </div>
                  );
                })}
              </div>
              <button className="bg-emerald-600 text-white w-full py-1 rounded-md hover:bg-emerald-700 font-semibold">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
