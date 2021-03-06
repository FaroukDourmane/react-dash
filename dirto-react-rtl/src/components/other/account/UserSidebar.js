import React, {Component} from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiCheck } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { IoMdGlobe } from 'react-icons/io'
import { MdStar, MdStarHalf } from 'react-icons/md'
import SocialProfile from "./SocialProfile";

class UserSidebar extends Component {
    state = {
        img: require('../../../assets/images/testi-img2.jpg'),
        name: 'مارك وليامسون',
        date: 'انضم منذ ٤ سنوات',
        address: '101 باركفيو ، نيويورك',
        number: '+7(111)123456789',
        email: 'example@gmail.com',
        website: 'www.techydevs.com',
        websiteUrl: 'https://techydevs.com'
    }
    render() {
        return (
            <>
                <div className="author-bio margin-bottom-30px text-left">
                    <div className="d-flex align-items-center">
                        <img src={this.state.img} alt="author" />
                        <div className="author-inner-bio">
                            <h4 className="author__title font-weight-bold pb-0 mb-1">{this.state.name} <i className="la tip tip-verified" data-toggle="tooltip" data-placement="top" title="حساب تم التحقق منه"><FiCheck /></i></h4>
                            <p className="author__meta">
                                {this.state.date}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="user-details d-flex align-items-center padding-bottom-30px">
                    <div className="user-item author-review text-left">
                        <h4 className="user__label">المراجعات</h4>
                        <div className="rating-rating">
                            <span className="la"><MdStar /></span>
                            <span className="la"><MdStar /></span>
                            <span className="la"><MdStar /></span>
                            <span className="la"><MdStar /></span>
                            <span className="la"><MdStarHalf /></span>
                            <span className="rating-count">56 (التعليقات)</span>
                        </div>
                    </div>
                    <div className="user-item author-listing">
                        <h4 className="user__label">القوائم</h4>
                        <p className="userlist__number">12</p>
                    </div>
                </div>
                <div className="section-block-2"></div>
                <div className="user-contact padding-top-30px text-left">
                    <h3 className="widget-title pb-0 margin-bottom-20px">بيانات المتصل</h3>
                    <ul className="info-list padding-bottom-30px">
                        <li><span className="la"><GiPositionMarker /></span> {this.state.address}</li>
                        <li><span className="la"><FiPhone /></span> {this.state.number}</li>
                        <li><span className="la"><FaRegEnvelope /></span><a href={'mailto:'+this.state.email}> {this.state.email}</a></li>
                        <li><span className="la"><IoMdGlobe /></span><a href={this.state.websiteUrl}> {this.state.website}</a></li>
                    </ul>
                    <div className="section-block-2"></div>

                    <SocialProfile />
                </div>
                <div className="modal-wrapper text-left">
                    <button type="button" className="theme-btn border-0" data-toggle="modal" data-target=".bs-example-modal-lg">
                        <i className="la"><FaRegEnvelope /></i> إرسال رسالة
                    </button>
                </div>
            </>
        );
    }
}

export default UserSidebar;