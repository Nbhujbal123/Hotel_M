import "./menu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { Filtermenu } from "../Filtermenu/filtermenu";
import { useRef } from "react";

export function ExploreMenu() {
    const scrollRef = useRef(null);

    function prevclick() {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    }

    function nextclick() {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    }

    return (
        <div className="explore-menu">
            <div className="explore-menu-list" ref={scrollRef} style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                <img
                    onClick={prevclick}
                    style={{ position: "absolute", left: "10px", top: "120px", filter:"invert(1)", backgroundColor:"gray", borderRadius:"10px", zIndex: 1 }}
                    src="/ast/prev.svg"
                    alt=""
                    width="40px"
                />
                {menu_list.map((item, index) => (
                    <div key={index} className="explore-menu-list-items" style={{ display: "inline-block" }}>
                        <Link to={`/products/${item.menu_name}`}>
                            <img src={item.menu_image} />
                            <div className="menu-names">{item.menu_name}</div>
                        </Link>
                    </div>
                ))}
                <img
                    onClick={nextclick}
                    style={{ position: "absolute", right: "10px", top: "120px", filter:"invert(1)", backgroundColor:"gray", borderRadius:"10px", zIndex: 1 }}
                    src="/ast/next.svg"
                    alt=""
                    width="40px"
                />
            </div>
            <hr />
            <Filtermenu />
        </div>
    );
}
