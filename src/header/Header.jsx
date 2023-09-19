import style from "../header/Header.module.css"
import { useState, useEffect } from "react";
import DrawerNavbar from "../drawerMenu/DrawerMenu";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className={style.mainContainer}>
           {windowWidth <= 991 ? 
           <DrawerNavbar/>:
           <img src="https://media.licdn.com/dms/image/D560BAQGYXLGAepihVg/company-logo_200_200/0/1684513689890?e=2147483647&v=beta&t=z8gHTazvPqQNPihYAnIgIKa0f7dbN_foDHmOagNQpJM" alt="error" className={style.logo} />
         }
        </div>
    )
}
