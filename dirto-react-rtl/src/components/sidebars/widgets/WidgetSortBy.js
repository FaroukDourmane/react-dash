import React, {Component} from 'react';

class WidgetSortBy extends Component {
    state = {
        title: 'صنف حسب',
        items: [
            {
                id: 1,
                title: 'الأفضل مبيعًا'
            },
            {
                id: 2,
                title: 'الأحدث'
            },
            {
                id: 3,
                title: 'أفضل تصنيف'
            },
            {
                id: 4,
                title: 'الأقدم'
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
                    <div className="check-box-list mt-4">

                        {this.state.items.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb3-'+item.id} />
                                    <label htmlFor={'chb3-'+item.id}>
                                        {item.title}
                                    </label>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}

export default WidgetSortBy;