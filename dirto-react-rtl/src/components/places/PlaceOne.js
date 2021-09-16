import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {IoMdStar, IoMdStarHalf, IoIosCheckmarkCircle, IoMdMusicalNotes, IoIosLink} from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import { RiHotelBedLine } from 'react-icons/ri'
import { GiChickenOven } from 'react-icons/gi'
import { FiPhone, FiHeart } from 'react-icons/fi'
import { FaRegCalendarCheck } from 'react-icons/fa'

class PlaceOne extends Component {
    states = {
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
    responsive = {
        // breakpoint from 0 up
        0: {
            items: 1
        },
        // breakpoint from 480 up
        480: {
            items: 2
        },
        // breakpoint from 768 up
        768: {
            items: 3
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">

                    <OwlCarousel
                        className="owl-carousel card-carousel mt-5"
                        loop
                        center={true}
                        margin={10}
                        autoplay={false}
                        nav={false}
                        dots={true}
                        direction={'rtl'}
                        items={3}
                        smartSpeed={1000}
                        responsive={this.responsive}
                    >
                        {this.states.items.map((item, index) => {
                            return (
                                <div className="card-item" key={index}>
                                    <a href={item.titleUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.image} className="card__img" alt="Place" />
                                            <span className={item.titleIcon ? 'badge': 'badge badge-closed' }>{item.bedge}</span>
                                            <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <FiHeart />
                                            </span>
                                        </div>
                                    </a>
                                    <div className="card-content-wrap">
                                        <div className="card-content">
                                            <a href={item.titleUrl}>
                                                <h5 className="card-meta">
                                                    {item.cardType} <span>{item.cardTypeIcon}</span>
                                                </h5>
                                                <h4 className="card-title text-left"><i>{item.titleIcon}</i> {item.title}</h4>
                                                <p className="card-sub text-left">
                                                    {item.stitle}
                                                </p>
                                            </a>
                                            <a href={item.authorUrl} className="author-img">
                                                <img src={item.author} alt="author-img" />
                                            </a>
                                            <ul className="info-list padding-top-20px text-left">
                                                <li>{item.number} <span className="la d-inline-block"><FiPhone /></span></li>
                                                <li><a href={item.websiteUrl}>
                                                        {item.website}
                                                    </a> <span className="la d-inline-block"><IoIosLink /></span>
                                                </li>
                                                <li>
                                                    {item.date} <span className="la d-inline-block"><FaRegCalendarCheck /></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="listing-info">
                                                <ul>
                                                    <li>
                                                        <span className="info__save" data-toggle="tooltip" data-placement="top" title="المرجعية">
                                                            <FiHeart />
                                                        </span>
                                                    </li>
                                                    <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                                </ul>
                                            </div>
                                            <div className="rating-rating">
                                                {item.ratings.map((rating, index) => {
                                                    return (
                                                        <span key={index}>{rating}</span>
                                                    )
                                                })}
                                                <span className="rating-count">{item.ratingNum}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </OwlCarousel>

                </div>
            </div>
        );
    }
}

export default PlaceOne;