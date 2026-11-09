
import Banner from "../components/Banner";
import briyani from "../assets/banner/briyani.jfif";
import Beach from "./Beach";

const Home = () => {
    return (
        <>
            <Banner />

            <div className="p-5">

                <h2 className="text-4xl md:text-6xl font-extrabold 
                text-red-600 text-center my-6">
                    Day 7
                </h2>

                <h3 className="text-center text-xl font-semibold 
                text-gray-700 mb-8">
                    Night 12 Clock
                </h3>

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
                            src={briyani}
                            alt="Briyani"
                            className="w-full h-70 md:h-90 m-3 rounded-md object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="md:w-[60%] w-full p-6 md:p-8">

                        <h2 className="text-2xl md:text-3xl 
                        font-extrabold text-red-600 
                        mb-5 tracking-wide font-serif">
                            puliyanthoppu beef Briyani Special
                        </h2>

                        <p className="text-gray-700 text-base 
                        md:text-lg leading-8 font-medium 
                        font-sans">
                            Most favourite place briyani spot in chennai @puliyanthoppu because this is the core of briyani our chennai the special is beef and midnight briyani 24 hrs briyani service in chennai that day me my friends deepan and siva sakthi goes and ate briyani
                        </p>

                    </div>

                </div>
                <br />
                <br />
                <Beach/>

            </div>
        </>
    );
};

export default Home;
