import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../utils/api";

export default function Orders() {
  const { isPending, error, data } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      newRequest.get("/api/order").then((res) => {
        return res.data;
      }),
  });
  
  return (
    <div className="w-4/5 mx-auto my-20">
      <h1 className="font-bold text-lg my-5">Orders</h1>
      {isPending ? (
        "Loading"
      ) : error ? (
        "error"
      ) : (
        <div>
          <table className="table-auto border border-1 w-full">
            <thead>
              <tr className="border border-1 ">
                <th className="border border-1 py-2">Image</th>
                <th className="border border-1 py-2">Title</th>
                <th className="border border-1 py-2">Price</th>
                <th className="border border-1 py-2">Content</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => {
                return (
                  <tr key={order._id}>
                    <td className="border border-1 px-2 text-center py-2">
                      <img
                        src={order.image || "../public/profile.png"}
                        width={25}
                        className="rounded-full mx-auto"
                      />
                    </td>
                    <td className="border border-1 px-2 text-center py-2">
                      {order.title}
                    </td>
                    <td className="border border-1 px-2 text-center py-2">
                      ${order.price}
                    </td>
                    <td className="border border-1 px-2 text-center py-2">
                      <img
                        src="../public/message.png"
                        width={20}
                        className="mx-auto"
                      />
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
}
