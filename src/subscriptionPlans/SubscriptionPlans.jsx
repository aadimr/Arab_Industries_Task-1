import Button from "../components/Button";
import style from "../subscriptionPlans/SubscriptionPlans.module.css"
import { PiUserBold } from 'react-icons/pi';
import { TiCloudStorageOutline } from 'react-icons/ti';
import { GrSupport } from "react-icons/gr";
import { plans } from "./plans";
import { freeAndEnterpriseBenefit } from "./freeAndEnterpriseBenefit";

function SubscriptionPlans() {

    const buttonColors = ["#FFFFE0", "#FFB6C1", "#D1C4E9"];
    const icons = [<PiUserBold />, <TiCloudStorageOutline />, <GrSupport />]

    return (
        <div className={style.mainContainer}>
            <h2>Choose a plan that's just right for you !</h2>
            <div className={style.PlanDuration}>
                <div className={style.buttonContainer}>
                <Button name={"Monthly"} className={style.buttonContainerBtn} style={{backgroundColor:"#1aa5db"}}/>
                <Button name={"Annually"} className={style.buttonContainerBtn}/>
                </div>
            </div>
            <div className={style.cardContainer}>
                {
                    plans.map((ele, index) => (
                        <div key={index} className={style.card}>
                            <h2>{ele.type}</h2>
                            <p className={style.beforeDiscountPrice}>{ele.beforeDiscountPrice}</p>
                            <p>{ele.afterDiscountPrice}</p>
                            <Button className={style.btn} name={"Get Started"} style={{ backgroundColor: buttonColors[index] }} />
                            <hr />
                            <p>{ele.Description}</p>
                            <div className={style.benefit}>{ele.benefit.map((ele, index) => (
                                <div key={index} className={style.iconsWithBenefits}>
                                    <p>{icons[index]}</p>
                                    <p>{ele}</p>
                                </div>
                            ))}</div>
                            <h3 className={style.explore}>EXPLORE FEATURES</h3>
                        </div>
                    ))
                }
            </div>
            <div className={style.cardContainer2}>
                {
                    freeAndEnterpriseBenefit.map((ele, index) => (
                        <div key={index} className={style.card2}>
                            <div className={style.card2LeftPart}>
                                <h2>{ele.type}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Button className={style.btn} name={"Get Started"} style={{ backgroundColor: buttonColors[index] }} />
                            </div>
                            <div>
                                <p>{ele.Description}</p>
                                <div className={style.benefit}>{ele.benefit.map((ele, index) => (
                                    <div key={index} className={style.iconsWithBenefits}>
                                        <p>{icons[index]}</p>
                                        <p>{ele}</p>
                                    </div>
                                ))}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SubscriptionPlans;
