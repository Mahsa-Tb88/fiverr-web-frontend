import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import { Slider } from "infinite-react-carousel";
import Reviews from "../../components/Reviews";

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
  const userId = data?.userId;
  const {
    isPending: isUserPending,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/api/user/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });
  return (
    <div className="w-5/6 mx-auto ">
      {isPending ? (
        "Loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="flex flex-row  my-10">
          <div className="basis-3/5">
            <h1 className="text-slate-900 font-bold text-3xl">{data.title}</h1>
            <div className="my-5 flex justify-start items-center">
              {isUserPending ? (
                "loading user"
              ) : userError ? (
                "user error"
              ) : (
                <div className="flex justify-start items-center">
                  <img
                    src={userData.image || "../public/profile.png"}
                    width={25}
                    className="rounded-full mr-3"
                  />
                  <span className="text-slate-700 font-semibold mr-2">
                    {userData.username}
                  </span>
                </div>
              )}

              {!isNaN(Math.floor(data.numberStar / data.totalStars)) &&
                Array(Math.floor(data.numberStar / data.totalStars))
                  .fill()
                  .map((s, i) => {
                    return (
                      <img
                        src="../public/img/star.png"
                        width={15}
                        key={i}
                        className=""
                      />
                    );
                  })}
            </div>
            <div>
              <Slider>
                {data.images.map((img, index) => {
                  return <img src={img} key={index} />;
                })}
              </Slider>
            </div>
            <div>
              <h4 className="text-lg mt-5 mb-3">About this gig</h4>
              <p>{data.desc}</p>
            </div>

            <Reviews gigId={id} />
          </div>
          <div className="basis-2/4  ">
            <div className="border border-1 rounded-md px-2 py-3 w-3/4 mx-auto float-end">
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
                {data.features.map((f, i) => {
                  return (
                    <div className="flex justify-start items-center" key={i}>
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
              <Link to={`/pay/${id}`}>
                <button className="bg-emerald-600 text-white w-full py-1 rounded-md hover:bg-emerald-700 font-semibold">
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
