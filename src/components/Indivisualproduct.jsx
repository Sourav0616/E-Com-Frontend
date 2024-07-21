import { useState } from "react";
import ser from "../../public/ser.png";
import { setViewProduct } from "../store/viewproduct.slice.js";
import { RiStarSFill } from "react-icons/ri";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../store/cartslice.js";
function Indivisualproducts() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.viewproduct.product);
  const allProducts = useSelector((state) => state.allProducts.data);
  const [similarproducts, setSimilarProducts] = useState(allProducts);

  const viewProducts = async (e)=>{
    e.preventDefault();
    const findProduct = await similarproducts.find((item)=> item._id == e.target.id)
    dispatch (setViewProduct(findProduct))
   
  }

  useEffect(() => {
    const filter = allProducts.filter(
      (items) => items.catagory == data.catagory
    );
    console.log(filter);
    setSimilarProducts(filter)
  }, [data]);


  const sentDataToCart = (e)=>{
    console.log(e.target.id)
    e.preventDefault();
    const data = {
      userId : "6633886f35f919c0926f17ae",
      productId : e.target.id
    }
    dispatch(addToCart(data))
  }
  

  return (
    <div className="h-[852px] w-[393px]   bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 h-[850px] scroll overflow-auto mb-2 flex flex-col items-center">
        <div className="h-20 w-96 mt-2  flex justify-around items-center">
          <div className="w-24 h-16  bg-yellow-100 flex justify-center items-center text-md font-bold rounded-xl capitalize">
            {data.catagory}
          </div>

          <div className="w-[270px] h-16 bg-stone-400 flex rounded-2xl justify-center items-center">
            <input
              type="search"
              className="w-[300px]  h-12 rounded-xl bg-transparent pl-2 text-black red"
              placeholder="Search your product..."
            />
            <div className="w-1 border-r-2 border-yellow-100 h-10"></div>
            <button className="w-24  h-12 rounded-xl flex justify-center items-center ">
              <img src={ser} alt="" className="h-10" />
            </button>
          </div>
        </div>

        {/* Product */}

        <div className="w-[373px] h-auto  mt-2">
          <div className="w-[373px] min-h-[612px]  rounded-xl bg-yellow-100 flex   flex-col items-center justify-around">
            <img
              src={data.image}
              alt=""
              className="h-80 w-80 rounded-xl mt-4"
            />
            <div className="w-80">
              <h1 className="font-bold text-xl mt-2">{data.name}</h1>
              <h1 className="font-semibold text-md mt-2">{data.description}</h1>
              <div className="flex items-center h-12 mt-2 ml-[-3px]">
                <RiStarSFill className="text-3xl text-green-600" />
                <RiStarSFill className="text-3xl text-green-600" />
                <RiStarSFill className="text-3xl text-green-600" />
                <RiStarSFill className="text-3xl text-green-600" />
                <RiStarSFill className="text-3xl  text-red-600" />
                <h1 className="text-2xl ml-3 font-semibold">(11,490)</h1>
              </div>

              <div className="flex justify-between items-center w-60 mt-1">
                <span className="line-through font-bold text-2xl">
                  MRP {data.mrp}
                </span>
                <span className=" font-bold text-2xl ml-2">
                  Rs {data.saleprice}
                </span>
              </div>

              <div className="w-80 h-20 flex justify-between mt-3">
                <button className="h-16 w-32 bg-yellow-500 text-xl font-bold p-1 rounded-xl"
                id={data._id}
                onClick={(e)=>sentDataToCart(e)}
                >
                  Add to cart
                </button>

                <button className="h-16 w-32 bg-green-500 text-xl font-bold p-1 rounded-xl">
                  Buy now
                </button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          
          <div className="w-[373px] mt-2 h-auto  flex flex-col">
          { data && data.review.length > 0 ? <h1 className="h-12 flex items-center font-bold text-2xl pl-2">
              Reviews
            </h1> : null }
            

            {data && data.review.length > 0 && data.review.map((item)=>
            <div className="w-[373px] flex flex-col bg-yellow-100 mt-2 mb-2 rounded-xl p-2"
            key={item.text}
            >
              <h1 className="font-bold text-2xl ">{item.name}</h1>
              <h1 className="text-lg font-semibold w-80 mt-2 ">
              {item.text}
              </h1>
              <div className="flex items-center h-8 font-bold text-xl">
                {item.rating} &nbsp; <RiStarSFill className="text-green-500  text-2xl" />
              </div>
            </div>
            )}
          </div>

          {/* Reviews */}
        </div>

        {/* Product */}

        <div className="w-[373px] mt-1 h-auto  flex flex-col">
          <div className="h-auto w-[373px]">
            <h1 className="h-12 flex items-center font-bold text-2xl">
              Similar Products
            </h1>
          </div>

          <div className="h-auto  mb-2 w-96 mt-2  overflow-y-scroll scroll flex flex-wrap justify-around items-center">
            {/* Comp */}

            {similarproducts.map((items)=>
             <div className="min-w-[46%] min-h-60 mb-2 bg-yellow-100 flex flex-col items-center justify-around cursor-pointer"
             key={items._id}
             id={items._id}
              onClick={(e)=>viewProducts(e)}
             >
               <img src={items.image} alt="" className="h-32 w-28 mt-2"
               id={items._id}
               onClick={(e)=>viewProducts(e)}
                />
               <h1 className="w-32 h-2 text-sm font-bold text-center"
               id={items._id}
               onClick={(e)=>viewProducts(e)}
               >
                 {items.name}
               </h1>
 
               <div className="w-24 flex justify-center items-center h-12 mt-6 "
               id={items._id}
               onClick={(e)=>viewProducts(e)}
               >
                 <RiStarSFill className="text-3xl text-green-600" />
                 <RiStarSFill className="text-3xl text-green-600" />
                 <RiStarSFill className="text-3xl text-green-600" />
                 <RiStarSFill className="text-3xl text-green-600" />
                 <RiStarSFill className="text-3xl  text-red-600" />
               </div>
 
               <div className="w-40 h-10  mt-[-10px] flex justify-between items-center"
               id={items._id}
               onClick={(e)=>viewProducts(e)}
               >
                 <span className="line-through ml-3 font-bold">MRP {items.mrp}</span>
                 <span className=" font-bold mr-3">Rs {items.saleprice}</span>
               </div>
             </div>
          )}
           
             
        
            {/* Comp */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Indivisualproducts;
