import { useSelector, useDispatch } from "react-redux";
import { Plus, Minas, removeToCart } from "../store/cartslice.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Cart() {
  const cartData = useSelector((state) => state.setcart.cartitems);
  const currentUser = useSelector((state) => state.user.user);
const navigate = useNavigate()
  const dispatch = useDispatch();
  let gross = 0;
  let total = 0;
  for (let i = 0; i < cartData.length; i++) {
    total += cartData[i].indivizualproduct.saleprice * cartData[i].quantity;
    gross += cartData[i].indivizualproduct.mrp * cartData[i].quantity;
  }

  const increase = async (e) => {
    e.preventDefault();
    const id = cartData.find((items) => items._id == e.target.id);

    console.log(id);
    const data = {
      userId: currentUser._id,
      productId: id.indivizualproduct._id,
    };
    dispatch(Plus(data));
  };

  const decrease = async (e) => {
    e.preventDefault();
    const id = cartData.find((items) => items._id == e.target.id);

    const data = {
      userId: currentUser._id,
      productId: id.indivizualproduct._id,
    };
    dispatch(Minas(data));
  };

  const remove = async (e) => {
    e.preventDefault();
    const id = cartData.find((items) => items._id == e.target.id);
    console.log(id);

    const data = {
      userId: currentUser._id,
      productId: id.indivizualproduct._id,
    };
    dispatch(removeToCart(data));
  };

  const navToo = ()=>{
    navigate("/app/home")
  
   }

  useEffect(() => {}, [cartData]);

  return (
    <div className="h-[692px] w-[393px] bg-stone-200 flex flex-col">

{cartData.length < 1 ? (
          <div className="h-[370px] items-center flex flex-col m-auto w-72 bg-yellow-100 rounded-2xl">
            <img
              src={
                "https://mir-s3-cdn-cf.behance.net/projects/404/2f038b134324769.Y3JvcCwxMDEwLDc5MCwyNSww.png"
              }
              alt=""
              className="h-[180px] mt-8 "
            />
            <h1 className="mt-6 text-md font-bold">
              No Such Items In Cart !!!
            </h1>
            <button
              className="mt-8 bg-slate-400 h-10 w-32 rounded-xl font-bold "
              onClick={() => navToo()}
            >
              Shop Now
            </button>
          </div>
        ) : <section className="bg-pirple-500 min-h-[692px] scroll overflow-y-scroll mb-2 flex flex-col items-center">
        <h1 className="min-h-12 w-96 mt-1 text-center text-xl font-bold">
          My Cart
        </h1>

        <div className="w-[373px] min-h-40 bg-yellow-100 rounded-lg p-2 flex items-center">
          <div className="w-[70%]">
            <h1 className="text-md font-bold">Deliver to :</h1>
            <p className="mt-1 text-sm font-medium">
              {currentUser.addaress}
            </p>
            <h2 className="mt-2 font-bold">{currentUser.mobile}</h2>
          </div>
          <button className="w-24 ml-2 h-12 bg-red-600 rounded-xl text-xl font-bold text-center">
            {currentUser.addaress ? <span>Change</span> : <span>Add</span>}
          </button>
        </div>

        <div className=" w-[373px] h-auto  justify-center mt-1 items-center bg-yellow-100 flex flex-col scroll">
          {/* Comps */}

          {cartData &&
            Array.isArray(cartData) &&
            cartData.map((data) => (
              <div
                className="min-h-32 mt-2 mb-2 flex items-center justify-around w-[360px] bg-stone-200 rounded-xl"
                key={data._id}
              >
                <div className="h-24 w-20 rounded-xl">
                  <img
                    src={data.indivizualproduct.url}
                    alt=""
                    className="h-24 w-20 rounded-xl"
                  />
                </div>
                <div className="h-24 w-40    flex justify-around flex-col">
                  <h1 className="w-40 text-sm font-bold mt-1">
                    Detergent Powder(1 Kg)
                  </h1>
                  <div className="w-40 h-12 flex justify-between mt-1">
                    <h1 className="line-through font-bold text-md">
                      Rs {data.indivizualproduct.mrp * data.quantity}
                    </h1>
                  </div>
                  <button
                    className="mb-1 rounded w-16 bg-yellow-100 text-red-500 text-sm font-bold p-1"
                    id={data._id}
                    onClick={(e) => remove(e)}
                  >
                    Remove
                  </button>
                </div>
                <h1 className="font-bold text-md mr-1">
                  Rs {data.indivizualproduct.saleprice * data.quantity}
                </h1>
                <div className="h-24 w-12 text-center  bg-yellow-100 rounded flex justify-around items-center flex-col">
                  <button
                    className="h-7 text-2xl justify-center items-center flex font-bold w-7 pb-1 bg-stone-200 rounded-full"
                    onClick={(e) => increase(e)}
                    id={data._id}
                  >
                    +
                  </button>
                  <h1>{data.quantity}</h1>
                  <button
                    className="h-7 w-7 text-2xl font-bold flex justify-center items-center bg-stone-200 rounded-full text-center pb-2"
                    onClick={(e) => decrease(e)}
                    id={data._id}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}

          {/* Comps */}
        </div>

        <div className=" h-40 w-[373px] rounded-xl bg-yellow-100 mt-10 p-2 flex flex-col justify-between">
          <div className="flex w-[373px] h-9 justify-between items-center">
            <h1 className="w-[60%]  font-bold text-xl h-10">Gross Total</h1>
            <h1 className="w-[10%]  font-bold text-xl h-10 pl-3">Rs</h1>
            <h1 className="w-[25%] mr-4 font-bold text-xl h-10 ">
              <span className="ml-4 float-right">{total}</span>
            </h1>
          </div>

          <div className="flex w-[373px] h-9 justify-between items-center">
            <h1 className="w-[60%]  font-bold text-xl h-10">Delivery</h1>
            <h1 className="w-[10%]  font-bold text-xl h-10 pl-3">Rs</h1>
            <h1 className="w-[25%] mr-4 font-bold text-xl h-10 ">
              <span
                className={`${
                  total > 999
                    ? "capitalize ml-5 float-right"
                    : "ml-5 float-right"
                }`}
              >
                {total > 999 ? "free" : 49}
              </span>
            </h1>
          </div>
          <div className="w-[357px] h-2 border-b-2 border-black"></div>

          <div className="flex w-[373px] mt-1 h-9 justify-between items-center">
            <h1 className="w-[60%]  font-bold text-xl h-10">Sub Total</h1>
            <h1 className="w-[10%]  font-bold text-xl h-10 pl-3 ">Rs</h1>
            <h1 className="w-[25%]  mr-4 font-bold text-xl h-10 ">
              <span className="ml-5 float-right">
                {total < 999 ? `${(total += 49)}` : total}
              </span>
            </h1>
          </div>

          <div className="flex w-[373px] h-9 justify-between items-center">
            <h1 className="w-[60%]  font-bold text-md text-green-500 h-10">
              Your Total Savings Worth{" "}
            </h1>
            <h1 className="w-[40%]   text-green-500  mr-4 font-bold text-md h-10 ">
              <span className="">( Rs &nbsp; {gross - total})</span>
            </h1>
          </div>
        </div>

        <Link
          to={`/payment/${total}`}
          className="min-h-12 text-xl flex justify-center items-center font-bold rounded-xl w-48 bg-green-600 mt-10 mb-5"
        >
          Pay
        </Link>
      </section>}


      
    </div>
  );
}

export default Cart;
