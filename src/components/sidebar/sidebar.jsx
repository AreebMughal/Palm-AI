import { IconPlus, Logo, IconLibrary, IconDataset, IconReport, IconTeam, IconNotification, IconSetting, IconLeftLogout } from 'assets/imgs';
import CustomButton from 'components/customButton/customButton';
import LineDivider from 'components/lineDivider/lineDivider';
import MenuItem from 'components/sidebar/menuItem';
import React from 'react';
import './style.scss';

const menu = [
    { icon: IconLibrary, title: 'Library' },
    { icon: IconDataset, title: 'Search' },
    { icon: IconReport, title: 'Reports', counter: 5 },
    { icon: IconTeam, title: 'Teams' },
    { icon: IconNotification, title: 'Notifications', counter: 2 },
    { icon: IconSetting, title: 'Settings' },
];

const Sidebar = () => {


    return (
        <div className='sidebar'>
            <div className='_logo'>
                <img className='_img' src={Logo} alt='logo' />
            </div>
            <CustomButton >
                <img src={IconPlus} alt='plus icon' />
                {/* <span className='default_button_text'> */}
                New Research
                {/* </span> */}
            </CustomButton>
            <div className='menu'>
                Menu
            </div>
            {
                menu.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            counter={item.counter}
                        />
                    );
                })
            }
            <LineDivider />
            <CustomButton class='sidebar_logout' >
                <img src={IconLeftLogout} alt='plus icon' />
                <span className='sidebar_logout_text'>
                    Logout
                </span>
            </CustomButton>
        </div>

    );
}

export default Sidebar;
