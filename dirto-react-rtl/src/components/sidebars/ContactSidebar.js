import React, {Component} from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

class ContactSidebar extends Component {
    state = {
        title: 'مكتبنا',
        img: require('../../assets/images/img27.jpg'),
        desc: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو',
        address: 'الولايات المتحدة الأمريكية 27TH بروكلين نيويورك',
        phoneNum: '+7(111)123456789',
        email: 'contact@dirto.com',
        opendays: 'من الإثنين إلى الجمعة',
        opendaytime: 'قام - حبم',
        closeday: 'من السبت إلى الأحد'
    }
    render() {
        return (
            <>
                <div className="billing-form-item text-left">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">
                            {this.state.title}
                        </h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="our-office-content">
                            <img src={this.state.img} alt="group-img" className="w-100 radius-round" />
                            <div className="section-heading mt-4 mb-4">
                                <p className="sec__desc font-size-15 line-height-24">
                                    {this.state.desc}
                                </p>
                            </div>
                            <ul className="info-list">
                                <li className="d-inline-block mb-2 mr-2">
                                    <span className="la"><GoLocation /></span> {this.state.address}
                                </li>
                                <li className="d-inline-block mb-2 mr-2">
                                    <span className="la"><FiPhone /></span> {this.state.phoneNum}
                                </li>
                                <li className="d-inline-block mb-2 mr-2">
                                    <span className="la"><FaRegEnvelope /></span> {this.state.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="billing-title-wrap pt-0">
                        <h3 className="widget-title pb-0">ساعات العمل</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <ul className="list-items">
                            <li className="d-flex align-items-center justify-content-between color-text-2">
                                <strong className="font-weight-medium">{this.state.opendays}</strong><strong className="font-weight-medium color-text-3">{this.state.opendaytime}</strong>
                            </li>
                            <li className="d-flex align-items-center justify-content-between color-text-2">
                                <strong className="font-weight-medium">{this.state.closeday}</strong><strong className="color-text">مغلق</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactSidebar;