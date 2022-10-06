import styles from '../TopSeller/styles.module.scss';
import Slider from "react-slick";
import { useEffect, useState, useContext } from 'react';
import TopSellerItem from '../TopSellerItem'; 
import { MainContext } from '../../context'; 

const BASE_URL = `https://62ceb596826a88972d016070.mockapi.io`;

function TopSeller() {   
  const [sortableList, setSortableList] = useState([]);   
  const {setTopSeller} = useContext(MainContext);

  // Sort Process ..
  const sortArray = (type, data) => {
    const types = {
      price: 'price', 
    };
    const sortProperty = types[type];
    const sorted = data.sort((a, b) => b[sortProperty] - a[sortProperty]); 
    setSortableList(sorted); 
    setTopSeller(sorted);
  };
  
  //Component did mount..
  useEffect(() => { 
    fetch(`${BASE_URL}/sellers`) 
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

  const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 0,  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 1.9,
                    arrows: false
                }
            }
        ]
  };

  return (
    <div className={styles.topSeller + " topSeller"}>
      <div className={styles.topSeller_head}>
            <h2 className="font-poppins font-semibold">
                Top Seller
            </h2>
      </div>
      <div className={styles.topSeller_content}> 
            <div> 
                {
                    sortableList && (
                        <Slider {...settings}>
                            {
                                sortableList.map((item, idx) => (
                                    <TopSellerItem item={item} index={idx+1} key={idx+1}/>
                                ))
                            }
                        </Slider>
                    )
                } 
            </div>
      </div>
    </div>
  )
}

export default TopSeller
