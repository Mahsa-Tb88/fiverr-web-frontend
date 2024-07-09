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
      newRequest.get(`/api/gig?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);

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
        <div className="container">
          <div className="title">
            <h1 className="font-bold text-3xl mb-5">Gigs</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table className="w-full my-11">
            <tr className=" flex justify-between items-center">
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            {data.map((gig) => {
              <tr key={gig._id}>
                <td>
                  <img className="image" src={gig.cover} alt="" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
                  />
                </td>
              </tr>;
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
