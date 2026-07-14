import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit } = useForm();
  const submithandler = (data) => {
    data.id=nanoid();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submithandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          placeholder="Enter image url"
          type="url"
        />
        <small className="text-red-400"></small>
        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />
        <small className="text-red-400"></small>
        <textarea
          className="block border-b outline-0 p-2"
          {...register("description")}
          type="text"
          placeholder="Start from here"
        ></textarea>
        <small className="text-red-400"></small>
        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingredients")}
          type="text"
          placeholder="Write Ingredients seperated by commas"
        ></textarea>
        <small className="text-red-400"></small>
        <textarea
          className="block border-b outline-0 p-2"
          {...register("instruction")}
          type="text"
          placeholder="Write Instruction seperated by commas"
        ></textarea>
        <small className="text-red-400"></small>
        <select
          className="block border-b outline-0 p-2 "
          {...register("categories")}
          type="text"
          placeholder="Write Instruction seperated by commas"
        >
          <option className="text-black" value="cat-1">
            category 1
          </option>
          <option className="text-black" value="cat-2">
            Category 2
          </option>
          <option className="text-black" value="cat-3">
            Category 3
          </option>
        </select>
        <small className="text-red-400"></small>
        <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">
          Save Recipies
        </button>
      </form>
    </div>
  );
};

export default Create;
