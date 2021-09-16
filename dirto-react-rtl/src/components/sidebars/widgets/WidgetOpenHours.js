import React, {Component} from 'react';

class WidgetOpenHours extends Component {
    state = {
        title: 'ساعات العمل',
        stitle: 'مفتوح الان',
        items: [
            {
                day: 'يوم الاثنين',
                time: '9 صباحًا - 5 مساءً',
                close: false,
            },
            {
                day: 'الثلاثاء',
                time: '9 صباحًا - 5 مساءً',
                close: false,
            },
            {
                day: 'الأربعاء',
                time: '9 صباحًا - 5 مساءً',
                close: false,
            },
            {
                day: 'الخميس',
                time: '9 صباحًا - 5 مساءً',
                close: false,
            },
            {
                day: 'يوم الجمعة',
                time: '9 صباحًا - 5 مساءً',
                close: false,
            },
            {
                day: 'اشعة الشمس',
                time: 'مغلق',
                close: true,
            }
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget text-left">
                    <div className="opening-hours">
                        <div className="listing-badge d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="widget-title">
                                    {this.state.title}
                                </h3>
                                <div className="title-shape"></div>
                            </div>
                            <p><span className="theme-btn button-success">
                                {this.state.stitle}
                            </span></p>
                        </div>
                        <ul className="list-items padding-top-30px">
                            {this.state.items.map((item, i) => {
                                return (
                                    <li key={i} className="d-flex justify-content-between">
                                        {item.day} <strong className={item.close ? 'color-text' : 'font-weight-medium'}>{item.time}</strong>
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

export default WidgetOpenHours;