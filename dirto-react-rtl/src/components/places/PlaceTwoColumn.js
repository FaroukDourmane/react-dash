import React, {Component} from 'react';
import {IoIosCheckmarkCircle, IoIosLink, IoMdMusicalNotes, IoMdStar, IoMdStarHalf} from "react-icons/io";
import {GiChickenOven} from "react-icons/gi";
import {RiHotelBedLine} from "react-icons/ri";
import {FiHeart, FiPhone} from "react-icons/fi";
import {FaRegCalendarCheck} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";

class PlaceTwoColumn extends Component {
    state = {
        items: [
            {
                bedge: 'فتح جديد',
                title: 'فندق جوفيندور',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'الفندق',
                cardTypeIcon: <RiHotelBedLine />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                websiteUrl: 'https://example.com',
                date: 'نشرت منذ شهر واحد',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'فتح جديد',
                title: 'المكان المفضل بنك الطعام',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img28.jpg'),
                cardType: 'مطعم',
                cardTypeIcon: <GiChickenOven />,
                author: require('../../assets/images/small-team1.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            },
            {
                bedge: 'مغلق',
                title: 'الشاطئ الأزرق الممر',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img29.jpg'),
                cardType: 'السفر',
                cardTypeIcon: <GiChickenOven />,
                author: require('../../assets/images/small-team2.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'فتح جديد',
                title: 'فندق جوفيندور',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'الفندق',
                cardTypeIcon: <RiHotelBedLine />,
                author: require('../../assets/images/small-team3.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'فتح جديد',
                title: 'حزب الفرقة اللزجة',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'حدث',
                cardTypeIcon: <IoMdMusicalNotes />,
                author: require('../../assets/images/small-team4.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.4'
            },
            {
                bedge: 'مغلق',
                title: 'مول سينا ​​للملابس',
                titleIcon: '',
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img32.jpg'),
                cardType: 'متجر',
                cardTypeIcon: <GiChickenOven />,
                author: require('../../assets/images/small-team5.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '248',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.6'
            },
            {
                bedge: 'فتح جديد',
                title: 'فندق جوفيندور',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img30.jpg'),
                cardType: 'الفندق',
                cardTypeIcon: <RiHotelBedLine />,
                author: require('../../assets/images/small-team6.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.7'
            },
            {
                bedge: 'فتح جديد',
                title: 'المكان المفضل بنك الطعام',
                titleIcon: <IoIosCheckmarkCircle />,
                titleUrl: '/listing-details',
                stitle: 'شارع بيشوب ، نيويورك',
                image: require('../../assets/images/img28.jpg'),
                cardType: 'مطعم',
                cardTypeIcon: <GiChickenOven />,
                author: require('../../assets/images/small-team1.jpg'),
                authorUrl: '#',
                number: '(492) 492-4828',
                website: 'www.mysitelink.com',
                date: 'نشرت منذ شهر واحد',
                view: '204',
                ratings: [
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStar />,
                    <IoMdStarHalf />,
                    <IoMdStar className="last-star" />,
                ],
                ratingNum: '4.5'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, index) => {
                    return (
                        <div className="col-lg-6 column-td-6" key={index}>
                            <div className="card-item">
                                <Link to={item.titleUrl} className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={item.image} className="card__img" alt="Place" />
                                        <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                        <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            <FiHeart />
                                        </span>
                                    </div>
                                </Link>
                                <div className="card-content-wrap">
                                    <div className="card-content text-left">
                                        <Link to={item.titleUrl}>
                                            <h5 className="card-meta">
                                                <span>{item.cardTypeIcon}</span> {item.cardType}
                                            </h5>
                                            <h4 className="card-title">{item.title}
                                                <i>{item.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                {item.stitle}
                                            </p>
                                        </Link>
                                        <a href={item.authorUrl} className="author-img">
                                            <img src={item.author} alt="author-img" />
                                        </a>
                                        <ul className="info-list padding-top-20px">
                                            <li><span className="la d-inline-block"><FiPhone /></span> {item.number}</li>
                                            <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.websiteUrl}>
                                                {item.website}
                                            </a>
                                            </li>
                                            <li>
                                                <span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.date}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rating-row">
                                        <div className="rating-rating">
                                            {item.ratings.map((rating, index) => {
                                                return (
                                                    <span key={index}>{rating}</span>
                                                )
                                            })}
                                            <span className="rating-count">{item.ratingNum}</span>
                                        </div>
                                        <div className="listing-info">
                                            <ul>
                                                <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                                <li>
                                                    <span className="info__save" data-toggle="tooltip" data-placement="top" title="المرجعية">
                                                        <FiHeart />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PlaceTwoColumn;