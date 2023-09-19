import style from "../landingPage/LandingPage.module.css"
import Menu from "../menu/Menu"
import SubscriptionPlans from '../subscriptionPlans/SubscriptionPlans';
import { useState, useEffect } from "react";

function LandingPage() {

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
            <div className={style.menu} style={windowWidth <= 991 ? {display:"none"}:{display:"inline"}}><Menu /></div>
            <div className={style.SubscriptionPlans}><SubscriptionPlans /></div>
        </div>
    )
}

export default LandingPage;
