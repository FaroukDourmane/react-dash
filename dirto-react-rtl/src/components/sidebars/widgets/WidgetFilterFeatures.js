import React, {Component} from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery'

class WidgetFilterFeatures extends Component {
    componentDidMount() {
        $(document).ready(function () {
            let box = document.querySelector('.sidebar-widget .filter-by-feature');
            let height = box.offsetHeight
            $(".sidebar-widget .filter-by-feature").css({height: '244px', overflow: 'hidden'})

            $(document).on('click', '#showfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-feature").css({height: height, overflow: 'hidden'})
                $(this).addClass('lessfilterbyfeature');
            })
            $(document).on('click', '.lessfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-feature").css({height: '244px', overflow: 'hidden'})
                $(this).removeClass('lessfilterbyfeature');
            })
        })
    }

    state = {
        title: 'تصفية حسب الميزات',
        features: [
            {
                id: 1,
                text: 'مصعد في المبنى'
            },
            {
                id: 2,
                text: 'مساحة عمل ودية'
            },
            {
                id: 3,
                text: 'الحجز الفوري'
            },
            {
                id: 4,
                text: 'انترنت لاسلكي'
            },
            {
                id: 5,
                text: 'مواقف مجانية للسيارات في المباني'
            },
            {
                id: 6,
                text: 'مواقف مجانية للسيارات في الشارع'
            },
            {
                id: 7,
                text: 'مسموح التدخين'
            },
            {
                id: 8,
                text: 'الأحداث'
            },
            {
                id: 9,
                text: 'تسهيلات لدخول المعاقين'
            },
            {
                id: 10,
                text: 'نظام إنذار'
            },
            {
                id: 11,
                text: 'كهرباء'
            },
            {
                id: 12,
                text: 'جراج ملحق'
            },
            {
                id: 13,
                text: 'كاميرات مراقبة'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget text-left">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="check-box-list show-more-item filter-by-feature mt-4 mb-4">
                        {this.state.features.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb2-'+item.id} />
                                    <label htmlFor={'chb2-'+item.id}>
                                        {item.text}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="#" id="showfilterbyfeature" className="showmore-btn font-weight-semi-bold text-capitalize d-block mr-auto mr-auto text-center  radius-rounded p-0">
                        <span className="showmore-txt ">أظهر المزيد</span>
                        <span className="lessmore-txt d-none">عرض أقل</span>
                    </Link>
                </div>
            </>
        );
    }
}

export default WidgetFilterFeatures;