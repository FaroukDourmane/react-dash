import React, {Component} from 'react';
import SectionsHeading from "../common/SectionsHeading";
import Button from "../common/Button";

class About2 extends Component {
    state = {
        images: [
            {
                img: require('../../assets/images/img15.jpg'),
                boxClass: 'mt-4'
            },
            {
                img: require('../../assets/images/img16.jpg'),
                boxClass: ''
            },
            {
                img: require('../../assets/images/img16.jpg'),
                boxClass: 'mt-4'
            },
            {
                img: require('../../assets/images/img15.jpg'),
                boxClass: ''
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content text-left">
                            <SectionsHeading
                                title="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك."
                                desc="غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك. أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون"
                                descClass=" font-size-17 pr-3 mb-3"
                            >
                                <p className="sec__desc font-size-17 pr-3">
                                    غتنم كل يوم فرصة لتصبح مسلمًا أفضل. والله أعلم ما هو الأفضل لك ومتى يكون الأفضل لك. أعلم ما هو الأفضل لك ومتى يكون الأفضل لك.
                                </p>
                                <div className="btn-box padding-top-30px">
                                    <Button text="اكتشف المزيد" url="#" />
                                </div>
                            </SectionsHeading>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-boxes">
                            <div className="row">
                                {this.state.images.map((item, i) => {
                                    return (
                                        <div className="col-lg-6 column-td-6" key={i}>
                                            <div className={'img-box-item ' + item.boxClass}>
                                                <img src={item.img} alt="about" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About2;