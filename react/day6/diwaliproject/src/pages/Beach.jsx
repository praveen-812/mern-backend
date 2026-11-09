import beach from "../assets/banner/beach.jpg"
const Beach = () => {


    return (
        <>
            <div>

                {/* Card */}
                <div className="flex flex-col md:flex-row 
                           items-center bg-white rounded-2xl 
                           w-full max-w-7xl mx-auto overflow-hidden
                           border border-gray-200
                           shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                           transition-all duration-300">

                    {/* Left Image */}
                    <div className="md:w-[40%] w-full p-2">
                        <img
                            src={beach}
                            alt="beach"
                            className="w-full h-70 md:h-90 m-3 rounded-md object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="md:w-[60%] w-full p-6 md:p-8">

                        <h2 className="text-2xl md:text-3xl 
                                   font-extrabold text-red-600 
                                   mb-5 tracking-wide font-serif">
                            Next round Marina........ beach
                        </h2>

                        <p className="text-gray-700 text-base 
                                   md:text-lg leading-8 font-medium 
                                   font-sans">
                                    After will eat me and my friends go to the marina beach @ 1o.clock that time i enjoy in beach ways and slept in the bamboo chairs and i feel better that time because i realize my life little bit remember my ex memories and i eraser that place then after i go to my home then i use phone and after will sleep.   
                            </p>

                    </div>

                </div>
            </div>

        </>
    )
};
export default Beach;