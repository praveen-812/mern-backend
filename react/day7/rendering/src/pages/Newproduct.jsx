const Newproduct=()=>{

    const product={
         id: "P101",
        name: "Samsung Smartphone",
        price: 20000,
        brand: "Samsung",
        category: "Electronics"
    }
    return(
        <>
        <div className="bg-black text-white p-12 text-center">
            <h2>Buy Galaxy S24 - Second Hand Phone | CompAsia Philippines</h2>
            <p>{product.name}</p>
            <p>brand:{product.brand}</p>
            <p>category:{product.category}</p>
            <h2>{product.price*0.9}</h2>
            <p>{product.price}</p>




        </div>


        </>
    )
}
export default Newproduct;