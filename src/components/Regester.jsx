import { useRef } from "react";
import logo from "../../public/comvectorstock45685575-removebg-preview.png";
import { Link } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux"
import { userRegister } from "../store/user.slice.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Regester() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const massage = useSelector((state)=> state.user.user)
  console.log(massage)
  const email = useRef("")
  const name  = useRef("")
  const password = useRef("")

 const regester = (e)=>{
  e.preventDefault();
  const data = {
    email: email.current.value,
    name: name.current.value,
    password: password.current.value
  }
 dispatch(userRegister(data))
 name.current.value = ""
 email.current.value = ""
 password.current.value = ""
 }

 useEffect(()=>{
  if(massage.name){
   navigate("/login")
  }
 },[regester , massage])


  return (
    <div className="h-[852px] w-[393p]  bg-stone-200 flex flex-col m-auto overflow-hidden">
      {/* logo part */}
      <div className="h-[330px] w-[580px] bg-yellow-100 oval mr-auto ml-[-90px] mt-[-60px] flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="its the logo"
          className="h-[100px] w-[100px] ml-auto mr-auto mt-[6%]"
        />
        <h1 className="mt-6 font-semibold text-xl">REGESTER WITH DOLPHY</h1>
      </div>
      {/* logo part */}

      {/* Regester part */}
      <div className="h-[550px] w-96 m-auto flex flex-col items-center">
        <form className="h-96 flex flex-col items-center justify-around">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-lg font-semibold mt-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2 text-black border-2 border-blue-800"
              ref={email}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="name" className="text-lg font-semibold mt-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={name}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="password" className="text-lg font-semibold mt-2">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password....."
              className=" w-80 h-10 pl-1 rounded-lg mt-2  border-2 border-blue-800"
              ref={password}
            />
          </div>
          <button
            type="submit"
            className="h-12 w-28 bg-blue-800 rounded-xl mt-12 font-bold"
            onClick={(e)=>regester(e)}
          >
            REGESTER
          </button>
        </form>

        <div className=" flex mt-10 font-semibold text-xl">
          <span>REGESTER</span>
          &nbsp;
          <span>/</span>
          &nbsp;
          <Link to="/login">  &nbsp;LOGIN</Link>
        </div>
      </div>
      {/* Regester part */}
    </div>
  );
}

export default Regester;
