const HomePage = () => {
  return (
    <div className=" min-h-screen flex flex-col item-center h-screen py-10 px-4 ">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-lg text-black">Smart Tools</h1>
        <h2 className="font-semibold text-lg text-black">
          Real Experts, Easy Moves
        </h2>
        <p>Your journey to finding the perfect home starts here</p>
      </div>
      <div className="flex direction-column gap-3  rounded-xl p-6 max-w-5xl w-full">
        <div className=" bg-[#FFFFFF] shadow-md border-gray-500 ">
          <div className="text-3x1 mb-3"></div>
          <h2 className="font-semibold text-lg text-black">Top-end Curation</h2>
          <p className="text-[#4A5565] text-sum">
            Carefully selected properties that meet our high standards of
            quality
          </p>
        </div>
      </div>
      <div className="flex direction-column gap-3  rounded-xl p-6 max-w-5xl w-full">
        <div className=" bg-[#FFFFFF] shadow-md border-green-500">
          <div className="text-3x1 mb-3"></div>
          <h2 className="font-semibold text-lg text-black">Top-end Curation</h2>
          <p className="text-[#4A5565] text-sum">
            Carefully selected properties that meet our high standards of
            quality
          </p>
        </div>
      </div>
      <div className="flex direction-column gap-3  rounded-xl p-6 max-w-5xl w-full">
        <div className=" bg-[#FFFFFF] shadow-md border-gray-500 ">
          <div className="text-3x1 mb-3"></div>
          <h2 className="font-semibold text-lg text-black">Top-end Curation</h2>
          <p className="text-[#4A5565] text-sum">
            Carefully selected properties that meet our high standards of
            quality
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
