
import video from "../assets/video/video.mp4";

const Video = () => {
    return (
        <>
            <div className="w-full px-10 md:px-20 py-10">

                {/* Video Card */}
                <div className="bg-white rounded-2xl p-6 md:p-10
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                transition-all duration-300">

                    <video
                        src={video}
                
                        loop
                        controls
                        playsInline
                        className="w-full max-w-5xl max-h-[450px]
                        mx-auto object-contain rounded-xl"
                    />

                </div>

                <div>
                    
                </div>

            </div>
        </>
    );
};

export default Video;
