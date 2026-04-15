import React from "react";

const Status = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 justify-center lg:grid-cols-4 bg-base-100 max-w-7xl mx-auto gap-6 pt-10 pb-10">
        <div className="flex flex-col items-center bg-[#FFFFFF] rounded-lg shadow p-8">
          <h2 className="font-semibold text-[32px] text-[#244D3F] py-2">10</h2>
          <p className="text-[18px] text-[#64748B]">Total Friends</p>
        </div>
        <div className="flex flex-col items-center bg-[#FFFFFF] rounded-lg shadow p-8">
          <h2 className="font-semibold text-[32px] text-[#244D3F] py-2">3</h2>
          <p className="text-[18px] text-[#64748B]">On Track</p>
        </div>
        <div className="flex flex-col items-center bg-[#FFFFFF] rounded-lg shadow p-8">
          <h2 className="font-semibold text-[32px] text-[#244D3F] py-2">6</h2>
          <p className="text-[18px] text-[#64748B]">Need Attention</p>
        </div>
        <div className="flex flex-col items-center bg-[#FFFFFF] rounded-lg shadow p-8 ">
          <h2 className="font-semibold text-[32px] text-[#244D3F] py-2">12</h2>
          <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
        </div>
      </div>

      <hr className='opacity-10 max-w-7xl mx-auto' />
    </div>
  );
};

export default Status;
