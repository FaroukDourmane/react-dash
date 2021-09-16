import React, {Component} from 'react';
import $ from 'jquery'
import {Link} from "react-router-dom";

class WidgetFilterCategory extends Component {
    componentDidMount() {
        $(document).ready(function () {
            let catbox = document.querySelector('.sidebar-widget .filter-by-category');
            let height = catbox.offsetHeight
            $(".sidebar-widget .filter-by-category").css({height: '244px', overflow: 'hidden'})

            $(document).on('click', '#showfilterbycategory', function () {
                $(".sidebar-widget .filter-by-category").css({height: height, overflow: 'hidden'})
                $(this).addClass('lessfilterbyfeature');
            })
            $(document).on('click', '.lessfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-category").css({height: '244px', overflow: 'hidden'})
                $(this).removeClass('lessfilterbyfeature');
            })
        })
    }
    state = {
        title: 'تصفية حسب الفئة',
        categories: [
            {
                id: 1,
                cat: ' السفر',
                catNum: 11
            },
            {
                id: 2,
                cat: ' الفنون',
                catNum: 22
            },
            {
                id: 3,
                cat: ' تقنية',
                catNum: 9
            },
            {
                id: 4,
                cat: ' موضه',
                catNum: 11
            },
            {
                id: 5,
                cat: ' تقنية',
                catNum: 12
            },
            {
                id: 6,
                cat: ' أسلوب الحياة',
                catNum: 48
            },
            {
                id: 7,
                cat: ' التصميم',
                catNum: 23
            },
            {
                id: 8,
                cat: ' الحاسوب',
                catNum: 28
            },
            {
                id: 9,
                cat: ' وظائف',
                catNum: 24
            },
            {
                id: 10,
                cat: ' عقارات',
                catNum: 40
            },
            {
                id: 11,
                cat: ' ملابس',
                catNum: 23
            },
            {
                id: 12,
                cat: ' الجمال والسبا',
                catNum: 18
            },
            {
                id: 13,
                cat: ' حدث',
                catNum: 65
            },
            {
                id: 14,
                cat: ' الصحة واللياقة البدنية',
                catNum: 34
            },
            {
                id: 15,
                cat: ' مطاعم',
                catNum: 20
            }
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
                    <div className="check-box-list show-more-item filter-by-category mt-4 mb-4">

                        {this.state.categories.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb'+item.id} />
                                    <label htmlFor={'chb'+item.id}>
                                        {item.cat} <span> {item.catNum}</span>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="#" id="showfilterbycategory" className="showmore-btn font-weight-semi-bold text-capitalize d-block mr-auto mr-auto text-center radius-rounded p-0">
                        <span className="showmore-txt ">أظهر المزيد</span>
                        <span className="lessmore-txt d-none">عرض أقل</span>
                    </Link>
                </div>
            </>
        );
    }
}

export default WidgetFilterCategory;