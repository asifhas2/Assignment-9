import alert from "daisyui/components/alert";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
const Details = () => {
  const datas = useLoaderData();
  const { id } = useParams();

  const details = datas.find((data) => data.toyId === parseInt(id));
  const {
    pictureURL,
    toyId,
    toyName,
    rating,
    availableQuantity,
    price,
    description,
  } = details;

  const handelSubmit =(e)=>{
    e.preventDefault();
    // console.log("clicked");
    toast("Successfully Completed !");
    
  }

//   console.log(details, id);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="card bg-base-100 lg:w-[60%]  shadow-sm">
          <figure>
            <img src={pictureURL} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">
              {toyName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline font-bold ">${price}</div>
              <div className="badge badge-outline font-bold">
                <FaStarHalfAlt />{rating}
              </div>
              <div className="badge badge-outline font-bold">Available:{availableQuantity}-p</div>
             
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <form onSubmit={handelSubmit} className="">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="Name"
                  className="input"
                  placeholder="Enter Your Name"
                />
                <label className="label">Password</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                />

                <button type="submit" className="btn btn-neutral mt-4">Try Now!</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
