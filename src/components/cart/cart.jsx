import React, { useEffect, useState } from "react";
import style from "../../assets/styles/cart.module.css";
import { GoClockFill } from "react-icons/go";
import { FaGift, FaLocationDot } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import RazorpayPayment from "../RazorpayPayment";

export default function Cartpage() {
    const [selected, setSelected] = useState("Delivery");
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        // Fetch the cart items from the JSON server based on the logged-in user ID
        
        if (user) {
            axios.get(`http://localhost:3000/carts?userId=${user.id}`)
                .then(response => {
                    const cart = response.data[0];
                    if (cart) {
                        const initializedCartItems = cart.products.map(item => ({
                            ...item,
                            
                        }));
                        setCartItems(initializedCartItems);
                    }
                })
                .catch(error => console.error('Error fetching cart items:', error));
        }
    }, []);

    const handleToggle = (option) => {
        setSelected(option);
    };

    const updateCartItems = async(updatedItems) => {
        setCartItems(updatedItems);
        const user = JSON.parse(localStorage.getItem('user'));
        let res = await  axios.get(`http://localhost:3000/carts?userId=${user.id}`)
        let id = res.data[0].id;
        

        if (user) {
            axios.patch(`http://localhost:3000/carts/${id}`, { products: updatedItems })
                .then(response => {
                    console.log('Cart updated successfully');
                })
                .catch(error => console.error('Error updating cart:', error));
        }
    };

    const handleIncrement =async (id) => {
       let res = await  axios.get(`http://localhost:3000/carts?userId=${user.id}`)
       let resProducts = res.data[0].products;
       resProducts.forEach((product)=>{
        if(product.id === id){
            product.quantity = product.quantity + 1;
        }
       })
        console.log(resProducts)
        updateCartItems(resProducts);

        // const updatedItems = [...cartItems];
        // updatedItems[index].quantity += 1;
        // updateCartItems(updatedItems);
    };

    const handleDecrement = (index) => {
        const updatedItems = [...cartItems];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity -= 1;
        } else {
            updatedItems.splice(index, 1);
        }
        updateCartItems(updatedItems);
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className={style.flexbody}>
            <div className={style.boxA}>
                <div className={style.card}>
                    <div className={style.card_header}>
                        <button className={style.svg_btn}>
                            <IoArrowBackCircleOutline className={style.svg_icon} />
                        </button>
                        <div className={style.flex_text}>
                            <h3>Magnolia</h3>
                            <p>Marathahalli, Bengaluru</p>
                        </div>
                    </div>
                    {/* <div className={style.tab_container}>
                        <div
                            className={`${style.tab} ${selected === "Delivery" ? style.active : ""}`}
                            onClick={() => handleToggle("Delivery")}
                        >
                            Delivery
                        </div>
                        <div
                            className={`${style.tab} ${selected === "Pickup" ? style.active : ""}`}
                            onClick={() => handleToggle("Pickup")}
                        >
                            Pickup
                        </div>
                    </div> */}
                    <div className={style.card_header}>
                        <button className={style.svg_btn}>
                            <GoClockFill className={style.svg_icon} />
                        </button>
                        <div className={style.flex_text}>
                            <h5>Prestige Valence Block</h5>
                        </div>
                        <div className={style.under_btn_container}>
                            <button className={style.under_btn}>Select</button>
                        </div>
                    </div>
                    <hr />
                    <div className={style.card_header}>
                        <button className={style.svg_btn}>
                            <FaLocationDot className={style.svg_icon} />
                        </button>
                        <div className={style.flex_text}>
                            <p>Delivery slot</p>
                            <h5>No slot selected</h5>
                        </div>
                        <div className={style.under_btn_container}>
                            <button className={style.under_btn}>Select</button>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.card_header}>
                        <button className={style.svg_btn}>
                            <FaGift className={style.svg_icon} />
                        </button>
                        <div className={style.flex_text}>
                            <h5>Order worth 130.00 more to get free delivery</h5>
                        </div>
                        <div className={style.under_btn_container}>
                            <button className={style.under_btn}>Select</button>
                        </div>
                    </div>
                </div>

                <div className={style.card} style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                    <div className={style.card_header}>
                        <div className={style.flex_text}>
                            <h5>Want to send this as gift</h5>
                        </div>
                        <div className={style.under_btn_container}>
                            <button className={style.under_btn}>Select</button>
                        </div>
                    </div>
                </div>

                <h3 style={{ paddingLeft: '10px' }}>Items Added</h3>
                <div className={`${style.card}`}>
                    {cartItems.map((item, index) => (
                        <div key={index} className={`${style.card_header}`}>
                            
                            <div className={`${style.flex_text} flex items-center justify-between w-full`}>
                            <div className="w-10">
                                <img src={item.imgSrc} alt="" className="cover" />
                            </div>
                                <h5>{item.title}</h5>
                            <div className={`${style.item_controls}`}>
                                <button onClick={() => handleDecrement(index)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>
                            </div>
                            ₹ {item.price * item.quantity}
                        </div>
                    ))}
                    <hr />
                    <input className={style.txt} type="text" placeholder="Mention your special instructions here..." />
                    <div className={style.under_btn_container}>
                        <button className={style.under_btn}>Send</button>
                    </div>
                </div>
            </div>

            <div className={style.boxB}>
                <div className={style.card}>
                    <div className={style.card_header}>
                        <button className={style.svg_btn}>
                            <RiCoupon2Fill className={style.svg_icon} />
                        </button>
                        <div className={style.flex_text}>
                            <h5>COMBO15</h5>
                            <p>Add item worth 80 more to use this coupon</p>
                            <div className={style.under_btn_container}>
                                <button className={style.under_btn}>View more effects</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style={{ paddingLeft: '10px' }}>Bill Details</h3>
                <div className={style.card}>
                    <div className={style.card_header}>
                        <div className={style.flex_text}>
                            <div className={style.bill_flex}>
                                <div className={style.bill_item}>
                                    <h4>Total:</h4>
                                    <h4>₹ {calculateTotal()}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RazorpayPayment totalAmount={calculateTotal()} userId={user.id}/>
                    <div className={style.checkbox}>
                        <input type="checkbox" id="updates" name="updates" />
                        <label htmlFor="updates">Yes, I would like to receive updates and exclusive offers from Magnolia.</label>
                    </div>
                    <div className={style.note}>Orders once placed cannot be cancelled and are non-refundable.</div>
                </div>
            </div>
        </div>
    );
}
