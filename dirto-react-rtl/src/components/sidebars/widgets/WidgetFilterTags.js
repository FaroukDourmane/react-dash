import React, {Component} from 'react';

class WidgetFilterTags extends Component {
    state = {
        title: 'تصفية حسب العلامات',
        tags: [
            {
                path: '#',
                title: 'تقنية'
            },
            {
                path: '#',
                title: 'موضه'
            },
            {
                path: '#',
                title: 'فن'
            },
            {
                path: '#',
                title: 'التصميم'
            },
            {
                path: '#',
                title: 'طعام'
            },
            {
                path: '#',
                title: 'تطوير'
            },
            {
                path: '#',
                title: 'تسويق'
            },
            {
                path: '#',
                title: 'فيديو'
            },
            {
                path: '#',
                title: 'موسيقى'
            },
            {
                path: '#',
                title: 'نمط الحياة'
            },
            {
                path: '#',
                title: 'مغامرة'
            }
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
                    <ul className="tag-list mt-4">
                        {this.state.tags.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.path}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default WidgetFilterTags;