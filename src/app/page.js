const data = [
  {
    image: "",
    name: "Michael Chen",
    occupation: " Senior Real Estate AgentSenior Real Estate Agent",
    numberOfPropertiesSold: "24 Properties Sold",
  },
  {
    image: "",
    name: "Michael Chen",
    occupation: " Senior Real Estate AgentSenior Real Estate Agent",
    numberOfPropertiesSold: "24 Properties Sold",
  },
  {
    image: "",
    name: "Michael Chen",
    occupation: " Senior Real Estate AgentSenior Real Estate Agent",
    numberOfPropertiesSold: "24 Properties Sold",
  },
  {
    image: "",
    name: "Michael Chen",
    occupation: " Senior Real Estate AgentSenior Real Estate Agent",
    numberOfPropertiesSold: "24 Properties Sold",
  },
];

const HomePage = () => {
  return (
    <div className="bg-[#FFFFFF] py-10 px-20 w-full flex flex-col gap-10 items-center ">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-medium text-xl text-black text-center">
          Meet the People <br />
          Behind the Process
        </h1>
        <p className="text-[#4A5565]">
          Our experienced team is dedicated to helping you find your perfect
          home
        </p>
      </div>
    </div>
  );
};

{
  data.map((item, index) => {
    return (
      <div
        key={index}
        className="flex-1 bg-white rounded-2x1 border overflow-hidden"
      >
        <img className="object-cover w-full aspect-square" src="" />

        <div className="p-6 flex flex-col gap-1 items-center">
          <p className="text-black">{item.name}</p>
          <p className="text-sm text-[#4A5565]">{item.occupation}</p>
          <p className="text-sm text-[#FF6900]">
            {item.numberOfPropertiesSold}
          </p>
        </div>
      </div>
    );
  });
}
