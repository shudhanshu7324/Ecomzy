import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0));
  },[cart]);

  return(
    <div>
      {
        cart.length > 0 ? (<div>
          <div>
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
          <div>
            <div>
              Your Cart
            </div>
            <div>
              Summary
            </div>
            <p>
              <span>
                Total Items: {cart.length}
              </span>
            </p>
          </div>

          <div>
            <p>Total Amound: ${totalAmount}</p>
            <button>Checkout</button>
          </div>


        </div>) : (
          <div className="flex flex-col items-center justify-center gap-3 h-[80vh]">
          <h1 className="font-bold">Cart is Empty </h1>
          <Link to={"/"} >
          <button className="text-green-700 border-2 border-green-700 rounded-full font-bold text-[15px] p-1 px-3 uppercase hover:bg-green-700 hover:text-white transition duration-300 ease-in">Shop Now</button>
          </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
