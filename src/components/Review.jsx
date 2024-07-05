import React from "react";
import newRequest from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export default function Review({ review }) {
  const { isPending, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/api/user/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <div>
      {isPending ? (
        "Loading"
      ) : error ? (
        "error"
      ) : (
        <div>
          <div className="flex justify-start items-center mb-3">
            <img
              src={data.image || "../public/profile.png"}
              width={25}
              className="rounded-full mr-3"
            />
            <div className="flex flex-col">
              <span>{data.username}</span>
              <span>{data.country}</span>
            </div>
          </div>
          <div className="mb-2 flex">
            {Array(review.star)
              .fill()
              .map((s, i) => (
                <img key={i} src="../public/img/star.png" width={14} />
              ))}
          </div>
          <div>{data.desc}</div>
        </div>
      )}
    </div>
  );
}
