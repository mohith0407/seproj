import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import heroPng from "../assets/images/hero.png";

export default function HomePage() {
  return (
    <Layout>
      <section className=" py-7 mb-10 text-white flex flex-row  items-center justify-center gap-7 px-16  min-h-[85vh]">
        <div className="w-1/2  space-y-7">
          <h1 className="text-5xl font-semibold text-gray-900 ">
            Find out best
            <span className="text-sky-400 font-bold font-open-sans"> Online Lectures</span>
          </h1>
          <p className="text-xl text-gray-500 font-inter">
            We have a large library of courses taught by highly skilled and
            qualified faculties across the internet at a very affordable cost.
          </p>
          <div className="space-x-6 flex">
            <Link to="/courses">
              <button className="bg-sky-400 font-semibold text-slate-100 px-5 py-3  rounded-md  text-lg  cursor-pointer transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-sky-400 text-gray-700  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer  transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img alt="homepage image" src={heroPng} />
        </div>
      </section>
    </Layout>
  );
}
