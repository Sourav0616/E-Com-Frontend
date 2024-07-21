import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setReview } from "../store/orderslice.js";
function Reviews() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.order.orderitems);
  const massage = useSelector((state) => state.order.rmassage);
  console.log(massage);
  const currentUser = useSelector((state) => state.user.user);

  const [show, setShow] = useState(true);
  const [demo, setDemo] = useState({});
  const [star, setStar] = useState("");

  const text = useRef("");

  const setData = (e) => {
    e.preventDefault();
    const data = items.find((item) => item.product._id == e.target.id);
    setDemo(data);
    setShow(false);
  };
  

  

  const saveReview = (e) => {
    e.preventDefault();
    const data = {
      token: currentUser.accesstoken,
      productId: demo.product._id,
      orderId: demo._id,
      text: text.current.value,
      rating: star,
    };
    dispatch(setReview(data));
    setDemo({});
    setShow(!false);
  };

  const starSet = (e) => {
    e.preventDefault();
    setStar(e.target.id);
    console.log(e.target.id);
  };
  const backTo = () => {
    setShow(!false);
    setStar("");
  };
  const navTo = ()=>{
    navigate("/app/home")
  
   }

  useEffect(() => {
    if (massage == "ok") {
      backTo();
    }
  }, [star, starSet, currentUser, massage, items, saveReview]);

  return (
    <div className="h-[692px] w-[393px] bg-stone-200 flex flex-col">
      <section className="bg-pirple-500 min-h-[692px] scroll overflow-y-scroll mb-2 flex flex-col items-center">
        <h1 className="w-96 mt-4 pl-2  mb-2 text-xl font-bold">
          Products For Review
        </h1>

        <div className="flex justify-between items-center w-[373px] mt-2">
          <Link
            to="/app/profile"
            className="h-10 w-40 bg-yellow-100 text-xl flex justify-center items-center font-bold rounded-xl"
          >
            Orders
          </Link>

          <Link className="h-10 w-40 bg-yellow-100 text-xl flex justify-center items-center font-bold rounded-xl">
            Reviews
          </Link>
        </div>

        {items.length < 1 ? (
          <div className="h-[370px] items-center flex flex-col m-auto w-72 bg-yellow-100 rounded-2xl">
            <img
              src={
                "https://mir-s3-cdn-cf.behance.net/projects/404/2f038b134324769.Y3JvcCwxMDEwLDc5MCwyNSww.png"
              }
              alt=""
              className="h-[180px] mt-8 "
            />
            <h1 className="mt-6 text-md font-bold">
              No Such Items For Review !!!
            </h1>
            <button
              className="mt-8 bg-slate-400 h-10 w-32 rounded-xl font-bold "
              onClick={() => navTo()}
            >
              Shop Now
            </button>
          </div>
        ) : null}

        {!show && demo ? (
          <div className="flex flex-col justify-around min-h-80 mt-12 w-80 items-center  bg-yellow-100 relative rounded-xl">
            <button onClick={() => backTo()}>
              <img
                src={
                  "https://cdn.icon-icons.com/icons2/1760/PNG/512/4105963-cross-delete-remove_113917.png"
                }
                alt=""
                className="h-8 absolute ml-[120px] mt-2"
                onClick={() => backTo()}
              />
            </button>
            <img
              src={demo.product.url}
              alt=""
              className="h-20 rounded-xl mt-2"
            />
            <h1 className="mt-2 font-bold">{demo.product.productname}</h1>

            <input
              type="textarea"
              className="min-h-12 border-2 border-slate-400 rounded-xl w-72 pl-1 mt-4"
              placeholder="Write your review...."
              id="text"
              ref={text}
            />

            <div className="w-48 mt-3 flex justify-around items-center h-10">
              <button>
                <img
                  src={
                    "https://cdn.iconscout.com/icon/free/png-256/free-star-border-1781446-1517956.png?f=webp"
                  }
                  alt=""
                  className={`h-8 w-8 rounded-full ${
                    star && star >= "1" ? "bg-green-400" : null
                  }`}
                  id="1"
                  onClick={(e) => starSet(e)}
                />
              </button>

              <button>
                <img
                  src={
                    "https://cdn.iconscout.com/icon/free/png-256/free-star-border-1781446-1517956.png?f=webp"
                  }
                  alt=""
                  className={`h-8 w-8 rounded-full ${
                    star && star >= "2" ? "bg-green-400" : null
                  }`}
                  id="2"
                  onClick={(e) => starSet(e)}
                />
              </button>

              <button>
                <img
                  src={
                    "https://cdn.iconscout.com/icon/free/png-256/free-star-border-1781446-1517956.png?f=webp"
                  }
                  alt=""
                  className={`h-8 w-8 rounded-full ${
                    star && star >= "3" ? "bg-green-400" : null
                  }`}
                  id="3"
                  onClick={(e) => starSet(e)}
                />
              </button>

              <button>
                <img
                  src={
                    "https://cdn.iconscout.com/icon/free/png-256/free-star-border-1781446-1517956.png?f=webp"
                  }
                  alt=""
                  className={`h-8 w-8 rounded-full ${
                    star && star >= "4" ? "bg-green-400" : null
                  }`}
                  id="4"
                  onClick={(e) => starSet(e)}
                />
              </button>

              <button>
                <img
                  src={
                    "https://cdn.iconscout.com/icon/free/png-256/free-star-border-1781446-1517956.png?f=webp"
                  }
                  alt=""
                  className={`h-8 w-8 rounded-full ${
                    star && star >= "5" ? "bg-green-400" : null
                  }`}
                  id="5"
                  onClick={(e) => starSet(e)}
                />
              </button>
            </div>

            <button
              className="bg-green-500 mt-4 mb-2 h-10 w-32 rounded-xl font-bold"
              onClick={(e) => saveReview(e)}
            >
              Add Review
            </button>
          </div>
        ) : null}

        {items &&
          items.length > 0 &&
          show &&
          items.map((data) => (
            <div
              className="w-[373px] h-auto flex flex-col  rounded-xl bg-yellow-100 mt-2"
              key={data._id}
            >
              <div className="h-20 w-[370px] flex justify-around items-center">
                <img
                  src={data.product.url}
                  alt=""
                  className="h-16 w-16 rounded-xl"
                />
                <h1 className="w-40 font-bold">{data.product.productname}</h1>
                <button
                  className="text-sm font-bold h-12 w-24 rounded-xl bg-stone-200 "
                  id={data.product._id}
                  onClick={(e) => setData(e)}
                >
                  Add Review
                </button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
export default Reviews;
