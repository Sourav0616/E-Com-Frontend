import cart from "../../public/cart.png";
import cata from "../../public/cata.png";
import home from "../../public/home.png";
import noti from "../../public/noti.png";
import profile from "../../public/profile.png";
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { getAllCartItems } from "../store/cartslice.js";
import { useNavigate } from "react-router-dom";
import { getOrder} from "../store/orderslice.js"
function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.user);

  const order = (e) => {
    e.preventDefault();
    const data = {
      userId: currentUser._id,
    };
    dispatch(getOrder(data));
    navigate("/app/profile");
  };

  const getAllcartData = (e) => {
    e.preventDefault();
    const data = {
      userId: currentUser._id,
    };
    dispatch(getAllCartItems(data));
    navigate("/app/cart");
  };

  return (
    <>
      {/* Footer comp */}
      <footer className="h-20 w-[393px] bg-yellow-100 flex justify-around items-center">
        <Link
          to="/app/home"
          className="w-[15%] h-16 flex justify-between items-center flex-col"
        >
          <img src={home} alt="" className="h-12 w-12" />
          <h1 className="text-sm">Home</h1>
        </Link>

        <Link
          to="/app/catagory"
          className="w-[20%] h-16 flex justify-between items-center flex-col"
        >
          <img src={cata} alt="" className="h-12 w-12" />
          <h1 className="text-sm">Catagories</h1>
        </Link>

        <Link
          to="/app/notification"
          className="w-[20%] h-16 flex justify-between items-center flex-col"
        >
          <img src={noti} alt="" className="h-12 w-12" />
          <h1 className="text-sm">Notifications</h1>
        </Link>

        <button
          onClick={(e) => order(e)}
          className="w-[15%] h-16 flex justify-between items-center flex-col ml-1"
        >
          <img src={profile} alt="" className="h-12 w-12" 
          onClick={(e) => order(e)}
          />
          <h1 className="text-sm"
          onClick={(e) => order(e)}
          >Profile</h1>
        </button>

        <button
          className="w-[15%] h-16 flex justify-between items-center flex-col "
          onClick={(e) => getAllcartData(e)}
        >
          <img
            src={cart}
            alt=""
            className="h-12 w-12"
            onClick={(e) => getAllcartData(e)}
          />
          <h1 className="text-sm ml-2" onClick={(e) => getAllcartData(e)}>
            Cart
          </h1>
        </button>
      </footer>
      {/* Footer comp */}
    </>
  );
}
export default Footer;
