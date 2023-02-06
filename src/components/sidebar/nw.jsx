import React, { useEffect } from 'react';
import { IconPlus, Logo, IconLibrary, IconDataset, IconReport, IconTeam, IconNotification, IconSetting, IconLeftLogout } from 'assets/imgs';
import MenuItem from './menuItem';
import CustomButton from 'components/customButton/customButton';
import LineDivider from 'components/lineDivider/lineDivider';
import Sidebar from 'components/sidebar/sidebar';

const Nw = () => {
    const menu = [
        { icon: IconLibrary, title: 'Library' },
        { icon: IconDataset, title: 'Search' },
        { icon: IconReport, title: 'Reports', counter: 5 },
        { icon: IconTeam, title: 'Teams' },
        { icon: IconNotification, title: 'Notifications', counter: 2 },
        { icon: IconSetting, title: 'Settings' },
    ];
    useEffect(() => {
        dropdown();
    }, []);

    function dropdown() {
        // document.querySelector("#submenu").classList.toggle("hidden");
        // document.querySelector("#arrow").classList.toggle("rotate-0");
    }


    function openm_sidebar() {
        document.querySelector(".toggle-sidebar").classList.toggle("max-lg:hidden");
    }
    return (
        <>
            {/* <div class="bg-blue-600"> */}
            <span
                class="absolute text-white text-4xl top-5 left-4 cursor-pointer lg:hidden"
                onClick={openm_sidebar}
            >
                <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div className='toggle-sidebar top-0 bottom-0 max-lg:hidden'>
                <div className='sidebar '>
                    <div className='_logo'>
                        <img className='_img' src={Logo} alt='logo' />
                    </div>
                    <CustomButton >
                        <img src={IconPlus} alt='plus icon' />
                        <span className='default_button_text'>
                            New Research
                        </span>
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
            </div>
            {/* </div> */}
        </>
    );
}

export default Nw;
