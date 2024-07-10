import React from "react";
import { Link } from "react-router-dom";
import getCurrentUser from "../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/api";

function MyGigs() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/api/gig?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  console.log(currentUser._id);

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/api/gig/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };
  return (
    <div className="w-4/5 mx-auto my-10">
      {isPending ? (
        "Loading"
      ) : error ? (
        "Error"
      ) : (
        <div className="">
          <div>
            <h1 className="font-bold text-3xl mb-5">Gigs</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button className="bg-emerald-600 text-white px-2 py-1 rounded-sm hover:bg-emerald-700">
                  Add New Gig
                </button>
              </Link>
            )}
          </div>
          <table className="w-full my-11">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gig) => {
                return (
                  <tr key={gig._id}>
                    <td>
                      <img src={gig.cover} alt="" width={15} className="m-auto"/>
                    </td>
                    <td className="text-center">{gig.title}</td>
                    <td className="text-center">{gig.price}</td>
                    <td className="text-center">{gig.sales}</td>
                    <td>
                      <img
                        src="./public/img/delete.png"
                        alt=""
                        onClick={() => handleDelete(gig._id)}
                        width={14}
                        className="m-auto"
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

export default MyGigs;
