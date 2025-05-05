import React from "react";

const Action = () => {
  return (
    <div className="bg-white w-[400px] h-[260px] mt-[8px] ml-[300px] rounded-xl border-2 border-stone-400">
      <div className="flex">
        <div className="fixed bg-black text-white mt-5 w-[200px] pl-3 rounded-full ml-2 mx-[10px]">
          Document Management
        </div>
        <div className="relative ml-[190px] mt-3 w-[22px] h-[22px] pl-1 rounded-full bg-red-600">
          3
        </div>
      </div>

      <ul className="">
        <div className="flex">
          <li className="w-[25px] h-[25px] bg-violet-400 mt-5 ml-5 rounded-full pl-2 text-sm">
            A
          </li>
          <li className="pt-5 pl-3">Company A</li>
        </div>
        <li className="flex ml-[63px] font-thin">
          Approved to Onboarding
          <li className="ml-[60px] text-s">23 Apl,2025</li>
        </li>
        <div className="flex">
          <li className="w-[25px] h-[25px] bg-violet-400 ml-5 rounded-full pl-2 text-sm">
            B
          </li>
          <li className="pl-3">Company B</li>
        </div>
        <li className="flex ml-[63px] font-thin">
          Waiting for Approval
          <li className="ml-[95px] text-s">23 Apl,2025</li>
        </li>
        <div className="flex">
          <li className="w-[25px] h-[25px] bg-violet-400 ml-5 rounded-full pl-2 text-sm">
            C
          </li>
          <li className="pl-3">Company C</li>
        </div>
        <li className="flex ml-[63px] font-thin">
          Waiting for Approval
          <li className="ml-[95px] text-s">23 Apl,2025</li>
        </li>
        <div className="flex">
          <li className="w-[25px] h-[25px] bg-violet-400 ml-5 rounded-full pl-2 text-sm">
            D
          </li>
          <li className="pl-3">Company D</li>
        </div>
        <li className="flex ml-[63px] font-thin">
          Waiting for Approval
          <li className="ml-[95px] text-s">23 Apl,2025</li>
        </li>
      </ul>
      <button
        onClick={() => navigate("/member")}
        className=" bg-gray-500 text-white w-[80px] h-[30px] rounded-full p-[3px] mt-[20px] ml-[320px] cursor-pointer"
      >
        See More
      </button>
    </div>
  );
};

export default Action;
