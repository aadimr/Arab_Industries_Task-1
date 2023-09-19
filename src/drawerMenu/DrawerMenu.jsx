import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menuItems } from '../menu/menuItems';
import { MdOutlineDashboard } from "react-icons/md"
import { FaPuzzlePiece } from "react-icons/fa"
import { AiOutlineWechat } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import { FaCarrot } from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri"
import ImageCard from '../imageCard/ImageCard';
import style from "../drawerMenu/DrawerMenu.module.css"

function DrawerNavbar() {

    const menuItemsIcon = [<MdOutlineDashboard />, <FaCarrot />, <FaPuzzlePiece />, <AiOutlineWechat />, <BiSupport />]

    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ImageCard />
            <List className={style.menuItems}>
                {menuItems.map((ele, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton className='w-screen'>
                            <ListItemIcon className={style.icons}>
                                <span>{menuItemsIcon[index]}</span>
                            </ListItemIcon>
                            <ListItemText>
                                {ele}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className={style.logout}>
                <RiLogoutCircleLine />
                <p>Logout</p>
            </div>
        </Box>
    )

    return (
        <div >
            {['left'].map((anchor) => (
                <div key={anchor}>
                    <div className='text-[#E8772E] h-14 cursor-pointer flex gap-[1rem]' onClick={toggleDrawer(anchor, true)}>
                        <img src="https://media.licdn.com/dms/image/D560BAQGYXLGAepihVg/company-logo_200_200/0/1684513689890?e=2147483647&v=beta&t=z8gHTazvPqQNPihYAnIgIKa0f7dbN_foDHmOagNQpJM" alt="error" className={style.logo} />
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{ width: "1000px" }}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
        </div>
    );
}

export default DrawerNavbar;