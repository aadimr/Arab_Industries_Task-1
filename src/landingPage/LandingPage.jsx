import style from "../landingPage/LandingPage.module.css"
import Menu from "../menu/Menu"
import SubscriptionPlans from '../subscriptionPlans/SubscriptionPlans';

function LandingPage() {
    return (
        <div className={style.mainContainer}>
            <div className={style.menu}><Menu/></div>
            <div className={style.SubscriptionPlans}><SubscriptionPlans/></div>
        </div>
    )
}

export default LandingPage;
