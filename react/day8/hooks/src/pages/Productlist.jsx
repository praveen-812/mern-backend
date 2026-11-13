import { useNavigate } from "react-router-dom";

const Productlist =()=>{

    const datas=[{productName:"sam",ProductPrice:5000},
        {productName:"oppo",ProductPrice:6000},
        {productName:"redmi",ProductPrice:2000},
        {productName:"suva",ProductPrice:7000},
        {productName:"realme",ProductPrice:2000}
    ]
    const copy=[...datas];

    const navigate=useNavigate()
    const buyProduct=(userid)=>{
        navigate(`/singleProduct/${userid}`,{state:[1,2,3,4,5,6]})
    }
    return(
        <>
        <div className="bg-pink-300  p-10 flex justify-evenly items-center">
            {
                copy.map((e,i)=>(
                   <div key={i} className="flex p-5 shadow w-40 items-center rounded-xl border flex-col">

                     <h2 >{e.productName}</h2>
                    <p>{e.ProductPrice}</p>
                    <button onClick={()=>buyProduct(i)} className="bg-red-400 p-1 rounded-lg text-center w-25">buy</button>
                   </div>
                   
                ))
                
            }


        </div>
        </>
    )
}
export default Productlist;