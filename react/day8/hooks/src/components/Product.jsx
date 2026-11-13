import { useLocation, useNavigate, useParams } from "react-router-dom";

const Product =()=>{

      const datas=[{productName:"sam",ProductPrice:5000},
        {productName:"oppo",ProductPrice:6000},
        {productName:"redmi",ProductPrice:2000},
        {productName:"suva",ProductPrice:7000},
        {productName:"realme",ProductPrice:2000}
    ]
const location=useLocation()


    const {productid}=useParams()
   const navigate =useNavigate()
     const backChange=()=>{
            navigate(-1)
     }

 let copy=[...datas];

  copy=copy.find((e,i)=>i==productid)
  console.log(copy)
    return(
        <>
        <div>

          this is product

          <div >
            <button onClick={backChange} className="bg-red-500 text-white p-2 rounded-lg w-20 flex-col">back</button>
          </div>
             
          <div>
                  Product single{productid}
                    <h2>{copy.productName}</h2>
                    <p>{copy.ProductPrice}</p>
                  
                   {
                    location.state.map((e,i)=>(
                        <p key={i}>            {e}       </p>
                    ))
                   }

          </div>
        </div>
        </>
    )
}
export default Product;