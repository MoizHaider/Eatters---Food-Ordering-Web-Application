import React from "react";
import { useSelector } from "react-redux";
import { userData } from "../../Store/ProfileSlice";
import { useParams } from "react-router";

export default function Profile() {
  const user = useSelector(userData);
  const params = useParams();

  return (
    <div className="flex flex-col justify-center  items-center h-[100vh] ">
      <div className=" shadow-xl border-2 border-gray-400 relative flex flex-col items-center rounded-[20px] xs:w-[400px] md:w-[600px] md:h-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 md:h-[200px] w-full justify-center rounded-xl bg-cover"
          />
          <div className="absolute -bottom-12 md:-bottom-[130px] flex h-[87px] w-[87px] md:w-[130px] md:h-[130px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-full bg-white border-2 border-gray-700"
              src="/images/userIcon.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 md:mt-[150px] flex flex-col gap-x-4">
          <p className="text-black xs:text-lg md:text-xl lg:text-2xl">
            <span className="font-semibold ">Email </span>
            {user.email}
          </p>
          <p className="text-black xs:text-lg md:text-xl lg:text-2xl">
            <span className="font-semibold ">Password </span>*******
          </p>
        </div>
      </div>
    </div>
  );
}
