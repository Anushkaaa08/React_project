import React, { useEffect, useState } from "react";
import style from "../../assets/styles/cart.module.css";
import { GoClockFill } from "react-icons/go";
import { FaGift } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router';

export default function Cartpage() {
    const [selected, setSelected] = useState("Delivery");
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        // Initialize quantity for each item if not already set
        const initializedCartItems = storedCartItems.map(item => ({
            ...item,
            quantity: item.quantity ? item.quantity : 1
        }));
        setCartItems(initializedCartItems);
    }, []);

    const handleToggle = (option) => {
        setSelected(option);
    };

    const updateCartItems = (updatedItems) => {
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    const handleIncrement = (index) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity += 1;
        updateCartItems(updatedItems);
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
                    <div className={style.tab_container}>
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
                    </div>
                    <div className={style.card_header}>
                        <button className={style.svg_btn}>
                            <GoClockFill className={style.svg_icon} />
                        </button>
                        <div className={style.flex_text}>
                            <h5>Delivery Address not selected</h5>
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
                <div className={style.card}>
                    {cartItems.map((item, index) => (
                        <div key={index} className={style.card_header}>
                            <div className={style.flex_text}>
                                <h5>{item.title}</h5>
                            </div>
                            <div className={style.item_controls}>
                                <button onClick={() => handleDecrement(index)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrement(index)}>+</button>
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
                        <button className={style.delivery_btn} onClick={handleLogin}>Checkout</button>
                        <div className={style.checkbox}>
                            <input type="checkbox" id="updates" name="updates" />
                            <label htmlFor="updates">Yes, I would like to receive updates and exclusive offers from Magnolia.</label>
                        </div>
                        <div className={style.note}>Orders once placed cannot be cancelled and are non-refundable.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
