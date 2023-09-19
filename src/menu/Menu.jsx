import { menuItems } from "./menuItems"
import ImageCard from "../imageCard/ImageCard"
import style from "../menu/Menu.module.css"
import { MdOutlineDashboard } from "react-icons/md"
import { FaPuzzlePiece } from "react-icons/fa"
import { AiOutlineWechat } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import { FaCarrot } from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri"

function Menu() {

    const icons = [<MdOutlineDashboard />, <FaCarrot />, <FaPuzzlePiece />, <AiOutlineWechat />, <BiSupport />]

    return (
        <div className={style.mainContainer}>
            <ImageCard />
            <div className={style.menuItems}>
                {
                    menuItems.map((ele, index) => (
                        <div key={index} className={style.itemsName} style={index === 0 ? { backgroundColor: "#93d8f3" } : null}>
                            <p className={style.iconsColor}>{icons[index]}</p>
                            <p>{ele}</p>
                        </div>
                    ))
                }
            </div>
            <div className={style.logout}>
                <RiLogoutCircleLine />
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Menu;
