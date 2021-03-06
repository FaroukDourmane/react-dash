import React, {Component} from 'react';
import { GiPositionMarker, GiChickenOven } from 'react-icons/gi'
import { MdStar, MdStarBorder, MdClose } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineFlag } from 'react-icons/ai'
import { FaRegMoneyBillAlt, FaFacebookF, FaTwitter, FaInstagram, FaTumblr, FaSnapchatGhost, FaGooglePlusG, FaPinterest, FaVk, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { RiBookmarkLine, RiExternalLinkLine, RiSendPlane2Line } from 'react-icons/ri'

import { Dropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import $ from 'jquery';

class ListingDetailsBreadcrumb extends Component {
    componentDidMount() {
        $(document).on('click', '.report-list-items .report-modal-btn', function (e) {
            $('body').addClass('modal-open').css({paddingRight: '17px'});
            $(".report-modal-box").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.report-modal-box .modal-bg, .report-modal-box .modal-top .close', function (e) {
            $('body').removeClass('modal-open').css({paddingRight: '0'});
            $(".report-modal-box").removeClass('show')
            e.preventDefault();
        })
    }

    state = {
        title: 'نودلز لذيذة مسحوبة باليد',
        stitle: '101 طريق إيست باركفيو ، نيويورك',
        shareLinks: [
            {
                icon: <FaFacebookF />,
                title: 'facebook',
                url: 'https://facebook.com'
            },
            {
                icon: <FaTwitter />,
                title: 'twitter',
                url: 'https://twitter.com'
            },
            {
                icon: <FaInstagram />,
                title: 'twitter',
                url: 'https://instagram.com'
            },
            {
                icon: <FaTumblr />,
                title: 'tumblr',
                url: 'https://tumblr.com'
            },
            {
                icon: <FaSnapchatGhost />,
                title: 'snapchat',
                url: 'https://snapchat.com'
            },
            {
                icon: <FaGooglePlusG />,
                title: 'google plus',
                url: 'https://plus.google.com'
            },
            {
                icon: <FaPinterest />,
                title: 'pinterest',
                url: 'https://pinterest.com'
            },
            {
                icon: <FaVk />,
                title: 'vkontakte',
                url: 'https://vkontakte.com'
            },
            {
                icon: <FaLinkedinIn />,
                title: 'linkedin',
                url: 'https://linkedin.com'
            },
            {
                icon: <FaYoutube />,
                title: 'youtube',
                url: 'https://youtube.com'
            }
        ]
    }
    render() {
        return (
            <>
                {/* breadcrumb */}
                <section className="breadcrumb-area listing-detail-breadcrumb">
                    <div className="breadcrumb-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 position-relative">
                                    <div className="breadcrumb-content">
                                        <h2 className="breadcrumb__title">
                                            {this.state.title}
                                        </h2>
                                        <p className="breadcrumb__desc">
                                            <span className="la d-inline-block"><GiPositionMarker /></span> {this.state.stitle}
                                        </p>
                                        <ul className="listing-info mt-3 mb-3">
                                            <li>
                                                <div className="theme-btn average-symble" data-toggle="tooltip" data-placement="top" title="الثمن">
                                                    <span className="average-active">$$$</span>$$
                                                </div>
                                            </li>
                                            <li>
                                                <div className="average-ratings">
                                                    <span className="theme-btn button-success mr-1">
                                                        4.2 <i className="d-inline-block"><MdStar /></i>
                                                    </span>
                                                    <span> المراجعات <strong>36</strong></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="theme-btn listing-tag">
                                                    <i className="d-inline-block"><GiChickenOven /></i> كل واشرب
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="listing-info">
                                            <li>
                                                <button type="button" className="theme-btn border-0">
                                                    <i className="d-inline-block"><RiBookmarkLine /></i> حفظ
                                                </button>
                                            </li>
                                            <li>
                                                <Dropdown className="dropdown share-dropmenu">
                                                    <Dropdown.Toggle className="theme-btn dropdown-toggle border-0 after-none" id="dropdown-basic">
                                                        <i className="d-inline-block"><RiExternalLinkLine /></i> شارك
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        {this.state.shareLinks.map((item, index) => {
                                                            return (
                                                                <Dropdown.Item href={item.url} className={'dropdown-item '+item.title} key={index}>
                                                                    <i className="d-inline-block">{item.icon}</i> {item.title}
                                                                </Dropdown.Item>
                                                            )
                                                        })}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </li>
                                            <li>
                                                <Link to="#" className="theme-btn">
                                                    <span className="d-inline-block"><FaRegMoneyBillAlt /></span> احجز مقعدا
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="report-list-items">
                                        <ul className="listing-info">
                                            <li>
                                                <a href="#review" className="theme-btn">
                                                    <i className="d-inline-block"><MdStarBorder /></i> أكتب مراجعة
                                                </a>
                                            </li>
                                            <li>
                                                <Link to="#" className="theme-btn report-modal-btn">
                                                    <i className="d-inline-block"><AiOutlineFlag /></i> نقل
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bread-svg">
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
                        </svg>
                    </div>
                </section>

                {/* report modal */}
                <div className="modal-form">
                    <div className="modal fade report-modal-box bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content text-left">
                                <div className="modal-top">
                                    <button type="button" className="close close-arrow" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" className="mb-0"><MdClose /></span>
                                    </button>
                                    <h4 className="modal-title"><span className="mb-0"><AiOutlineFlag /></span> الإبلاغ عن هذه القائمة</h4>
                                </div>
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="msg-box">
                                            <label className="label-text">اكتب رسالة</label>
                                            <div className="form-group">
                                                <i className="form-icon"><BsPencil /></i>
                                                <textarea className="message-control form-control" name="message" placeholder="ما الخطأ في هذه القائمة؟" required></textarea>
                                            </div>
                                        </div>
                                        <div className="btn-box text-right">
                                            <button type="submit" className="theme-btn button-success border-0"><i><RiSendPlane2Line /></i> أرسل رسالة
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ListingDetailsBreadcrumb;