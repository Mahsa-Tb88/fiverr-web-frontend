import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/api";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get("/api/conversations").then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/api/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="w-4/5 mx-auto my-24">
      {isPending ? (
        "Loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1 className="font-bold text-xl my-5">Messages</h1>
          </div>
          <table className="border border-1 w-full ">
            <thead>
              <tr className="border border-1">
                <th className="border px-5 py-2 border-1">
                  {currentUser.isSeller ? "Buyer" : "Seller"}
                </th>
                <th className="border px-5 py-2 border-1">Last Message</th>
                <th className="border px-5 py-2 border-1">Date</th>
                <th className="border px-5 py-2 border-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c) => {
                return (
                  <tr
                    className={
                      (currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)
                        ? "bg-emerald-300"
                        : "bg-white"
                    }
                    key={c.id}
                  >
                    <td className="border border-1 text-center px-5 py-2">
                      {currentUser.isSeller ? c.sellerId : c.buyerId}
                    </td>
                    <td className="border border-1 text-center px-5 py-2">
                      <Link to={`/message/${c.id}`} className="link">
                        {c.lastMessage
                          ? c.lastMessage.substring(0, 20)
                          : "No Message yet "}
                        ...
                      </Link>
                    </td>
                    <td className="border border-1 text-center px-5 py-2">
                      {moment(c.updatedAt).fromNow()}
                    </td>
                    <td className="border border-1 text-center px-5 py-2">
                      {((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readByBuyer)) && (
                        <button
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-sm"
                          onClick={() => handleRead(c.id)}
                        >
                          Mark as Read
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
