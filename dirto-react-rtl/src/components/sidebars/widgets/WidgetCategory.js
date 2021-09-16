import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WidgetCategory extends Component {
    state = {
        title: 'التصنيفات',
        lists: [
            {
                cat: 'مطعم',
                catNum: 11,
                url: '#'
            },
            {
                cat: 'متجر',
                catNum: 32,
                url: '#'
            },
            {
                cat: 'اللياقه البدنيه',
                catNum: 21,
                url: '#'
            },
            {
                cat: 'حدث',
                catNum: 24,
                url: '#'
            },
            {
                cat: 'شريط',
                catNum: 14,
                url: '#'
            },
            {
                cat: 'صالون',
                catNum: 11,
                url: '#'
            },
            {
                cat: 'جمال',
                catNum: 10,
                url: '#'
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
                    <div className="cat-list padding-top-30px">
                        <ul className="list-items">

                            {this.state.lists.map((item, i) => {
                                return (
                                    <li className="mb-2 pb-2" key={i}>
                                        <Link to={item.url} className="d-flex justify-content-between align-items-center before-none">
                                            {item.cat} <span>{item.catNum}</span>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetCategory;