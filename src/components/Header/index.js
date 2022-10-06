import { NavLink } from 'react-router-dom'
import Buttons from '../Buttons'
import {FiSearch as Search} from 'react-icons/fi'  
import styles from '../Header/styles.module.scss';
import {isMobile} from 'react-device-detect';
import { useEffect, useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';

function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    useEffect(() => {
        if (isMobile) {
            return console.log('this mobile')
          }
    }, []);
  return (
    <nav className={"bg-dark border border-solid border-b-black border-t-0 border-r-0 border-l-0 " + styles.header}>
        <div className="h-11 flex items-center text-light  min-h-[100px] pl-10 pr-10">
            <NavLink className={styles.header_logo + " w-1/12 relative lg:top-[2px]"}
                to={"/"}>
                <div className={styles.header_logo__icon}>
                    <span className={styles.header_logo__icon_inner}></span>
                </div>
                <div className={styles.header_logo__text + " font-gotham lg:pl-5 xl:pl-12 2xl:pl-0"}>
                    CryptoKet
                </div>
            </NavLink>
            <div className="lg:w-4/12 xl:w-5/12 2xl:w-6/12 pr-3 relative lg:left-[50px] lg:top-[2px] input_frame">
                <Search className={styles.header_search + " lg:top-[1px]"}/>
                <input type="text" className={styles.header_input + " w-full text-xs lg:top-[1px]"} placeholder={"Search.."}/>
            </div>
            <div className="lg:w-7/12 xl:w-6/12 2xl:w-5/12 text-right ">
               <div className="inline-block relative mobileMenuList">
                    <ul className="flex-row relative top-[10px] mt-[0px] pr-8">
                        <li className="w-auto inline-block float-left mr-[12px] text-sm md:text-base font-semibold text-gray active">
                            <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                                    to="/">
                                Explore
                            </NavLink>
                        </li>
                        <li className="w-auto inline-block float-left mr-[12px] text-sm md:text-base font-semibold text-gray ">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                                    to="/item">
                                My Items
                            </NavLink>
                        </li>
                        <li className="w-auto inline-block float-left mr-[12px] text-sm md:text-base font-semibold text-gray ">
                            <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                                    to="/following">
                                Following
                            </NavLink>
                        </li>
                        <Buttons custom="true">
                            Create
                        </Buttons>
                        <Buttons custom="false">
                            Connect
                        </Buttons> 
                    </ul>
               </div> 
            </div>  
        </div> 
        <div className="hamburger block md:hidden" onClick={toggleHamburger}>
            <HamburgerMenu isOpen={hamburgerOpen}/>
        </div>
        <style jsx>{` 
            .mobileMenuList ul{
                display:flex;
                flex-wrap: wrap;
                float: right;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
            }
            .mobileMenuList ul li{
                list-style-type: none;
                padding-right: 10px;
            }
            .hamburger{ 
                z-index: 6;
            } 
            @media (min-width: 768px){
                .mobileMenuList button{
                    margin-top: -5px ;
                }
                .mobileMenuList ul {
                    position: relative;
                    height: 80px;
                    justify-content: center;
                    align-items: center;
                }
            }
            @media (max-width: 767px){
                .mobileMenuList{
                    width: 100%;
                    height: 50px;
                }
                .hamburger{
                    position: absolute;
                    padding-top: 10px;
                    margin-left: 0;
                    z-index: 6;
                    top: 15px;
                    right: 10px;    
                }
            
            
                .mobileMenuList ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'}; 
                    background-color: #24252d;
                    height: 100vh;
                    width: 100vw;
                    position: fixed;
                    z-index: 100000;
                    left: 0;
                    margin-top: 100px;
                    padding: 10px 20px;      
                }
                .mobileMenuList ul li  {
                    width: 100%;
                    display: block;
                    float: left;
                    margin-bottom:15px;
                    text-align: left;
                }
                .mobileMenuList ul li a { 
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px; 
                } 
            } 
        `}</style>
    </nav>
  )
} 

export default Header
