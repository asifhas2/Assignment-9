import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const ToyCurd = ({ data }) => {
  const {pictureURL, toyId, toyName, rating, availableQuantity, price } = data;
  return (
    <div className="card bg-base-100 w-full shadow-sm p-5">
      <figure>
        <img className="h-[200px]  "
          src={pictureURL}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">
          {toyName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-[18px] font-semibold">price : {price}</p>
        <div className="flex justify-between items-center">
          <div>
            <div className="badge badge-outline">
              <span>
                <FaStarHalfAlt />
              </span>
              {rating}
            </div>
            <div className="badge badge-outline ml-3">
              {availableQuantity} p
            </div>
          </div>
          <Link to={`/details/${toyId}`} className="btn ">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCurd;
