import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-red-500"> <b>Here! :)</b></span>
          </h1>
          <p className="mt-12">
            The paid course section in the navbar should be provide easy access to premium content for users who have subscribed. It should be clearly labeled as “Paid Courses” or “Premium Access” to distinguish it from free content. Ensure the section includes links to available courses, subscription plans, and user account management. A dropdown menu could offer quick navigation to various categories of paid courses. Additionally, the section should display any active promotions or discounts and prompt non-subscribed users to sign up or learn more about the benefits of the paid offerings.
          </p>
          <Link to="/">
            <button className="mt-6 bg-red-500 border-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:border-red-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
