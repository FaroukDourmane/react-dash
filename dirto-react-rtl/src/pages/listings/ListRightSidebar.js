import React, {Component} from 'react';
import {BsGrid, BsListUl} from "react-icons/bs";
import {FiRefreshCw} from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import {Link} from "react-router-dom";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PlaceTwoColumn from "../../components/places/PlaceTwoColumn";
import Select from "react-select";

const shortby = [
    {
        value: 0,
        label: 'باختصار من قبل'
    },
    {
        value: 1,
        label: 'باختصار افتراضيًا'
    },
    {
        value: 2,
        label: 'تصنيف عالي'
    },
    {
        value: 3,
        label: 'الأكثر مراجعة'
    },
    {
        value: 4,
        label: 'قائمة شعبية'
    },
    {
        value: 5,
        label: 'أحدث قائمة'
    },
    {
        value: 6,
        label: 'قائمة أقدم'
    },
    {
        value: 7,
        label: 'السعر من الارخص للاعلى'
    },
    {
        value: 8,
        label: 'السعر الاعلى الى الادنى'
    },
    {
        value: 9,
        label: 'السعر الاعلى الى الادنى'
    },
    {
        value: 10,
        label: 'قائمة عشوائية'
    }
]

class ListRightSidebar extends Component {
    state = {
        selectedCatOp: null,
        title: 'إظهار 1 إلى 6 من أصل 30 مُدخل',
        breadImg: require('../../assets/images/bread-bg.jpg'),
        navs: [
            {
                path: '/listing-list',
                icon: <BsListUl />,
                active: false,
            },
            {
                path: '/listing-grid',
                icon: <BsGrid />,
                active: false,
            }
        ],
        shortby: [
            {
                id: 0,
                title: 'باختصار من قبل'
            },
            {
                id: 1,
                title: 'باختصار افتراضيًا'
            },
            {
                id: 2,
                title: 'تصنيف عالي'
            },
            {
                id: 3,
                title: 'الأكثر مراجعة'
            },
            {
                id: 4,
                title: 'قائمة شعبية'
            },
            {
                id: 5,
                title: 'أحدث قائمة'
            },
            {
                id: 6,
                title: 'قائمة أقدم'
            },
            {
                id: 7,
                title: 'السعر من الارخص للاعلى'
            },
            {
                id: 8,
                title: 'السعر الاعلى الى الادنى'
            },
            {
                id: 9,
                title: 'السعر الاعلى الى الادنى'
            },
            {
                id: 10,
                title: 'قائمة عشوائية'
            }
        ]
    }
    handleChangeshortby = () => {
        const { selectedShortby } = this.state;
        this.setState(
            { selectedShortby }
        );
    }
    render() {
        return (
            <main className="list-right-sidebar">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="قائمة الشريط الجانبي الأيمن" MenuPgTitle="القوائم" img={this.state.breadImg} />

                {/* Place List */}
                <section className="card-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-12">
                                <div className="generic-header margin-bottom-30px">
                                    <ul className="generic-nav">
                                        {this.state.navs.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={item.path} className={ item.active ? 'active': ' '}>
                                                        <span className="d-inline-block">
                                                            {item.icon}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className="short-option ml-3 text-left">
                                        <Select
                                            value={this.selectedShortby}
                                            onChange={this.handleChangeshortby}
                                            placeholder="باختصار من قبل"
                                            options={shortby}
                                        />
                                    </div>
                                    <p className="showing__text text-right">
                                        {this.state.title}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8 row align-items-start">
                                <PlaceTwoColumn />
                            </div>

                            <div className="col-lg-4">
                                <ListingListSidebar />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="button-shared text-center">
                                    <Button text="تحميل المزيد" url="#" className="border-0">
                                        <span className="d-inline-block">
                                            <FiRefreshCw />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                {/* scroll top button */}
                <ScrollTopBtn />
            </main>
        );
    }
}

export default ListRightSidebar;