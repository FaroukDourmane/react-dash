import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil } from 'react-icons/bs'
import { FaRegEdit, FaRegTrashAlt, FaGlobeAmericas, FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiEdit } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Dashboard extends Component {

    componentDidMount() {
        $(document).on('click', '.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn', function (e) {
            $('body').addClass('modal-open').css({paddingRight: '17px'});
            $(".account-delete-modal").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn', function (e) {
            $('body').removeClass('modal-open').css({paddingRight: '0'});
            $(".account-delete-modal").removeClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn', function (e) {
            $(".user-edit-form .dropdown-menu, .user-edit-form .dropdown").toggleClass('show');
            $(".user-edit-form .dropdown-menu").css({position: 'absolute', transform: 'translate3d(0px, -733px, 0px)', top: '0', left: '0', willChange: 'transform'})
            e.preventDefault();
        });
    }

    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
        cards: [
            {
                img: require('../../assets/images/img25.jpg'),
                title: 'المكان المفضل بنك الطعام',
                subtitle: 'شارع بيشوب ، نيويورك',
                editTxt: 'تعديل',
                editIcon: <FaRegEdit />,
                deleteTxt: 'حذف',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: require('../../assets/images/img26.jpg'),
                title: 'بيتش بلو بوردووك',
                subtitle: 'شارع بيشوب ، نيويورك',
                editTxt: 'تعديل',
                editIcon: <FaRegEdit />,
                deleteTxt: 'حذف',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: require('../../assets/images/img27.jpg'),
                title: 'فندق حاكم',
                subtitle: 'شارع بيشوب ، نيويورك',
                editTxt: 'تعديل',
                editIcon: <FaRegEdit />,
                deleteTxt: 'حذف',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: require('../../assets/images/img28.jpg'),
                title: 'المكان المفضل بنك الطعام',
                subtitle: 'شارع بيشوب ، نيويورك',
                editTxt: 'تعديل',
                editIcon: <FaRegEdit />,
                deleteTxt: 'حذف',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: require('../../assets/images/img29.jpg'),
                title: 'بيتش بلو بوردووك',
                subtitle: 'شارع بيشوب ، نيويورك',
                editTxt: 'تعديل',
                editIcon: <FaRegEdit />,
                deleteTxt: 'حذف',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                title: 'فندق حاكم',
                subtitle: 'شارع بيشوب ، نيويورك',
                editTxt: 'تعديل',
                editIcon: <FaRegEdit />,
                deleteTxt: 'حذف',
                deleteIcon: <FaRegTrashAlt />,
                cardLink: '/listing-details'
            }
        ],
        userImg: require('../../assets/images/team2.jpg'),
        userName: 'مارك وليامسون',
        userbio: 'غتنم كل يوم فرصة لتصبح مسلمًا أفضل. غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.',
        address: '101 باركفيو ، نيويورك',
        phoneNum: '+7(111)123456789',
        website: 'www.techydevs.com',
    }
    render() {
        return (
            <main className="dashboard-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="لوحة القيادة" MenuPgTitle="الصفحات" img={this.state.breadcrumbimg} />

                {/* dashboard */}
                <section className="dashboard-area padding-top-40px padding-bottom-90px">
                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsListCheck /></span> القوائم
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><AiOutlineUser /></span> الملف الشخصي
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span> المرجعية
                                                </Link>
                                            </Tab>
                                        </TabList>
                                        <div className="btn-box">
                                            <Link to="/add-listing" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> إنشاء قائمة</Link>
                                            <Link to="/" className="theme-btn ml-1"><span className="la"><AiOutlinePoweroff /></span> خروج</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tab-content" id="nav-tabContent">
                                        <TabPanel>
                                            <div className="row">

                                                {this.state.cards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="col-lg-4 column-td-6">
                                                            <div className="card-item">
                                                                <Link to={item.cardLink} className="card-image-wrap">
                                                                    <div className="card-image">
                                                                        <img src={item.img} className="card__img" alt="بطاقة" />
                                                                    </div>
                                                                </Link>
                                                                <div className="card-content-wrap">
                                                                    <div className="card-content text-left">
                                                                        <Link to={item.cardLink}>
                                                                            <h4 className="card-title mt-0">{item.title}</h4>
                                                                            <p className="card-sub">{item.subtitle}</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="rating-row">
                                                                        <div className="edit-info-box">
                                                                            <button type="button" className="theme-btn button-success border-0 mr-1">
                                                                                <span className="la">{item.editIcon}</span> {item.editTxt}
                                                                            </button>
                                                                            <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                                <span className="la">{item.deleteIcon}</span> {item.deleteTxt}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="user-profile-action">
                                                        <div className="user-pro-img mb-4">
                                                            <img src={this.state.userImg} alt="المستعمل" />
                                                            <div className="dropdown">
                                                                <button
                                                                    className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                                                    type="button" id="editImageMenu"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i className="la la-photo"></i> تعديل
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                     aria-labelledby="editImageMenu">
                                                                    <div className="upload-btn-box">
                                                                        <form>
                                                                            <input type="file" name="files[]" id="filer_input" multiple="multiple" />
                                                                            <button className="theme-btn border-0 w-100 button-success" type="submit" value="submit">
                                                                                احفظ التغييرات
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                    <div className="btn-box mt-3">
                                                                        <button className="theme-btn border-0 w-100">
                                                                            إزالة الصورة
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="user-details text-left">
                                                            <h2 className="user__name widget-title pb-2">
                                                                {this.state.userName}
                                                            </h2>
                                                            <div className="section-heading">
                                                                <p className="sec__desc font-size-15 line-height-24">
                                                                    {this.state.userbio}
                                                                </p>
                                                            </div>
                                                            <ul className="list-items mt-3">
                                                                <li>
                                                                    <span className="la d-inline-block"><GiPositionMarker /></span> {this.state.address}
                                                                </li>
                                                                <li className="text-lowercase">
                                                                    <span className="la d-inline-block"><FiPhone /></span> {this.state.phoneNum}
                                                                </li>
                                                                <li className="text-lowercase">
                                                                    <span className="la d-inline-block"><FaGlobeAmericas /></span> {this.state.website}
                                                                </li>
                                                            </ul>
                                                            <div className="user-edit-form mt-4">
                                                                <div className="dropdown">
                                                                    <button
                                                                        className="theme-btn edit-form-btn shadow-none w-100 dropdown-toggle after-none"
                                                                        type="button" id="editForm"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                        <i className="la"><FiEdit /></i> تعديل
                                                                    </button>
                                                                    <div className="dropdown-menu" aria-labelledby="editForm">
                                                                        <div className="contact-form-action">
                                                                            <div className="input-box">
                                                                                <label className="label-text">اسم</label>
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><AiOutlineUser /></span>
                                                                                    <input className="form-control" type="text" name="name" placeholder="أدخل أسمك" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <label className="label-text">البيانات الحيوية</label>
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><BsPencil /></span>
                                                                                    <textarea className="message-control form-control" name="message" placeholder="أضف السيرة الذاتية"></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><GiPositionMarker /></span>
                                                                                    <input className="form-control" type="text" name="location" placeholder="موقعك" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><FiPhone /></span>
                                                                                    <input className="form-control" type="text" name="number" placeholder="رقم" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><FaRegEnvelope /></span>
                                                                                    <input className="form-control" type="email" name="email" placeholder="عنوان البريد الإلكتروني" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><AiOutlineYoutube /></span>
                                                                                    <input className="form-control" type="text" name="youtube" placeholder="رابط يوتيوب" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="input-box">
                                                                                <div className="form-group">
                                                                                    <span className="la form-icon"><FaGlobeAmericas /></span>
                                                                                    <input className="form-control" type="text" name="website" placeholder="موقع الكتروني" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="btn-box">
                                                                                <button type="button" className="theme-btn border-0 button-success mr-1">
                                                                                    احفظ التغييرات
                                                                                </button>
                                                                                <button type="button" className="theme-btn border-0">
                                                                                    إلغاء
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 text-left">
                                                    <div className="user-form-action">
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0">تغيير كلمة المرور</h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="billing-content">
                                                                <div className="contact-form-action">
                                                                    <form>
                                                                        <div className="input-box">
                                                                            <label className="label-text">كلمة السر الحالية</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="كلمة السر الحالية" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">كلمة مرور جديدة</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="كلمة مرور جديدة" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">تأكيد كلمة المرور الجديدة</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="تأكيد كلمة المرور الجديدة" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <button className="theme-btn button-success border-0">
                                                                                تحديث كلمة المرور
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="delete-account-info">
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0 color-text">حذف الحساب</h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="delete-info-content p-4">
                                                                <p className="mb-3">
                                                                    <span className="text-warning">تحذير:</span> بمجرد حذف حسابك ، لن يكون هناك عودة. يرجى التأكد.
                                                                </p>
                                                                <Button text="احذف حسابي" url="#" className="delete-account border-0" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row">
                                                {this.state.cards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="col-lg-4 column-td-6">
                                                            <div className="card-item">
                                                                <Link to={item.cardLink} className="card-image-wrap">
                                                                    <div className="card-image">
                                                                        <img src={item.img} className="card__img" alt="Card" />
                                                                    </div>
                                                                </Link>
                                                                <div className="card-content-wrap">
                                                                    <div className="card-content text-left">
                                                                        <Link to={item.cardLink}>
                                                                            <h4 className="card-title mt-0">{item.title}</h4>
                                                                            <p className="card-sub">{item.subtitle}</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="rating-row">
                                                                        <div className="edit-info-box">
                                                                            <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                                <span className="la">{item.deleteIcon}</span> {item.deleteTxt}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </TabPanel>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                {/* scroll top button */}
                <ScrollTopBtn />

                {/* Modal */}
                <div className="modal-form text-center">
                    <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content p-4">
                                <div className="modal-top border-0 mb-4 p-0">
                                    <div className="alert-content">
                                        <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                        <h4 className="modal-title mt-2 mb-1">سيتم حذف حسابك بشكل دائم!</h4>
                                        <p className="modal-sub">هل أنت متأكد من المضي قدما.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                        إلغاء
                                    </button>
                                    <button type="button" className="theme-btn border-0 button-danger">
                                        حذف!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        );
    }
}

export default Dashboard;