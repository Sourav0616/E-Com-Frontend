import ser from "../../public/ser.png";
import off from "../../public/off.png";
import sbi from "../../public/sbi.jpg";
import one from "../../public/one.jpg";
import axis from "../../public/axis.jpg";
import mob from "../../public/mob.jpg";
import fas from "../../public/fas.jpg";
import ele from "../../public/ele.jpg";
import gro from "../../public/gro.jpg";
import spo from "../../public/spo.jpg";
import care from "../../public/care.jpg";
import cata from "../../public/cata.png";
import head from "../../public/head.jpg";
import lap from "../../public/lap.jpg";
import sho from "../../public/sho.jpg";
import tri from "../../public/tri.jpg";
import wat from "../../public/wat.jpg";
import scom from "../../public/scom.jpg";
import ucom from "../../public/ucom.jpg";
import gcom from "../../public/gcom.jpg";
import dcom from "../../public/dcom.jpg";
import leh from "../../public/leh.jpg";
import wod from "../../public/wod.jpg";
import pri from "../../public/pri.jpg";
import scard from "../../public/scard.png";
import scard1 from "../../public/scard1.png";
import hcard from "../../public/hcard.png";
import hcard1 from "../../public/hcard1.png";
import acard from "../../public/acard.png";
import acard1 from "../../public/acard1.png";
import ocard from "../../public/ocard.png";
import ocard1 from "../../public/ocard1.png";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setData } from "../store/getdata.slice.js";
import { setRenderProductCatagory } from "../store/setproductsrender.slice.js";

function Homeproducts() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.allProducts.data);
  const newLunched = useSelector((state) => state.allProducts.newlunchdata);
  const topReted = useSelector((state) => state.allProducts.toprateddata);


  const setProductRender = async (e)=>{
    e.preventDefault();
    const find =await allProducts.find((id)=> id._id == e.target.id)
    console.log(find.catagory)
    if(find){
      dispatch (setRenderProductCatagory(find.catagory))
      navigate("/app/catagoryproducts")
    }
  }



  const stMb = (e)=>{
    e.preventDefault();
    dispatch(setData("mobile"))
    navigate("/app/catagory")
  }
  const stEl = (e)=>{
    e.preventDefault();
    dispatch(setData("electronic"))
    navigate("/app/catagory")
  }

  const stGo = (e)=>{
    e.preventDefault();
    dispatch(setData("grocery"))
    navigate("/app/catagory")
  }
  const stBe = (e)=>{
    e.preventDefault();
    dispatch(setData("beauty"))
    navigate("/app/catagory")
  }
  const stSp = (e)=>{
    e.preventDefault();
    dispatch(setData("sport"))
    navigate("/app/catagory")
  }
  const stFa = (e)=>{
    e.preventDefault();
    dispatch(setData("fation"))
    navigate("/app/catagory")
  }
  const stCa = (e)=>{
    e.preventDefault();
    dispatch(setData(""))
    navigate("/app/catagory")
  }


  return (
    <div className="h-[692px] mb-2 w-[393px] scroll  bg-stone-200 ">
      <section className="bg-pirple-500 h-[692px] scroll overflow-auto flex flex-col items-center">
        {/* First part */}
        <div className="mt-1  min-h-16 flex justify-center items-center">
          <div className="w-[370px] h-[55px] bg-stone-400 flex rounded-2xl justify-center items-center">
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
        {/* First part */}

        {/* Second part */}
        <div className="flex w-[370px]">
          <Marquee>
            <div className=" flex w-auto">
              {/* Comp */}
              <div className=" min-h-48 min-w-[370px] mb-1 rounded-xl bg-red-300 mt-1 relative mr-1 scroll">
                <div className="content flex flex-col mt-3 ml-2 relative">
                  <h1 className="text-xl font-bold">
                    Big Savings for Everyone !!!
                  </h1>
                  <h1 className="text-xl font-bold">From Rs. 39999</h1>
                  <h1>
                    Save money , Save Time <br />
                    18 Months No cost EMI !{" "}
                  </h1>
                  <h1 className="text-sm font-bold mt-2">
                    Additional 10% Discounts on
                  </h1>
                  <div className="flex mt-1">
                    <img src={one} alt="" className="h-8 w-16  mr-1" />
                    <img src={sbi} alt="" className="h-8 w-16  mr-1" />
                    <img src={axis} alt="" className="h-8 w-16 mr-1" />
                  </div>
                </div>
                <div className="mt-[-135px] ml-[210px] absolute h-24 w-36  flex justify-center items-center">
                  <img src={off} alt="" className=" h-40" />
                </div>
              </div>
              {/* Comp */}

              {/* Comp */}
              <div className=" min-h-48 min-w-[370px] mb-1 rounded-xl bg-red-300 mt-1 relative mr-1 scroll">
                <div className="content flex flex-col mt-3 ml-2 relative">
                  <h1 className="text-xl font-bold">
                    Big Savings for Everyone !!!
                  </h1>
                  <h1 className="text-xl font-bold">From Rs. 39999</h1>
                  <h1>
                    Save money , Save Time <br />
                    18 Months No cost EMI !{" "}
                  </h1>
                  <h1 className="text-sm font-bold mt-2">
                    Additional 10% Discounts on
                  </h1>
                  <div className="flex mt-1">
                    <img src={one} alt="" className="h-8 w-16  mr-1" />
                    <img src={sbi} alt="" className="h-8 w-16  mr-1" />
                    <img src={axis} alt="" className="h-8 w-16 mr-1" />
                  </div>
                </div>
                <div className="mt-[-135px] ml-[210px] absolute h-24 w-36  flex justify-center items-center">
                  <img src={off} alt="" className=" h-40" />
                </div>
              </div>
              {/* Comp */}

              {/* Comp */}
              <div className=" min-h-48 min-w-[370px] mb-1 rounded-xl bg-red-300 mt-1 relative mr-1 scroll">
                <div className="content flex flex-col mt-3 ml-2 relative">
                  <h1 className="text-xl font-bold">
                    Big Savings for Everyone !!!
                  </h1>
                  <h1 className="text-xl font-bold">From Rs. 39999</h1>
                  <h1>
                    Save money , Save Time <br />
                    18 Months No cost EMI !{" "}
                  </h1>
                  <h1 className="text-sm font-bold mt-2">
                    Additional 10% Discounts on
                  </h1>
                  <div className="flex mt-1">
                    <img src={one} alt="" className="h-8 w-16  mr-1" />
                    <img src={sbi} alt="" className="h-8 w-16  mr-1" />
                    <img src={axis} alt="" className="h-8 w-16 mr-1" />
                  </div>
                </div>
                <div className="mt-[-135px] ml-[210px] absolute h-24 w-36  flex justify-center items-center">
                  <img src={off} alt="" className=" h-40" />
                </div>
              </div>
              {/* Comp */}
            </div>
          </Marquee>
        </div>
        {/* Second part */}

        {/* Third Part*/}

        <div className="min-h-24 max-w-[370px]  mt-1 cover">
          <div className="h-24 overflow-scroll scroll  flex">

            
            <button className="h-24 min-w-20  flex flex-col  justify-around items-center ml-[-8px]"
            onClick={(e)=>stMb(e)}
            >
              <img src={mob} alt="" className="h-16 w-16 rounded-full" 
             
              />
              <h1
              
              >Mobile</h1>
            </button>

            <button className="h-24 min-w-20  flex flex-col  justify-around items-center"
            onClick={(e)=>stFa(e)}
            >
              <img src={fas} alt="" className="h-16 w-16 rounded-full" />
              <h1>Fations</h1>
            </button>

            <button className="h-24 min-w-20  flex flex-col  justify-around items-center"
            onClick={(e)=>stEl(e)}
            >
              <img src={ele} alt="" className="h-16 w-16 rounded-full" />
              <h1>Electronic</h1>
            </button>

            <button className="h-24 min-w-20  flex flex-col justify-around items-center"
            onClick={(e)=>stGo(e)}
            >
              <img src={gro} alt="" className="h-16 w-16 rounded-full" />
              <h1>Grocery</h1>
            </button>

            <button className="h-24 min-w-20  flex flex-col  justify-around items-center"
            onClick={(e)=>stSp(e)}
            >
              <img src={spo} alt="" className="h-16 w-16 rounded-full" />
              <h1>Sports</h1>
            </button>

            <button className="h-24 min-w-20  flex flex-col  justify-around items-center"
            onClick={(e)=>stBe(e)}
            >
              <img src={care} alt="" className="h-16 w-16 rounded-full" />
              <h1>Beauty</h1>
            </button>

            <button className="h-24 min-w-20  flex flex-col  justify-around items-center"
            onClick={(e)=>stCa(e)}
            >
              <img src={cata} alt="" className="h-16 w-16 rounded-full" />
              <h1>Catagories</h1>
            </button>
          </div>
        </div>

        {/* Third Part*/}

        {/* Fourth Part */}
        <div className="min-h-44 w-[370px] scroll  mt-1 flex flex-col">
          <h1 className="text-xl font-bold">NEW LUNCHED</h1>
          <div className="h-32 overflow-scroll scroll  flex  mt-2">
            {/*  cpmps */}

            {newLunched &&
              newLunched.map((data) => (
                <div
                  key={data._id}
                  className="flex flex-col h-32 min-w-24 bg-yellow-100 justify-around items-center mr-1"
                  
                >
                  <button
                    className="w-full  h-full"
                   
                    // Prevent click from bubbling up to the outer div
                  >
                    <img src={data.image} alt="" className="h-20 w-[70px] m-auto" onClick={(e) => setProductRender(e)}
                  id={data._id}/>
                    <h1 className="text-sm uppercase font-bold"
                    onClick={(e) => setProductRender(e)}
                    id={data._id}
                    
                    >
                      {data.title}
                    </h1>
                    <h1 className="text-md capitalize font-bold"
                    onClick={(e) => setProductRender(e)}
                    id={data._id}
                  
                    >
                      {data.headline}
                    </h1>
                  </button>
                </div>
              ))}

            {/*  cpmps */}
          </div>
        </div>
        {/* Fourth Part */}

        {/* Fifth Part */}
        <div className="min-h-[370px] w-[370px]  mt-1 flex flex-col ">
          <h1 className="text-xl font-bold">TOP RETED</h1>
          <div className="flex scroll flex-wrap overflow-y-auto mt-1 justify-between items-center">
            {topReted &&
              topReted.map((data) => (
                <button
                  className="bg-yellow-100  h-40 min-w-[180px] mt-2 flex flex-col items-center justify-around"
                  key={data._id}
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                >
                  <img src={data.image} alt="" className="h-20 w-36"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  />
                  <h1 className="text-xl capitalize font-bold"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  >{data.title}</h1>
                  <h1 className="text-sm"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  >
                    {data.brand},{data.brand}
                  </h1>
                  <h1 className="text-md font-bold"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  >
                    Starting from {data.saleprice}
                  </h1>
                </button>
              ))}
          </div>
        </div>
        {/* Fifth Part */}

        {/* Six Part*/}
        <div className="min-h-36 w-[370px]  flex flex-col  mt-1">
          <h1 className="text-xl font-bold">CREDIT CARD</h1>
          <div className="h-32 overflow-scroll scroll  flex  mt-2">
            {/* comps */}

            <Link to="https://www.sbicard.com/sprint/simplyClick?CS=Google" className="flex flex-col h-[100px] min-w-20 bg-yellow-100 justify-around items-center mr-4">
              <img src={scard} alt="" className="h-2 ml-10" />
              <img src={scard1} alt="" className="h-10" />
              <h1 className=" text-xs">Lifetime Free</h1>
              <h1 className=" font-bold text-sm mt-[-5px]">Apply Now</h1>
            </Link>

            <button className="flex flex-col h-[100px] min-w-20 bg-yellow-100 justify-around items-center mr-4">
              <img src={hcard} alt="" className="h-2 ml-10" />
              <img src={hcard1} alt="" className="h-10" />
              <h1 className=" text-xs">Max Benifit</h1>
              <h1 className=" font-bold text-sm mt-[-5px]">Apply Now</h1>
            </button>

            <button className="flex flex-col h-[100px] min-w-20 bg-yellow-100 justify-around items-center mr-4">
              <img src={acard} alt="" className="h-2 ml-10" />
              <img src={acard1} alt="" className="h-10" />
              <h1 className=" text-xs">Smart Card</h1>
              <h1 className=" font-bold text-sm mt-[-5px]">Apply Now</h1>
            </button>

            <button className="flex flex-col h-[100px] min-w-20 bg-yellow-100 justify-around items-center mr-4">
              <img src={ocard} alt="" className="h-2 ml-8" />
              <img src={ocard1} alt="" className="h-10" />
              <h1 className=" text-xs">Metal Card</h1>
              <h1 className=" font-bold text-sm mt-[-5px]">Apply Now</h1>
            </button>

            <button className="flex flex-col h-[100px] min-w-20 bg-yellow-100 justify-around items-center mr-4">
              <img src={scard} alt="" className="h-2 ml-10" />
              <img src={scard1} alt="" className="h-10" />
              <h1 className=" text-xs">Smart Card</h1>
              <h1 className=" font-bold text-sm mt-[-5px]">Apply Now</h1>
            </button>

            {/* comps */}
          </div>
        </div>
        {/* Six Part*/}

        {/* Seventh Part */}
        <div className="min-h-[480px] w-[370px]  flex flex-col  mt-1 mb-1">
          <h1 className="text-xl font-bold">EXCLUSIVE FOR YOU</h1>
          <div className="flex scroll flex-wrap overflow-y-scroll mt-1 justify-between items-center">
            {allProducts &&
              allProducts.map((data) => (
                <button
                  className="bg-yellow-100  max-h-60 min-h-60 min-w-[175px] mt-2 flex flex-col items-center justify-around"
                  key={data._id}
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                >
                  <img src={data.image} alt="" className="h-40 w-36  mt-2"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  />
                  <h1 className="text-xl font-bold"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  >{data.title}</h1>
                  <h1 className="text-xl font-bold mb-1 text-green-600"
                  onClick={(e) => setProductRender(e)}
                  id={data._id}
                  >
                    {data.headline}
                  </h1>
                </button>
              ))}
          </div>
        </div>
        {/* Seventh Part */}
      </section>
    </div>
  );
}

export default Homeproducts;
