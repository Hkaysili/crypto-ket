import React from 'react'
import styles from '../HotBids/styles.module.scss'; 
import { useEffect, useState, useContext } from 'react'; 
import { MainContext } from '../../context';
import HotBidsItem from '../HotBidsItem'; 

const BASE_URL = `https://62ceb596826a88972d016070.mockapi.io`;

function HotBids() { 
  const [sortableList, setSortableList] = useState([]);   
  const {setHotBids} = useContext(MainContext);
  
  // tasarım üzerinde bu componente ait item sayısı ilk yükleme anında 8 olduğu için bunu bir değişkende tutuyorum
  const getItemsCount = 8;

  // Sort Process ..
  const sortArray = (type, data) => {
    const types = {
      price: 'price', 
    };
    const sortProperty = types[type];
    const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]); 
    setSortableList(sorted); 
    setHotBids(sorted);
  };
  //Component did mount..
  useEffect(() => { 
    fetch(`${BASE_URL}/bids`)
        .then(res => {
            if(res.ok && res.status === 200) {
                return res.json()
            }
        })
        .then(data => { 
            sortArray('price', data);
        })
        .catch(err => console.log(err))
  }, []);


  return (
    <div className={styles.hotBids + " hotBids"}>
        <div className={styles.hotBids_head}>
            <h2 className="font-poppins font-semibold">
               Hot Bids
            </h2>
        </div>
        <div className={styles.hotBids_content + " flex flex-wrap justify-between "}> 
            {
                sortableList.slice(0, getItemsCount).map((item, idx) => {
                    return <HotBidsItem item={item} index={idx+1} key={idx+1}/>
                })
            }
        </div>
  </div>
  )
}

export default HotBids
