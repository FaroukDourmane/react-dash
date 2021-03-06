import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {GiChickenOven, GiWineGlass} from 'react-icons/gi'
import {TiPlane, TiBrush} from 'react-icons/ti'
import {RiHotelBedLine} from 'react-icons/ri'
import {IoMdMusicalNotes, IoIosFitness} from 'react-icons/io'
import {FiShoppingCart} from 'react-icons/fi'

class PopularCategories extends Component {
    states = {
        items: [
            {
                icon: <GiChickenOven />,
                title: 'مطاعم',
                stitle: 'القوائم 12',
                url: '#',
                img: require('../../../assets/images/img1.jpg')
            },
            {
                icon: <TiPlane />,
                title: 'يسافر',
                stitle: 'القوائم 34',
                url: '#',
                img: require('../../../assets/images/img2.jpg')
            },
            {
                icon: <RiHotelBedLine />,
                title: 'الفنادق',
                stitle: 'القوائم 44',
                url: '#',
                img: require('../../../assets/images/img3.jpg')
            },
            {
                icon: <IoMdMusicalNotes />,
                title: 'الأحداث',
                stitle: 'القوائم 65',
                url: '#',
                img: require('../../../assets/images/img4.jpg')
            },
            {
                icon: <FiShoppingCart />,
                title: 'محلات',
                stitle: 'القوائم 10',
                url: '#',
                img: require('../../../assets/images/img5.jpg')
            },
            {
                icon: <IoIosFitness />,
                title: 'اللياقه البدنيه',
                stitle: 'القوائم 9',
                url: '#',
                img: require('../../../assets/images/img6.jpg')
            },
            {
                icon: <GiWineGlass />,
                title: 'طعام شراب',
                stitle: 'القوائم 13',
                url: '#',
                img: require('../../../assets/images/img7.jpg')
            },
            {
                icon: <TiBrush />,
                title: 'تصميم فني',
                stitle: 'القوائم 15',
                url: '#',
                img: require('../../../assets/images/img8.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig m-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.url} className="cat-fig-box">
                                            <div className="icon-element mb-3">
                                                {item.icon}
                                            </div>
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-3">{item.title}</h4>
                                                <span className="badge">{item.stitle}</span>
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

export default PopularCategories;