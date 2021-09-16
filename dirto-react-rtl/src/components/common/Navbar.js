import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import {Link} from "react-router-dom";
import  $ from 'jquery';

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    $(document).on('click', '.side-menu-ul li', function () {
        $(".side-menu-ul li").removeClass('active');
        $(this).toggleClass("active")
    })
    $(document).on('click', '.side-menu-ul li.active', function () {
        $(".side-menu-ul li.active").removeClass('active');
    })

    return (
        <>
            <div className="main-menu-content">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">الصفحة الرئيسية<FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/">المنزل الأول</Link></li>
                                <li><Link to="/index2">المنزل الثاني</Link></li>
                                <li><Link to="/index3">المنزل ثلاثة</Link></li>
                                <li><Link to="/index4">المنزل الرابع</Link></li>
                                <li><Link to="/index5">المنزل خمسة</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/all-categories">التصنيفات<FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/all-categories">جميع الفئات</Link></li>
                                <li><Link to="/all-locations">جميع المواقع</Link></li>
                                <li><Link to="/top-place">أفضل الأماكن</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/listing-grid"> القوائم<FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/listing-grid">قائمة الشبكة</Link></li>
                                <li><Link to="/list-map-view">عرض الخريطة</Link></li>
                                <li><Link to="/list-map-view2">عرض الخريطة إثنان</Link></li>
                                <li><Link to="/listing-list">قائمة القائمة</Link></li>
                                <li><Link to="/list-left-sidebar">الشريط الجانبي الأيسر</Link></li>
                                <li><Link to="/list-right-sidebar">الشريط الجانبي الأيمن</Link></li>
                                <li><Link to="/listing-details">تفاصيل قائمة</Link></li>
                                <li><Link to="/add-listing">إضافة قائمة</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/user-profile">الصفحات <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/user-profile">ملف تعريفي للمستخدم</Link></li>
                                <li><Link to="/top-author">كبار المؤلفين </Link></li>
                                <li><Link to="/dashboard">لوحة القيادة</Link></li>
                                <li><Link to="/booking">الحجز  </Link></li>
                                <li><Link to="/booking-confirmation">تأكيد الحجز</Link></li>
                                <li><Link to="/invoice">فاتورة</Link></li>
                                <li><Link to="/pricing">التسعير</Link></li>
                                <li><Link to="/about">حول</Link></li>
                                <li><Link to="/faq">التعليمات</Link></li>
                                <li><Link to="/contact">اتصل</Link></li>
                                <li><Link to="/page-404">الصفحةأربعة مائة و أربعة</Link></li>
                                <li><Link to="/recover">استعادة المرور </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog-full-width">مدونة <FiChevronDown /></Link>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/blog-full-width">العرض الكامل </Link></li>
                                <li><Link to="/blog-grid">شبكة بلوق</Link></li>
                                <li><Link to="/blog-left-sidebar">الشريط الجانبي الأيسر </Link></li>
                                <li><Link to="/blog-right-sidebar">الشريط الجانبي الأيمن </Link></li>
                                <li><Link to="/blog-single">تفاصيل المدونة</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
            </div>
            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                        <li>
                            <Link to="/">الصفحة الرئيسية</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/index/">المنزل الأول</Link></li>
                                <li><Link to="/index2/">المنزل الثاني </Link></li>
                                <li><Link to="/index3/">المنزل ثلاثة</Link></li>
                                <li><Link to="/index4/">المنزل الرابع</Link></li>
                                <li><Link to="/index5/">المنزل خمسة</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/all-categories">التصنيفات</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/all-categories">جميع الفئات</Link></li>
                                <li><Link to="/all-locations">جميع المواقع</Link></li>
                                <li><Link to="/top-place">أفضل الأماكن </Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/listing-grid">القوائم</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/listing-grid">قائمة الشبكة</Link></li>
                                <li><Link to="/list-map-view">عرض الخريطة </Link></li>
                                <li><Link to="/list-map-view2">عرض الخريطةإثنان </Link></li>
                                <li><Link to="/listing-list">قائمة القائمة </Link></li>
                                <li><Link to="/list-left-sidebar">الشريط الجانبي الأيسر  </Link></li>
                                <li><Link to="/list-right-sidebar">الشريط الجانبي الأيمن </Link></li>
                                <li><Link to="/listing-details">تفاصيل قائمة</Link></li>
                                <li><Link to="/add-listing">إضافة قائمة</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/user-profile">الصفحات</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/user-profile">ملف تعريفي للمستخدم</Link></li>
                                <li><Link to="/top-author">كبار المؤلفين </Link></li>
                                <li><Link to="/dashboard">لوحة القيادة</Link></li>
                                <li><Link to="/booking">الحجز </Link></li>
                                <li><Link to="/booking-confirmation">تأكيد الحجز</Link></li>
                                <li><Link to="/invoice">فاتورة</Link></li>
                                <li><Link to="/pricing">التسعير</Link></li>
                                <li><Link to="/about">حول</Link></li>
                                <li><Link to="/faq">التعليمات</Link></li>
                                <li><Link to="/contact">اتصل</Link></li>
                                <li><Link to="/page-404">أربعة مائة و أربعةالصفحة</Link></li>
                                <li><Link to="/recover">استعادة المرور</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/blog-full-width">مدونة</Link> <span className="la-angle-down"><FiChevronDown /></span>
                            <ul className="dropdown-menu-item">
                                <li><Link to="/blog-full-width">العرض الكامل </Link></li>
                                <li><Link to="/blog-grid">شبكة بلوق</Link></li>
                                <li><Link to="/blog-left-sidebar">الشريط الجانبي الأيسر </Link></li>
                                <li><Link to="/blog-right-sidebar">الشريط الجانبي الأيمن </Link></li>
                                <li><Link to="/blog-single">تفاصيل المدونة</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="side-nav-button">
                        <Link to="/login" className="theme-btn">تسجيل الدخول</Link>
                        <Link to="/sign-up" className="theme-btn">سجل</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
