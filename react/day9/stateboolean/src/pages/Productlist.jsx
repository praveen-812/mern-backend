import { useNavigate, useParams } from "react-router-dom"

const Productlist=()=>{

    const products=[{productName:"laptop",price:60000},
        {productName:"mouse",price:700},
        {productName:"keyboard",price:4000},
        {productName:"ram",price:1000},
        {productName:"desktop",price:4000},
    ]

   const navigate= useNavigate()
   const buyProduct=(userid)=>{

    navigate(`//product${userid}`,{state:[1,2,3,4,5,6]})
   }
   
 
  let copy=[...products]
    return(

        <>
        <div className=" bg-blue-400 flex  justify-evenly  p-10 items center ">
          
              {
                         
      copy.map((e,i)=>(

                <div key={i} className="bg-red-400 p-10 ">
                    <p>{e.productName}</p>
                    <p>{e.price}</p>
                    <button onClick={()=>buyProduct(i)} className=" p-2 rounded-lg bg-black text-white">buy</button>

                </div>
            ))
        }
        </div>
              
        </>
    )
}
export default Productlist;



