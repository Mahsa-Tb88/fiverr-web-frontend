import React, { useReducer, useState } from "react";
import { INITIAL_STATE, gigReducer } from "../components/gigReducer";
import upload from "../utils/upload";

const Add = () => {
  const [singleFile, setSingleFile] = useState("");
  const [files, setFiles] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.value, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURES",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };
  const handelUpload = async () => {
    setLoading(true);
    try {
      const cover = await upload(singleFile);
    } catch (err) {}
  };
  return (
    <div className="add">
      <div className="w-4/5 mx-auto my-14">
        <h1 className="font-bold text-xl mb-4">Add New Gig</h1>
        <div className="grid grid-cols-2 gap-12">
          <div className="">
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Title</label>
              <input
                type="text"
                placeholder="e.g. I will do something I'm really good at"
                className="border border-1 px-2 py-1 rounded-sm"
                onChange={handleChange}
                name="title"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Category</label>

              <select
                name="cat"
                onChange={handleChange}
                id="cats"
                className="border border-1 py-1"
              >
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Cover Image</label>
              <input
                type="file"
                onChange={(e) => setSingleFile(e.target.files[0])}
                name="cover"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Upload Images</label>
              <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                name="images"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                onChange={handleChange}
                className="border border-1 px-1 py-1 rounded-sm"
                placeholder="Brief descriptions to introduce your service to customers"
                cols="0"
                rows="16"
              ></textarea>
            </div>
            <button className="bg-emerald-600 text-white w-2/5 py-2 rounded-sm font-bold hover:bg-emerald-700">
              Create
            </button>
          </div>
          <div className="details">
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Service Title</label>
              <input
                type="text"
                name="shortDesc"
                onChange={handleChange}
                placeholder="e.g. One-page web design"
                className="border border-1 px-2 py-1 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Short Description</label>
              <textarea
                name="shortDesc"
                onChange={handleChange}
                id=""
                placeholder="Short description of your service"
                cols="30"
                rows="10"
                className="border border-1 px-2 py-1 rounded-sm"
              ></textarea>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Delivery Time </label>
              <input
                type="number"
                className="border border-1 px-2 py-1 rounded-sm"
                onChange={handleChange}
                name="deliveryTime"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Revision Number</label>
              <input
                type="number"
                className="border border-1 px-2 py-1 rounded-sm"
                onChange={handleChange}
                name="revisionNumber"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Add Features</label>
              <form onSubmit={handleFeature}>
                <input type="text" placeholder="e.g. page design" />
                <button type="submit">Add feature</button>
              </form>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="">Price</label>
              <input
                type="number"
                className="border border-1 px-2 py-1 rounded-sm"
                onChange={handleChange}
                name="price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
