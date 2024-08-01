import React, { useState } from "react";

import styles from "./header.module.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import logoImg from"../../assets/zeepzee.png"
import { RESET_AUTH, logout } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
import { UserName } from "../../pages/profile/Profile";

export const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>
                Souvik<span>Biswas</span>
            </h2>
        </Link>
    </div>
   
)
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "")
const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const[ scrollPage,setScrollPage] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fixNavbar= ()=>{
        if (window.screenY > 50) {
            setScrollPage(true);
        }else{
            setScrollPage(false);
        }
    };

    window.addEventListener("scroll",fixNavbar);

    

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const hideMenu = () => {
        setShowMenu(false);
    };

    const logoutUser = async () =>{
        await dispatch(logout())
        await dispatch(RESET_AUTH());
        navigate("/");
    }

    
    return (
        <header className={scrollPage ? `${styles.fixed}` : null}>
            <div className={styles.header}>
                {logo}
                <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>

                    <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`}
                        onClick={hideMenu}>
                    </div>
                    <ul>
                        <li className={styles["logo-mobile"]}>
                            {logo}
                            <FaTimes size={22} color="#fff" onClick={hideMenu} />
                        </li>
                        

                    </ul>
                   
                </nav>
                
            </div>
        </header>
    )
}
export default Header
