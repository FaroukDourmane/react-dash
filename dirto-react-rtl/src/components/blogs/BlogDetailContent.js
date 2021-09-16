import React, {Component} from 'react';
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import BlogBlockquote from "./BlogBlockquote";
import {Link} from "react-router-dom";
import { FaQuoteRight } from 'react-icons/fa'
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";

class BlogDetailContent extends Component {

    state = {
        img: require('../../assets/images/video-img.jpg'),
        author: 'تنبر أحمد',
        authorImg: require('../../assets/images/testi-img7.jpg'),
        date: '12 فاب ، 2020',
        meta: 'نصائح وخدع',
        metaLink: '#',
        likes: '480',
        title: 'كيفية تحسين تجربة خدمة العملاء الخاصة بك',
        desc1: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هوغتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو ',
        desc2: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو',
        desc3: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو',
        desc4: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو',

        /* Blockquote */
        bgimg: require('../../assets/images/video-img.jpg'),
        quoteIcon: <FaQuoteRight />,
        desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هوغتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم الله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو ',
        name: '- ستيف جوبز',
        designation: 'مؤسس شركة آبل.',

        /* desc Images */
        images: [
            {
                img: require('../../assets/images/img28.jpg')
            },
            {
                img: require('../../assets/images/img29.jpg')
            },
            {
                img: require('../../assets/images/img30.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                <div className="card-item blog-card border-bottom-0 text-left">
                    <div className="card-image">
                        <img src={this.state.img} alt="Blog" className="card__img"/>
                    </div>
                    <div className="card-content pl-0 pr-0 pb-0">
                        <ul className="post-author d-flex align-items-center justify-content-between mb-3">
                            <li>
                                <img src={this.state.authorImg} alt="" />
                                    <span className="by__text">بواسطة</span>
                                    <span> {this.state.author},</span>
                                    <span>{this.state.date} - <Link to={this.state.metaLink} className="tag__text">{this.state.meta}</Link></span>
                            </li>
                            <li>
                                <Link to="#" className="blog__btn">
                                    {this.state.likes} الإعجابات
                                </Link>
                            </li>
                        </ul>
                        <h2 className="card-title font-size-26">
                            {this.state.title}
                        </h2>
                        <p className="card-sub mt-3">
                            {this.state.desc1}
                        </p>
                        <p className="card-sub mt-3">
                            {this.state.desc2}
                        </p>

                        <BlogBlockquote bgImg={this.state.bgimg} quoteIcon={this.state.quoteIcon} desc={this.state.desc} name={this.state.name} designation={this.state.designation} />

                        <p className="card-sub margin-top-30px">
                            {this.state.desc3}
                        </p>
                        <div className="image-fluid margin-top-30px">
                            <div className="row">
                                {this.state.images.map((img, i) => {
                                    return (
                                        <div className="col-lg-4 column-td-6 mb-4" key={i}>
                                            <img src={img.img} alt="Blog" className="img-fluid radius-round" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className="card-sub mb-3">
                            {this.state.desc4}
                        </p>
                        <h3 className="widget-title">سرد قصصي</h3>
                        <p className="card-sub mb-3">
                            {this.state.desc4}
                        </p>
                        <h3 className="widget-title">العلامة التجارية</h3>
                        <p className="card-sub">
                            {this.state.desc4}
                        </p>
                        <div className="section-block margin-top-30px margin-bottom-30px"></div>
                        <div className="tag-items d-flex justify-content-between">

                            <BlogTags />

                            <BlogShare />

                        </div>
                        <div className="section-block margin-top-30px margin-bottom-50px"></div>
                        <div className="comments-wrap">
                            <h2 className="widget-title">5 تعليقات</h2>
                            <div className="title-shape"></div>

                            <ListingDetailsComments />

                        </div>
                        <div className="add-review-listing padding-top-50px">
                            <h2 className="widget-title">اضف تعليق</h2>
                            <div className="title-shape"></div>
                            <div className="section-heading padding-top-10px">
                                <p className="sec__desc font-size-16">لن يتم نشر عنوان بريدك الإلكتروني. الحقول المطلوبة محددة *</p>
                            </div>
                            <div className="contact-form-action mt-3">
                                <BlogCommentFields />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetailContent;