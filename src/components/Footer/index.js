import styles from '../Footer/styles.module.scss'; 
import {FaInstagram as Instagram, FaTwitter as Twitter, FaTelegramPlane as Telegram} from 'react-icons/fa';
import {BsDiscord as Discord} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Buttons from '../Buttons';

function Footer() {
  return (
    <div className="container mx-auto pt-5">
        <div className="footer_content">
            <div className={"bg-dark border border-solid border-b-black border-t-0 border-r-0 border-l-0 " + styles.footer}>
                <div className={styles.footer__top + " w-full"}>
                    <div className={styles.footer__top_left + " w-full md:w-1/3 float-left"}>
                        <div className="h-11 flex items-start flex-row text-light  min-h-[70px] pl-10 pr-10">
                            <NavLink className={styles.footer_logo + " relative lg:top-[2px]"}
                                to={"/"}>
                                <div className={styles.footer_logo__icon}>
                                    <span className={styles.footer_logo__icon_inner}></span>
                                </div>
                                <div className={styles.footer_logo__text + " font-gotham lg:pl-5 xl:pl-12 2xl:pl-0"}>
                                    CryptoKet
                                </div>
                            </NavLink> 
                        </div> 
                        <div className={styles.footer__top_left_input}>
                            <p className="text-sm md:text-base font-semibold mb-2 pl-1">Get the lastes Updates</p>
                            <input type="text" placeholder={"Your Email"}/>
                            <Buttons custom="true" className="font-semi bold mr-20">
                                Email Me!
                            </Buttons> 
                        </div>
                    </div>
                    <div className={styles.footer__top_right + " w-full md:w-2/3 float-left"}>
                        <div className="w-1/2 float-left ">
                            <h2 className={styles.footer__top_right_title + " font-semibold text-left text-xl md:pl-32 mb-[24px]"}>
                                CryptoKet
                            </h2>
                            <ul className={styles.footer__top_right_list + " flex flex-col items-start justify-center pt-2 md:pl-32"}>
                                <li className="text-sm md:text-base font-normal mb-[12px]">
                                    <a href="#" className="hover:text-red-violet ease-in duration-300 hover:cursor-pointer">
                                        Explore
                                    </a>
                                </li>
                                <li className="text-sm md:text-base font-normal mb-[12px]">
                                    <a href="#" className="hover:text-red-violet ease-in duration-300 hover:cursor-pointer"> 
                                        How it Works
                                    </a>
                                </li>
                                <li className="text-sm md:text-base font-normal mb-[12px]">
                                    <a href="#" className="hover:text-red-violet ease-in duration-300 hover:cursor-pointer">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 float-left">
                            <h2 className={styles.footer__top_right_title  + " font-semibold text-xl text-left md:pl-32 mb-[24px]"}>
                                Support
                            </h2>
                            <ul className={styles.footer__top_right_list + " flex flex-col items-start justify-center pt-2 md:pl-32"}>
                                <li className="text-sm md:text-base font-normal mb-[12px]">
                                    <a href="" className="hover:text-red-violet ease-in duration-300 hover:cursor-pointer">
                                        Help center
                                    </a>
                                </li>  
                                <li className="text-sm md:text-base font-normal mb-[12px]"> 
                                    <a href="#" className="hover:text-red-violet ease-in duration-300 hover:cursor-pointer">
                                        Terms of service
                                    </a>
                                </li>
                                <li className="text-sm md:text-base font-normal mb-[12px]"> 
                                    <a href="" className="hover:text-red-violet ease-in duration-300 hover:cursor-pointer">
                                        Legal
                                    </a> 
                                </li>
                                <li className="text-sm md:text-base font-normal mb-[12px]">  
                                    <a href="" className="hover:text-red-violet ease-in duration-300  hover:cursor-pointer">
                                        Privacy policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__bottom + " w-full mt-8 pb-8"}>
                    <h3 className={styles.footer__bottom_text + " w-full text-sm md:text-base font-semibold w-full md:w-1/3 float-left"}>
                        CrpytoKet, Inc. All Rights Reserved       
                    </h3>
                    <ul className={styles.footer__bottom_list+ " w-full md:w-2/3 float-left flex justify-end pr-0 gap-[15px]"}> 
                        <NavLink to={"/instagram"}>
                            <Instagram size={24}/>
                        </NavLink> 
                        <NavLink to={"/twitter"}>
                            <Twitter size={24} />
                        </NavLink> 
                        <NavLink to={"/telegram"}>
                            <Telegram size={24}/>
                        </NavLink> 
                        <NavLink to={"/discord"}>
                            <Discord size={24}/>
                        </NavLink> 
                    </ul>
                </div>  
            </div>
        </div>
    </div>
  )
}
export default Footer
