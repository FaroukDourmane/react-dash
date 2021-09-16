import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ImageBox extends Component {
    state  = {
        lists: [
            {
                img: require('../../assets/images/img38.jpg'),
                title: 'وظائف',
                desc: 'مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو  لك. ',
                cardLink: '#'
            },
            {
                img: require('../../assets/images/img39.jpg'),
                title: 'غرفة الأخبار',
                desc: 'مسلمًا أفضل. والله أعلم ما هو  لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك. ',
                cardLink: '#'
            },
            {
                img: require('../../assets/images/img40.jpg'),
                title: 'علاقات المستثمرين',
                desc: ' مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو  لك. ',
                cardLink: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    {this.state.lists.map((item, i) => {
                        return (
                            <div className="col-lg-4 column-td-6" key={i}>
                                <div className="card-item blog-card border-bottom-0">
                                    <Link to={item.cardLink} className="card-image-wrap">
                                        <div className="card-image after-none">
                                            <img src={item.img} alt="Blog" className="card__img radius-round" />
                                        </div>
                                    </Link>
                                    <div className="card-content pt-4 pl-0 pr-0 pb-0 text-left">
                                        <Link to={item.cardLink} className="card-title">
                                            {item.title}
                                        </Link>
                                        <p className="card-sub mt-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default ImageBox;