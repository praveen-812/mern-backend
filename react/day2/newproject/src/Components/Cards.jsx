import r15 from "../assets/cards/r15.jfif"
import mt from "../assets/cards/mt.jfif"
import stoke from "../assets/cards/stoke.jfif"
import bike1 from "../assets/cards/bike1.jfif"
import bike from "../assets/cards/bike.jfif"

const Cards =()=>{
    return(
        <>
        <div className="flex flex-wrap gap-20 w-full justify-center">
            <img src={r15} alt="bike" /> 
            <img src={mt} alt="mt" />
            <img src={stoke} alt="stoke" />
            <img src={bike1} alt="bike" />
             <img src={r15} alt="bike" />
            <img src={bike} alt="bike" />
        </div>
        </>
    )
};
export default Cards;