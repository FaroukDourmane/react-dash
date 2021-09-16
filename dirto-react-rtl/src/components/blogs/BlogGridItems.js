import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogGridItems extends Component {
    state = {
        items: [
            {
                img: require('../../assets/images/img31.jpg'),
                title: 'أكبر 50 مكان للفعاليات في المملكة المتحدة',
                titleLink: '/blog-single',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو مسلمًا أفضل. والله أعلم ما هو',
                date: '12 يناير ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img32.jpg'),
                title: 'أفضل 10 متاجر ملابس في سيدني',
                titleLink: '/blog-single',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو مسلمًا أفضل. والله أعلم ما هو',
                date: '12 يناير ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                title: 'أفضل 15 فندق في الولايات المتحدة',
                titleLink: '/blog-single',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو مسلمًا أفضل. والله أعلم ما هو',
                date: '12 يناير ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img31.jpg'),
                title: 'أكبر 50 مكان للفعاليات في المملكة المتحدة',
                titleLink: '/blog-single',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو مسلمًا أفضل. والله أعلم ما هو',
                date: '12 يناير ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img32.jpg'),
                title: 'أفضل 10 متاجر ملابس في سيدني',
                titleLink: '/blog-single',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو مسلمًا أفضل. والله أعلم ما هو',
                date: '12 يناير ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '340'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                title: 'أفضل 15 فندق في الولايات المتحدة',
                titleLink: '/blog-single',
                desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو مسلمًا أفضل. والله أعلم ما هو',
                date: '12 يناير ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '340'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="col-lg-4 column-td-6" key={i}>
                                <div className="card-item blog-card text-left">
                                    <Link to={item.titleLink} className="card-image-wrap">
                                        <div className="card-image">
                                            <img src={item.img} alt="Blog Grid" className="card__img" />
                                        </div>
                                    </Link>
                                    <div className="card-content pl-0 pr-0">
                                        <Link to={item.titleLink} className="card-title">
                                            {item.title}
                                        </Link>
                                        <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                                            <li>{item.date} - <Link to={item.metaLink} className="tag__text">{item.meta}</Link></li>
                                            <li><Link to="#">{item.likes} الإعجابات</Link></li>
                                        </ul>
                                        <p className="card-sub mt-3">
                                            {item.desc}
                                        </p>
                                        <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                            <li>
                                                <img src={item.authorImg} alt="Author" />
                                                <span className="by__text"> بواسطة </span>
                                                <span> {item.author}</span>
                                            </li>
                                            <li>
                                                <Link to={item.readmoreLink} className="blog__btn">
                                                    {item.readmore}
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

export default BlogGridItems;