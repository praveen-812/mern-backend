import my from "../assets/banner/my.jpg"
import pic from "../assets/banner/group.jpg"
const Bro = () => {
    return (
        <>
            <div>


                <div>
      
                    <div className="flex flex-col md:flex-row 
                                      items-center bg-white rounded-2xl 
                                      w-full max-w-7xl mx-auto overflow-hidden
                                      border border-gray-200
                                      shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                                      hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                                      transition-all duration-300">

                        {/* Left Image */}
                        <div className=" flex justify-between p-2">
                            <img
                                src={my}
                                alt="my"
                                className="w-full h-70 md:h-90 m-3 rounded-md object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-[60%] w-full p-6 md:p-8">

                            <h2 className="text-2xl md:text-3xl 
                                              font-extrabold text-red-600 
                                              mb-5 tracking-wide font-serif">
                                Outfit
                            </h2>

                            <p className="text-gray-700 text-base 
                                              md:text-lg leading-8 font-medium 
                                              font-sans">
                                  This is my diwali outfit this outfit I purchased in D-mart this outfit is special for me because my family members sponser me my sister gave me Rs.1000 and my chithi gave me Rs.500 and my brother Rs.600 and D-mart purchased time i enjoly lot because saritha and my brother spend with D-mart lot of memories this diwali I collected 
                              </p>
                        </div>







                    </div>
                </div>
                <div>
                    <br />
                    <br />


                 <div className="flex flex-col md:flex-row 
                                      items-center bg-white rounded-2xl 
                                      w-full max-w-7xl mx-auto overflow-hidden
                                      border border-gray-200
                                      shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                                      hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                                      transition-all duration-300">

                        {/* Left Image */}
                        <div className=" flex justify-between p-2">
                            <img
                                src={pic}
                                alt="pic"
                                className="w-full h-70 md:h-90 m-3 rounded-md object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-[60%] w-full p-6 md:p-8">

                            <h2 className="text-2xl md:text-3xl 
                                              font-extrabold text-red-600 
                                              mb-5 tracking-wide font-serif">
                                Group pic
                            </h2>

                            <p className="text-gray-700 text-base 
                                              md:text-lg leading-8 font-medium 
                                              font-sans">
                                    This year this is our family picture for diwali one new person added this time that pink dress girl that girl name is abi but i say aathal this  is our favourite name .
                                 </p>
                        </div>







                    </div>
                </div>
                 
            </div>
        </>
    )
}
export default Bro