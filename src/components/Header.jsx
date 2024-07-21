import { Link } from "react-router-dom";
import logo from "../../public/comvectorstock45685575-removebg-preview.png";

function Header() {
    return(
        <>
        {/* Header comp */}
      <header className="h-20 w-[393px] bg-yellow-100 flex justify-between items-center">
        <div className="w-16 h-16 ml-2">
          <img src={logo} alt="its the logo" className="h-16 w-16" />
        </div>
        <Link to="/nav" className="h-20 w-20 text-7xl mt-[-18px] pl-5">&#8801;</Link>
      </header>
      {/* Header comp */}
        </>
    )
}
export default  Header;