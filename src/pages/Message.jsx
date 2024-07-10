import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../utils/api";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/api/messages/${id}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post("/api/messages", message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="w-4/5 mx-auto ">
      {isPending ? (
        "Loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <h3 className="my-12">
            <Link to="/messages" className="font-bold text-xl">
              Messages
            </Link>
          </h3>
          <div className="my-7">
            {data.map((c) => {
              return (
                <div
                  className={
                    c.userId == currentUser._id
                      ? " p-2  flex justify-start items-center"
                      : " p-2 flex flex-row-reverse items-center "
                  }
                  key={c._id}
                >
                  <img
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    width={14}
                    className="rounded-full"
                  />
                  <p className=" max-w-56">{c.desc}</p>
                </div>
              );
            })}
          </div>
          <hr />
          <form
            onSubmit={handleSubmit}
            className="my-10 flex justify-between items-center gap-8"
          >
            <textarea
              type="text"
              placeholder="write a message"
              className="border border-1 px-2 py-4 w-full"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white w-1/12 py-1 rounded-sm hover:bg-emerald-700"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Message;
