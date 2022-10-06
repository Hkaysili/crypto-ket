import { useEffect } from 'react';
import styles from '../TopSellerItem/styles.module.scss';

function TopSellerItem({item, index}) {
  const {name, avatar:src, price} = item; 
  return ( 
      <div className={styles.topSellerItem}>
        <div className={"border-2 border-gray-600 px-2 py-4 rounded-lg transform transition duration-500 hover:scale-110 hover:cursor-pointer topSellerItem__inner md:px-4 md:py-6 "}>
            <span className={styles.topSellerItem__inner_sub + " bg-red-violet text-sm md:text-base font-semibold rounded-full"}>
              {index}
            </span>
            <div className={styles.topSellerItem__inner_content + " bg-card min-h-[200px] flex items-center flex-col justify-center rounded-3xl"}>
                <img src={src} alt={name} className="rounded-full" />
                <p className="text-sm md:text-base font-semibold mt-1">{name}</p>
                <p className="text-sm md:text-base font-semibold pt-1"><span>{price}</span><span className="ml-1 font-normal">ETH</span></p>
            </div>
        </div>
      </div>  
  )
}

export default TopSellerItem
