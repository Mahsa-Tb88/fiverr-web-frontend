import React from "react";
import Review from "./Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/api";

export default function Reviews({ gigId }) {
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/api/review/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/api/review", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div>
      <h3 className="font-bold text-slate-700 text-xl mt-8 mb-3">Reviews</h3>
      {isPending
        ? "Loading"
        : error
        ? "Error"
        : data.map((review) => <Review key={review._id} review={review} />)}

      <div className="flex items-center justify-start my-9">
        <span className="text-slate-800 font-bold text-sm">Helpful?</span>
        <div className="ml-4 mr-3 flex  items-center">
          <img src="../public/like.png" width={14} />
          <span className="font-bold text-sm ml-1">Yes</span>
        </div>
        <div className="flex  items-center">
          <img src="../public/dislike.png" width={14} />
          <span className="font-bold text-sm ml-1">No</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Add a review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write your opinion"
            className="w-full border border-1 my-2 px-2 py-3"
          />
          <select className="border border-1 px-2 py-1 w-1/3 border-emerald-700 my-2">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button
            button="submit"
            className="block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-1 mt-3 rounded-sm font-bold"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
