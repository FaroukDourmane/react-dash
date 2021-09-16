import React, {Component} from 'react';
import { BsEye } from 'react-icons/bs'
import { MdStar, MdStarHalf } from 'react-icons/md'
import Button from "../../common/Button";
import {Link} from "react-router-dom";

class WidgetSimilarListing extends Component {
    state = {
        title: 'قوائم مماثلة',
        items: [
            {
                img: require('../../../assets/images/img34.jpg'),
                title: 'أفضل مسوق بيع العام المقبل',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: 'جيم ولياقة بدنية',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
            {
                img: require('../../../assets/images/img35.jpg'),
                title: 'كيف تجعل أفكارك حقيقة',
                titleUrl: '/blog-single',
                price: '$20.00',
                cat: 'مطعم',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
            {
                img: require('../../../assets/images/img36.jpg'),
                title: 'ما الذي يعترض طريق الإستراتيجية',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: 'تصميم فني',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
            {
                img: require('../../../assets/images/img37.jpg'),
                title: 'ما الذي يعترض طريق الإستراتيجية',
                titleUrl: '/blog-single',
                price: '$19.00',
                cat: 'في الهواء الطلق',
                catUrl: '#',
                stars: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStarHalf />,
                ]
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget similar-widget text-left">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="similar-list padding-top-30px">

                        {this.state.items.map((item, i) => {
                            return (
                                <div className="recent-item" key={i}>
                                    <div className="recent-img">
                                        <Link to={item.titleUrl}>
                                            <img src={item.img} alt="blog" />
                                        </Link>
                                    </div>
                                    <div className="recentpost-body">
                                        <h4 className="recent__link">
                                            <Link to={item.titleUrl}>
                                                {item.title}
                                            </Link>
                                        </h4>
                                        <div className="rating-rating">

                                            {item.stars.map((icon, i) => {
                                                return <span key={i} className="la la-star">{icon}</span>
                                            })}

                                        </div>
                                        <p className="recent__meta">
                                            <span className="color-text font-weight-bold">{item.price}</span> <Link to={item.catUrl}>{item.cat}</Link>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="btn-box text-center padding-top-30px">
                        <Button text="see all listings" url="/listing-grid" className="d-block">
                            <BsEye />
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetSimilarListing;