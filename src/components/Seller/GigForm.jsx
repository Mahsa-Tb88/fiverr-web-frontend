import React from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
export default function GigForm() {
  const [failMessage, setFailMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const categories = ["design", "website", "logo"];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();
  return (
    <div>
      <form>
        {failMessage && (
          <div className="flex justify-center items-center bg-red-700 px-2 py-1 ">
            <MdOutlineError />
            <h2 className="text-white">{failMessage}</h2>
          </div>
        )}
        {successMessage && (
          <div className="flex justify-center items-center px-2 py-1 bg-green-600">
            <FaCheckCircle />
            <h2 className="text-white">{successMessage}</h2>
          </div>
        )}
        <div>
          <div>
            <label>Title</label>
            <input
              type="text"
              {...register("title", {
                required: "You must enter a title of product",
                minLength: {
                  value: 5,
                  message: "title must be 3 Characters at least",
                },
                maxLength: {
                  value: 30,
                  message: "title must be 10 Characters at most",
                },
              })}
            />
            {errors.title && (
              <p className="errors mt-3 rounded-1">{errors.title.message}</p>
            )}
          </div>
          <div></div>
          <div>
            <selector
              {...register("category", {
                required: "select your category",
              })}
            >
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.title}
                </option>
              ))}
            </selector>
            {errors.category && (
              <p className="errors mt-3 rounded-1">{errors.category.message}</p>
            )}
          </div>
          <div className="d-flex  flex-column justify-content-center align-items-start mt-5 mb-4">
            <h3 className="mb-1 label fs-3">Images of Product</h3>
            <div className=" d-flex flex-column flex-md-row  justify-content-between align-items-center">
              <div className="me-4 d-flex justify-content-center align-items-center flex-column">
                <div>
                  <input
                    {...imageField}
                    id="selectImage"
                    className="d-none inputProduct rounded-1"
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                  <label
                    className="btn-select mt-5 mb-4 text-center text-white px-4 py-2 border-0 fs-3 rounded-2"
                    htmlFor="selectImage"
                  >
                    Select Image
                  </label>
                </div>
                <button
                  type="button"
                  className="btn-remove text-white px-4 py-2 border-0 fs-3 rounded-1"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </button>
              </div>
              <img
                src={selectedImage}
                width={200}
                height={200}
                className="mt-5 mt-md-0"
              />
            </div>
            {errors.image && (
              <p className="errors mt-3 rounded-1">{errors.image.message}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
