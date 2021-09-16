import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LatestBlog extends Component {
    cardState = {
        cards: [
            {
                img: require('../../assets/images/img31.jpg'),
                title: 'خمسون أروع أماكن الفعاليات في المملكة المتحدة',
                date: '25 ديسمبر 2020',
                description: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك. ',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                likeNum: '244',
                cardUrl: '/blog-single'
            },
            {
                img: require('../../assets/images/img32.jpg'),
                title: 'أفضل عشرة متاجر ملابس في سيدني',
                date: '26 ديسمبر 2020',
                description: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك. ',
                author: 'مارك وينز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                likeNum: '535',
                cardUrl: '/blog-single'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                title: 'أفضل خمسة عشر فنادق في الولايات المتحدة',
                date: '27 ديسمبر 2020',
                description: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك. ',
                author: 'تنبير احمد',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                likeNum: '294',
                cardUrl: '/blog-single'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.cardState.cards.map((item, index) => {
                        return (
                            <div className="col-lg-4 column-td-6" key={index}>
                                <div className="card-item blog-card">
                                    <Link to={item.cardUrl} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.img} alt="Blog" className="card__img" />
                                        </div>
                                    </Link>
                                    <div className="card-content pl-0 pr-0 text-left">
                                        <Link to={item.cardUrl} className="card-title">
                                            {item.title}
                                        </Link>
                                        <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                                            <li>{item.date} - <Link to={item.cardUrl} className="tag__text">نصائح وخدع</Link></li>
                                            <li><Link to="#" >{item.likeNum} الإعجابات</Link></li>
                                        </ul>
                                        <p className="card-sub mt-3">
                                            {item.description}
                                        </p>
                                        <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                            <li>
                                                <img src={item.authorImg} alt="Author" />
                                                <span className="by__text"> بواسطة </span>
                                                <span> {item.author}</span>
                                            </li>
                                            <li>
                                                <Link to={item.cardUrl} className="blog__btn">
                                                    اقرأ أكثر
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default LatestBlog;