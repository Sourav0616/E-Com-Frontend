import { Link } from "react-router-dom";
import cross from "../../public/cross.png";
import { useDispatch  } from "react-redux";
function Nav() {
  return (
    <div className="h-[852px] w-[393px] m-auto justify-between items-center bg-stone-200 overflow-hidden flex  flex-col">
      <div className="h-[330px] w-[500px] bg-yellow-100 oval relative  flex flex-col justify-center items-center">
        <Link to="/app/home" className="h-12 w-12 absolute ml-80 mb-24">
          <img
            src={cross}
            alt=""
            className="h-12 rounded-full bg-stone-200 p-3"
          />
        </Link>
      </div>

      <div className="w-96 h-[800px]  flex flex-col items-center ">
        <div className="h-[100%] w-[370px] p-16  flex flex-col justify-around items-center">
          <Link to="/app/home"> HOME</Link>
          <a href=""> ABOUT</a>
          <a href=""> PROFILE</a>
          <a href=""> HELP & SUPPORT</a>
          <a href=""> PRIVECY POLICES</a>
          <button className=" h-12 w-24 bg-yellow-100 mt-5 font-bold rounded-xl">
            LOGOUT
          </button>
        </div>
      </div>

      <div className="h-[330px] w-[500px] bg-yellow-100 ovalt    flex flex-col justify-center items-center"></div>
    </div>
  );
}

export default Nav;
