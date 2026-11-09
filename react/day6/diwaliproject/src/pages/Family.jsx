import mom from "../assets/banner/mom.jpg"
import Bro from "./Bro";
import Video from "./Video";

const Family =()=>{
    
    return(
        <>
        
        <div>
            <h2 className="text-center m-5">Happy diwali 2026</h2>
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
                                       src={mom}
                                       alt="mom"
                                       className="w-full h-70 md:h-90 m-3 rounded-md object-cover"
                                   />
                               </div>
           
                               {/* Right Content */}
                               <div className="md:w-[60%] w-full p-6 md:p-8">
           
                                   <h2 className="text-2xl md:text-3xl 
                                              font-extrabold text-red-600 
                                              mb-5 tracking-wide font-serif">
                                        Diwali  celebration 
                                   </h2>
           
                                   <p className="text-gray-700 text-base 
                                              md:text-lg leading-8 font-medium 
                                              font-sans">
                                               First picture in Diwali this is my favorite picture because me and my mother and my blood those all peoples specail for me beacuse now till that person only trust for me and my world my mom .
                                       </p>
           
                               </div>

                             
                               
                             

    
           
                           </div>
                             <br />
                               <br />
                               <Bro/>

                               <Video/>
            
        </div>

            </>
    )
};
export default Family;