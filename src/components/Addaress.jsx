
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAddaress } from "../store/user.slice.js";
function Addaress() {
  const currentUser = useSelector((state) => state.user.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [massage, setMassage] = useState("");
  const adrs = useRef("");
  const city = useRef("");
  const ldmk = useRef("");
  const dist = useRef("");
  const pin = useRef("");
  const mob = useRef("");
  
  const addTo = async (e) => {
    e.preventDefault();

    const data = {
      adrs: adrs.current.value,
      city: city.current.value,
      ldmk: ldmk.current.value,
      dist: dist.current.value,
      pin: pin.current.value,
      mob: mob.current.value,
      token : currentUser.accesstoken
    };
    
      
    switch (true) {
      case !data.adrs:
        setMassage("Please enter your address");
        return;
      case !data.city:
        setMassage("Please enter your city");
        return;
      case !data.ldmk:
        setMassage("Please enter your landmark");
        return;
      case !data.dist:
        setMassage("Please enter your district");
        return;
      case !data.pin:
        setMassage("Please enter your pin code");
        return;
      case !data.mob:
        setMassage("Please enter your mobile number");
        return;
      default:
        setMassage("All fields are valid");
    }

    adrs.current.value = "";
    city.current.value = "";
    ldmk.current.value = "";
    dist.current.value = "";
    pin.current.value = "";
    mob.current.value = "";
    dispatch(addUserAddaress(data));
    navigate("/app/profile");
  };

  
    
 
  return (
    <div className="h-screen w-[393px]  bg-stone-200 flex flex-col m-auto overflow-hidden">
      {/* Add addaress part */}

      <div className="h-auto w-96 m-auto flex flex-col items-center">
        <form className="h-auto flex flex-col items-center justify-around">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-lg font-semibold mt-2">
              ADDARESS LINE
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2 text-black border-2 border-blue-800"
              ref={adrs}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="name" className="text-lg font-semibold mt-2">
              CITY
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={city}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="name" className="text-lg font-semibold mt-2">
              LANDMARK
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={ldmk}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="name" className="text-lg font-semibold mt-2">
              DISTRICT
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={dist}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="password" className="text-lg font-semibold mt-2">
              PINCODE
            </label>
            <input
              maxLength={`${6}`}
              type="text"
              id="password"
              placeholder="Enter your mobile..."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={pin}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="password" className="text-lg font-semibold mt-2">
              MOBILE
            </label>
            <input
              maxLength={`${10}`}
              type="text"
              id="password"
              placeholder="Enter your mobile..."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={mob}
            />
          </div>
          {massage != "All fields are valid" ? (
            <h1 className="mt-5 text-xl font-bold text-red-600">{massage}</h1>
          ) : null}
          {show == true ? (
            <h1 className="mt-5 text-xl font-bold text-red-600">
              Try Again !!!
            </h1>
          ) : null}
          <button
            type="submit"
            className="h-12 w-28 bg-blue-800 rounded-xl mt-12 font-bold"
            onClick={(e) => addTo(e)}
          >
            ADD
          </button>
        </form>
      </div>
      {/* Add addaress part */}
    </div>
  );
}

export default Addaress;
