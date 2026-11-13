import { useLocation, useNavigate, useParams } from "react-router-dom";

const Product=()=>{

    const products=[{productName:"laptop",price:60000},
        {productName:"mouse",price:700},
        {productName:"keyboard",price:4000},
        {productName:"ram",price:1000},
        {productName:"desktop",price:4000},
    ]
   let copy=[...products]
   const location=useLocation()
   let {userid}=useParams()

   const navigate=useNavigate()
   const back =()=>{
     navigate(-1)
   }

   copy=copy.find((e,i)=>i==userid)
   console.log(copy)

    return(

        <>
        <div>
            {userid}
            <button onClick={back} className="bg-red-400 p-2 rounded-lg w-20">back</button>
               <div className="bg-black text-white p-15 rounded-lg w-20 flex justify-center items-center flex-col">
                <p>{copy.productName}</p>
                <p>{copy.price}</p>

               </div>

               <div>
            {

                    location.state.map((e,i)=>(
                    <p key={i}>{e}</p>
                    ))
            }
               </div>
        </div>
        </>
    )
}
export default Product;