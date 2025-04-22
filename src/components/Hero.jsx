import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import img from "../../public/iPhone-X.png";

import { CircleDollarSign, Cog } from "lucide-react";


const Hero = () => {
  return (
    <div className="min-h-screen  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl mt-20 md:mt-0 bold sm:text-5xl lg:text-5xl bg-clip-text text-transparent bg-black">
              Professional Device Repairs
            </h1>
            <p className="text-gray-700 regular text-lg leading-relaxed">
              It's never been easier to render your device unusable after
              dropping it. Our professional technicians will diagnose and repair
              your device within a stipulated time allowing you to get back to
              good old times in no more than 24 hours after the accident.
            </p>
            <button className="bg-blue-500 regular w-full md:w-[80%]  text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transform hover:scale-105 transition-all shadow-lg">
              Talk to an Expert →
            </button>

          

            {/* <div className="flex items-center space-x-4 mt-8">
              <div className="flex -space-x-4">
                <Avatar className="w-12 h-12  shadow-lg">
                  <AvatarImage src={img1} alt="Client" className="rounded-full" />
                </Avatar>
                <Avatar className="w-12 h-12  shadow-lg">
                  <AvatarImage src={img2} alt="Client" className="rounded-full w-full" />
                </Avatar>
                <Avatar className="w-12 h-12  shadow-lg">
                  <AvatarImage src={img2} className="rounded-full w-30" alt="Client" />
                </Avatar>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl">+80</span>
                <span className="ml-2 text-gray-600">Happy Clients</span>
              </div>
            </div> */}
          </div>

          <div className="relative regular">
            <div className="absolute -inset-4 bg-gradient-to-r bg-orange-500 to-orange-500 rounded-3xl opacity-30 blur-3xl"></div>
            <img src={img} alt="iPhone X" className="relative w-full h-auto hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        
        {/* <div className="w-full md: regular  px-10  mb-3 md:mb-0  md:flex md:px-30 ">
        <div className="bg-orange-500 rounded-xl   md:flex w-full ">
          <div className="md:w-[40%] border-r-white border-r  hover:shadow-xl transition-shadow transform hover:-translate-x-1 hover:-translate-y-1     md:pt-7 md:px-10 md:py-5">
          <div className="flex  gap-1 justify-center items-center  rounded-full w-fit mb-1">
              <Cog className="w-6 h-6 text-white" />
              <div className="">
              <h2 className="text-lg text-white font-bold ">Get Your Phone Fixed</h2>
              </div>
            </div>
            <div className="">
            
            <p className="text-white text-sm mb-1">Professional repair service </p>
            <button className="text-white text-sm font-bold hover:underline">Book now →</button>
            </div>
          </div>

          

          <div className="md:w-[40%] border-r-white border-r  hover:shadow-xl transition-shadow transform hover:-translate-y-1     md:pt-7 md:px-10 md:py-5">
          <div className="flex  gap-1 justify-center items-center  rounded-full w-fit mb-1">
              <CircleDollarSign className="w-6 h-6  text-white" />
              <div className="">
              <h2 className="text-lg text-white font-bold ">Buy a New Phone</h2>
              </div>
            </div>
            <div className="">
           
            <p className="text-white text-sm mb-1">Browse our selection of latest devices</p>
            <button className=" text-white text-sm font-bold hover:underline ">Shop Now →</button>
            </div>
          </div>

          <div className="md:w-[40%]   hover:shadow-xl transition-shadow transform hover:-translate-y-1  rounded-lg   md:pt-7 md:px-10 md:py-5">
          <div className="flex  gap-1 justify-center items-center  rounded-full w-fit mb-1">
              <CircleDollarSign className="w-6 h-6  text-white" />
              <div className="">
              <p className=" text-lg text-white font-bold"> Old Device</p>
              </div>
            </div>
            <div className="">
            <h2 className="text-white mb-1 text-sm ">Trade-In Options</h2>
           
            <button className=" text-white text-sm font-bold hover:underline">Learn More →</button>
            </div>
          </div>
        </div>
      </div> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white h-[25vh] p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="bg-blue-100  rounded-full w-fit mb-1">
              <Cog className="w-6 h-6 text-blue-900" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Get Your Phone Fixed</h2>
            <p className="text-gray-600 mb-1">Professional repair service with quick turnaround time</p>
            <button className="text-blue-900 font-medium hover:underline">Book now →</button>
          </div>

          <div className="bg-white  h-[25vh] p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="bg-green-100  rounded-full w-fit mb-1">
              <CircleDollarSign className="w-6 h-6  text-blue-900" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Buy a New Phone</h2>
            <p className="text-gray-600 mb-1">Browse our selection of latest devices</p>
            <button className=" text-blue-900  font-medium hover:underline ">Shop Now →</button>
          </div>

          <div className="bg-white h-[25vh] p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="bg-purple-100  rounded-full w-fit mb-1">
              <CircleDollarSign className="w-6 h-6 text-blue-900" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Trade-In Options</h2>
            <p className="text-gray-600 mb-1">Get value for your old device</p>
            <button className=" text-blue-900  font-medium hover:underline">Learn More →</button>
          </div>
        </div> */}
      </div>
      
    </div>
  );
};

export default Hero;
