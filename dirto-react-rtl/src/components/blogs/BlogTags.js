import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogTags extends Component {
    state = {
        title: 'العلامات: ',
        lists: [
            {
                path: '#',
                title: 'السفر'
            },
            {
                path: '#',
                title: 'طعام'
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="tag-list">
                    <li className="font-weight-semi-bold color-text-2">{this.state.title}</li>
                    {this.state.lists.map((item, i) => {
                        return (
                            <li key={i}>
                                <Link to={item.path} className="radius-rounded">{item.title} </Link>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default BlogTags;