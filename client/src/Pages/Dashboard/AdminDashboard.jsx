import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import { getAllCourses, deleteCourse } from "../../Redux/Slices/CourseSlice";




export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { allUsersCount, subscribedCount } = useSelector((state) => state.stat);

  
   

  const myCourses = useSelector((state) => state.course.coursesData);

  async function onCourseDelete(id) {
    if (window.confirm("Are you sure you want to delete the course ? ")) {
      const res = await dispatch(deleteCourse(id));
      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  }

  useEffect(() => {
    (async () => {
      await dispatch(getAllCourses());
    })();
  }, []);

  return (
    <Layout hideFooter={true}>
      <section className="py-5 flex flex-col gap-7">
        <h1 className="text-center text-3xl text-sky-400 font-inter font-semibold">Admin<span className="text-violet-500 font-nunito-sans"> Dashboard</span>
        </h1>
        <div className="flex flex-col gap-14 mx-auto">
          {/* top */}
          
           
           

     
          {/* table */}
          <div className=" w-[100%] self-center flex flex-col   justify-center gap-10 mb-10">
            <div className="flex w-full items-center justify-between md:px-[40px] px-3">
              <h1 className="text-center font-inter md:text-3xl text-xl text-gray-600 dark:text-slate-50 font-semibold">
                Courses overview
              </h1>

              <button
                onClick={() => {
                  navigate("/course/create");
                }}
                className="w-fit bg-sky-400  transition-all ease-in-out duration-300 rounded py-2 px-4 font-[600] font-inter text-lg text-white cursor-pointer"
              >
                Create new course
              </button>
            </div>

            <div className="w-full overflow-x-scroll">
              <table className="table">
                <thead className="text-gray-900 dark:text-slate-300 font-lato">
                  <tr>
                    <th>S No</th>
                    <th>Course Title</th>
                    <th>Course Category</th>
                    <th>Instructor</th>
                    <th>Total Lectures</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="text-black font-[500] text-sm dark:text-slate-300 font-open-sans">
                  {myCourses?.map((course, idx) => {
                    return (
                      <tr key={course._id}>
                        <td>{idx + 1}</td>
                        <td>
                          <textarea
                            readOnly
                            value={course?.title}
                            className="w-40 h-auto bg-transparent resize-none"
                          ></textarea>
                        </td>
                        <td>{course?.category}</td>
                        <td>{course?.createdBy}</td>
                        <td>{course?.numberOfLectures}</td>
                        <td className="max-w-28  whitespace-nowrap">
                          <textarea
                            value={course?.description}
                            readOnly
                            className="w-80 h-auto bg-transparent  line-clamp-2 resize-none"
                          ></textarea>
                        </td>
                        <td className="flex items-center gap-4">
                          <button
                            className="bg-red-500 text-white  transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-inter font-[500]"
                            onClick={() => onCourseDelete(course?._id)}
                          >Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
