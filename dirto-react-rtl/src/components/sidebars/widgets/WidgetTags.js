import React, {Component} from 'react';
import {Link} from "react-router-dom";

class WidgetTags extends Component {
    state = {
        title: 'سحابة الكلمات الدلالية',
        lists: [
            {
                text: 'السفر',
                url: '#'
            },
            {
                text: 'مطعم',
                url: '#'
            },
            {
                text: 'نادي رياضي',
                url: '#'
            },
            {
                text: 'طعام',
                url: '#'
            },
            {
                text: 'مكتب. مقر. مركز',
                url: '#'
            },
            {
                text: 'شريط',
                url: '#'
            },
            {
                text: 'الصحة',
                url: '#'
            },
            {
                text: 'موقف سيارة',
                url: '#'
            },
            {
                text: 'سهرات',
                url: '#'
            },
            {
                text: 'طبيب',
                url: '#'
            },
            {
                text: 'مواقف الدراجات',
                url: '#'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget tag-widget text-left">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <ul className="tag-list padding-top-30px">

                        {this.state.lists.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={item.url}>{item.text}</Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </>
        );
    }
}

export default WidgetTags;