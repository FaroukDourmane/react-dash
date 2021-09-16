import React, {Component} from 'react';
import { GiChickenOven } from 'react-icons/gi'
import { IoMdCut } from 'react-icons/io'
import { BsGear, BsHouseDoor } from 'react-icons/bs'
import { RiHotelBedLine } from 'react-icons/ri'
import { TiBrush, TiPlane } from 'react-icons/ti'
import { FiShoppingCart, FiMusic } from 'react-icons/fi'
import { FaStethoscope, FaRegHospital, FaSearchDollar } from 'react-icons/fa'
import {Link} from "react-router-dom";

class BrowseCategories extends Component {
    state  = {
        categories: [
            {
                id: 1,
                icon: <GiChickenOven />,
                title: 'مطاعم',
                listingsNum: 42,
                cardLink: '#'
            },
            {
                id: 2,
                icon: <RiHotelBedLine />,
                title: 'الفنادق',
                listingsNum: 22,
                cardLink: '#'
            },
            {
                id: 3,
                icon: <FiShoppingCart />,
                title: 'التسوق',
                listingsNum: 7,
                cardLink: '#'
            },
            {
                id: 4,
                icon: <IoMdCut />,
                title: 'جمال وسبا',
                listingsNum: 31,
                cardLink: '#'
            },
            {
                id: 5,
                icon: <FaRegHospital />,
                title: 'مستشفى',
                listingsNum: 33,
                cardLink: '#'
            },
            {
                id: 6,
                icon: <BsGear />,
                title: 'خدمات',
                listingsNum: 33,
                cardLink: '#'
            },
            {
                id: 7,
                icon: <TiBrush />,
                title: 'الفنون والتصميم',
                listingsNum: 31,
                cardLink: '#'
            },
            {
                id: 8,
                icon: <BsHouseDoor />,
                title: 'العقارات',
                listingsNum: 36,
                cardLink: '#'
            },
            {
                id: 9,
                icon: <FaStethoscope />,
                title: 'الصحة',
                listingsNum: 22,
                cardLink: '#'
            },
            {
                id: 10,
                icon: <FaSearchDollar />,
                title: 'وظائف',
                listingsNum: 40,
                cardLink: '#'
            },
            {
                id: 11,
                icon: <TiPlane />,
                title: 'يسافر',
                listingsNum: 13,
                cardLink: '#'
            },
            {
                id: 12,
                icon: <FiMusic />,
                title: 'الأحداث',
                listingsNum: 10,
                cardLink: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.categories.map(item => {
                        return (
                            <div className="col-lg-2 column-td-6" key={item.id}>
                                <div className={'browse-category browse-category-color'+item.id}>
                                    <Link to={item.cardLink} className="category-inner d-block">
                                        <span>
                                            {item.icon}
                                        </span>
                                        <p className="cat__name">
                                            {item.title}
                                        </p>
                                        <p className="cat__meta">
                                             القوائم {item.listingsNum}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default BrowseCategories;