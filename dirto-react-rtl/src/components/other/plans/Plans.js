import React, {Component} from 'react';
import SectionDivider from "../../common/SectionDivider";
import { RiPlaneLine } from 'react-icons/ri'
import { IoMdPaperPlane, IoIosRocket } from 'react-icons/io'
import { FiCheck } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import {Link} from "react-router-dom";

class Plans extends Component {
    states = {
        lists: [
            {
                icon: <IoMdPaperPlane />,
                title: 'الخطة الأساسية',
                price: '49',
                currency: '$',
                mo: 'كل شهر',
                features: [
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'قائمة واحدة',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'توفر 90 يوم',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'غير مميز',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'دعم محدود',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'متوسط ​​نطاق السعر',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'ساعات العمل',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'مدى التوفر',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'ظهرت في نتائج البحث',
                    }
                ],
                buttonTxt: 'استمر',
                buttonUrl: '#',
                active: false
            },
            {
                icon: <RiPlaneLine />,
                title: 'خطة متقدمة',
                price: '99',
                currency: '$',
                mo: 'كل شهر',
                features: [
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'قائمة واحدة',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'توفر 90 يوم',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'غير مميز',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'دعم محدود',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'متوسط ​​نطاق السعر',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'ساعات العمل',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'مدى التوفر',
                    },
                    {
                        icon: <MdClose />,
                        iconClr: 'text-danger',
                        title: 'ظهرت في نتائج البحث',
                    }
                ],
                buttonTxt: 'استمر',
                buttonUrl: '#',
                active: true
            },
            {
                icon: <IoIosRocket />,
                title: 'خطة المؤسسة',
                price: '149',
                currency: '$',
                mo: 'كل شهر',
                features: [
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'قائمة واحدة',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'توفر 90 يوم',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'غير مميز',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'دعم محدود',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'متوسط ​​نطاق السعر',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'ساعات العمل',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'مدى التوفر',
                    },
                    {
                        icon: <FiCheck />,
                        iconClr: 'text-success',
                        title: 'ظهرت في نتائج البحث',
                    }
                ],
                buttonTxt: 'استمر',
                buttonUrl: '#',
                active: false
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.states.lists.map((item, i) => {
                        return (
                            <div className="col-lg-4" key={i}>
                                <div className={ item.active ? 'price-item pricing-active' : 'price-item' }>
                                    <div className="price-head">
                                        <i className="fa price__icon">
                                            {item.icon}
                                        </i>
                                        <h3 className="price__title mt-3">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="price-content">
                                        <div className="price-number">
                                            <p className="price__value">
                                                <sup>{item.currency}</sup>{item.price}
                                            </p>
                                            <p className="price__subtitle">{item.mo}</p>
                                        </div>

                                        <SectionDivider />

                                        <div className="price-list-item">

                                            <ul className="list-items text-left">
                                                {item.features.map((ftitem, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <i className={'la ' + ftitem.iconClr}>{ftitem.icon}</i> {ftitem.title}
                                                        </li>
                                                    )
                                                })}
                                            </ul>

                                            <div className="btn-box text-center margin-top-35px">
                                                <Link to={item.buttonUrl} className={item.active ? ('theme-btn w-100 button-success') : 'theme-btn w-100'}>
                                                    {item.buttonTxt}
                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                    {item.active ? (
                                        <div className="recommended-wrap padding-bottom-30px">
                                            <i className="la"><FiCheck /></i>
                                            <span>موصى به</span>
                                        </div>
                                    ) : ''}

                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Plans;