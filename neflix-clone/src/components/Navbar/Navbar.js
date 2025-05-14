import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.leftcon}>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular </li>
          <li>My List</li>
          <li>Browser by Languages</li>
        </ul>
      </div>
      <div className={styles.rightcon}>
        <img src={searchIcon} alt=" search Icon" className={styles.icons} />
        <img src={bellIcon} className={styles.icons} />
        <AccountBoxIcon className={styles.profile} />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Navbar;
