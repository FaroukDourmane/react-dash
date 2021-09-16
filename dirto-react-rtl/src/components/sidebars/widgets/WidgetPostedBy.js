import React, {Component} from 'react';

class WidgetPostedBy extends Component {
    state = {
        title: 'منشور من طرف',
        items: [
            {
                title: 'تاجر'
            },
            {
                title: 'فرد'
            },
            {
                title: 'موزع'
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

                        {this.state.items.map((item, index) => {
                            return (
                                <div className="custom-checkbox" key={index}>
                                    <input type="checkbox" id={'chb4-'+index} />
                                    <label htmlFor={'chb4-'+index}>
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

export default WidgetPostedBy;