import "./cart.css";
import { useState, useEffect, use } from "react";
import axios from "axios";
import { isSession, useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../components/ContextMenu/context";
import { food_list } from "../../assets/frontend_assets/assets";
export const Cart = () => {


    const [cartdata, setcartdata] = useState();
    const [avl, setavl] = useState("");
    const [total, settotal] = useState(0);
    const [gettable, settable] = useState();
    const [lstr, setlstr] = useState([]);
    const [selecctedlstr, setselecctedlstr] = useState([]);
    const [hi, sethi] = useState("hi");

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        //     // setlstr(cart);
        //     console.log("cart:", cart);


    }, [1])

    // const cartt = JSON.parse(localStorage.getItem("cart")) || [];



    function tableselectclick(e) {
        const selectedtable = e.target.value;
        setcartdata(selectedtable); // store for UI if needed

        // Get cart from localStorage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("cart:", cart);

        // Filter with selected table directly (not cartdata)
        const filteredList = cart.filter(item => item.table === parseInt(selectedtable));
        console.log("Filtered List:", filteredList);

        // Optional: store for rendering
        setselecctedlstr(filteredList);

        settotal(0);
    }



    function calculate() {
        const total = selecctedlstr.reduce((acc, item) => acc + item.price * item.count, 0);
        // settotal(selecctedlstr);
        settotal(total);


    }

    // const tableNumber = cartdata.length > 0 ? cartdata[0].table : "table not found";

    console.log(avl);


    // console.log("Items in the cart:", cartdata);
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);



    return (


        <div className="cart-body">

            <select onChange={tableselectclick}>
                <option value={0}>Select Table</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>

            <h2>Orders</h2>

            <div className="table">Table - {cartdata}</div>

            <table style={{ textAlign: "center", fontWeight: "bold" }} className="cart-table">
                <thead>
                    {

                    }
                    <tr>
                        <td>Dish</td>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Qty</td>
                        <td>Price</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        selecctedlstr.map((selecteCatItem, index) => (
                            // setselecctedlstr(selecteCatItem),

                            <tr key={index} className="cart">
                                <td><img src={selecteCatItem.image} alt="not found" width="50px" /></td>
                                <td><div className="name">{selecteCatItem.name}</div></td>
                                <td><div className="category">{selecteCatItem.category}</div></td>
                                <td><div className="count">{selecteCatItem.count}</div></td>
                                <td><div className="price">₹ {selecteCatItem.price}</div></td>
                            </tr>

                        ))
                    }


                </tbody>


            </table>

            <div className="calculatedata">
                <button onClick={calculate} className="calculate-btn">Calculate Total</button>
                <div className="total">Total: ₹ {total}</div>
            </div>




        </div>
    )
}



