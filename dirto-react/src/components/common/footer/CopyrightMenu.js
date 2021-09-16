import React, { Component } from 'react';

class CopyrightMenu extends Component {
    state = {
        links: [
            {
                path: '#',
                title: 'Terms & Conditions'
            },
            {
                path: '#',
                title: 'Privacy Policy'
            },
            {
                path: '#',
                title: 'Help Center'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="copyright-right-side justify-content-end d-flex align-items-center">
                    <ul className="list-items">
                        {this.state.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.path}>{link.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="select-field">
                        <select name="language" id="language-switch">
                            <option value="0">English</option>
                            <option value="1">French</option>
                            <option value="2">Nepal</option>
                            <option value="3">America</option>
                            <option value="4">Arabic</option>
                        </select>
                    </div>
                </div>
            </>
        );
    }
}

export default CopyrightMenu;