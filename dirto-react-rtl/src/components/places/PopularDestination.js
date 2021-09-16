import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PopularDestination extends Component {
    state = {
        destinations: [
            {
                img: require('../../assets/images/img23.jpg'),
                cityFlag: require('../../assets/images/flag21.png'),
                cityName: 'كندا',
                listingTxt: 'القوائم 23',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img24.jpg'),
                cityFlag: require('../../assets/images/flag1.jpg'),
                cityName: 'الولايات المتحدة الأمريكية',
                listingTxt: 'القوائم 21',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img25.jpg'),
                cityFlag: require('../../assets/images/flag2.jpg'),
                cityName: 'المملكة المتحدة',
                listingTxt: 'القوائم 33',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img26.jpg'),
                cityFlag: require('../../assets/images/flag22.png'),
                cityName: 'المكسيك',
                listingTxt: 'القوائم 14',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img27.jpg'),
                cityFlag: require('../../assets/images/flag18.jpg'),
                cityName: 'كوستا ريكا',
                listingTxt: 'االقوائم 25',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img28.jpg'),
                cityFlag: require('../../assets/images/flag3.jpg'),
                cityName: 'أستراليا',
                listingTxt: 'القوائم 11',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img29.jpg'),
                cityFlag: require('../../assets/images/flag7.jpg'),
                cityName: 'نيوزيلندا ',
                listingTxt: 'القوائم 14',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                cityFlag: require('../../assets/images/flag5.png'),
                cityName: 'فرنسا',
                listingTxt: 'القوائم 65',
                boxCol: '6',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img31.jpg'),
                cityFlag: require('../../assets/images/flag19.svg'),
                cityName: 'إيطاليا',
                listingTxt: 'القوائم 98',
                boxCol: '6',
                cardUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.destinations.map((item, index) =>{
                    return (
                        <div className={'column-td-6 col-lg-'+item.boxCol} key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig mb-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.cardUrl}
                                           className="cat-fig-box d-flex justify-content-between align-items-center">
                                            <div className="cat-content text-left">
                                                <h4 className="cat__title mb-2">
                                                    {item.cityName}
                                                </h4>
                                                <span className="badge">
                                                    {item.listingTxt}
                                                </span>
                                            </div>
                                            <div className="loc-img">
                                                <img src={item.cityFlag} alt={item.cityName} />
                                            </div>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PopularDestination;