import { useEffect } from 'react'; 
import styles from '../HotBidsItem/styles.module.scss';
import {FcLike as Like} from 'react-icons/fc';

function HotBidsItem({item, index}) {
  const {name, image:src, price, fav} = item;

  useEffect(() => { 
    //console.log(name, src, price, fav)
   }, []);

  return (
    <div className={styles.hotBidsItem + " w-2/4 float-left relative h-auto flex-col hover:cursor-pointer mb-5 bg-card md:w-1/4"}> 
         <div className={styles.hotBidsItem__top+ " pl-3 pr-3 pb-2 pt-1"}>
            <img src={src} alt={name} className="rounded-xl mb-2" />
            <p className="text-sm md:text-base font-semibold mt-1">{name}</p>
         </div>
         <div className={styles.hotBidsItem__bottom + " pl-3 pr-3 pb-2 pt-1"}>
            <div className={styles.hotBidsItem__bottom_left + " w-1/2 md:w-1/2 float-left text-left"}>
               <p className="text-sm md:text-base font-semibold pt-1"><span>{price}</span><span className="ml-1 font-normal">ETH</span></p> 
            </div>
            <div className={styles.hotBidsItem__bottom_right + " w-1/2 md:w-1/2 float-left"}>
               <p className="text-sm md:text-base font-semibold pt-1">
               <Like/>
               <span>{fav}</span>
               </p> 
            </div>
         </div> 
    </div>
  )
}

export default HotBidsItem
