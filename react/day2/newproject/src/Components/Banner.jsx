import Image from "../assets/banner/banner.webp"
const Banner = () => {
    return (
        <>
            <div >
                <div className="p-3 my-25 rounded">
                    <img src={Image} alt="banner" />
                </div>
                <div className="p-10 flex justify-center items-center shadow rounded-2xl bg-blue-300 text-white w-200 text-center p-15">
                    <h2 className="text-italic ">Diwali Special offer </h2>

                </div>

            </div>
        </>
    )
};
export default Banner;