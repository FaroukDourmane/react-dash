import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogFullWidthItems extends Component {
    state = {
        items: [
            {
                img: require('../../assets/images/img31.jpg'),
                title: 'أكبر 50 مكان للفعاليات في المملكة المتحدة',
                titleLink: '/blog-single',
                desc: 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي ',
                date: '25 ديسمبر ، 2020',
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
                desc: 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي ',
                date: '25 ديسمبر ، 2020',
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
                desc: 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي ',
                date: '27 ديسمبر ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '492'
            },
            {
                img: require('../../assets/images/img31.jpg'),
                title: 'أكبر 50 مكانًا للحدث في المملكة المتحدة',
                titleLink: '/blog-single',
                desc: 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي ',
                date: '27 ديسمبر ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '589'
            },
            {
                img: require('../../assets/images/img32.jpg'),
                title: 'أفضل 10 متاجر ملابس في سيدني',
                titleLink: '/blog-single',
                desc: 'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم ، ولكن الغالبية تعرضت للتغيير بشكل ما ، عن طريق إدخال بعض الفكاهة أو الكلمات العشوائية التي لا تبدو قابلة للتصديق إلى حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء حد ما. إذا كنت ستستخدم مقطعًا من لوريم إيبسوم ، فأنت بحاجة إلى التأكد من عدم وجود أي شيء محرج مخفي ',
                date: '27 ديسمبر ، 2020',
                meta: 'نصائح وخدع',
                metaLink: '#',
                author: 'ديفيد وايز',
                authorImg: require('../../assets/images/testi-img7.jpg'),
                readmore: 'قراءة المزيد',
                readmoreLink: '/blog-single',
                likes: '134'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.items.map((item, i) => {
                    return (
                        <div className="card-item blog-card text-left" key={i}>
                            <Link to={item.titleLink} className="card-image-wrap">
                                <div className="card-image">
                                    <img src={item.img} alt="العرض الكامل للمدونة" className="card__img" />
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
                                        <img src={item.authorImg} alt="مؤلف" />
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
                    )
                })}
            </>
        );
    }
}

export default BlogFullWidthItems;