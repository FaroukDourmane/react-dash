import React, {Component} from 'react';
import { FiMap } from 'react-icons/fi'
import { FaMapSigns } from 'react-icons/fa'
import { BsFileCode } from 'react-icons/bs'
import Select from "react-select";
import SelectCountry from "../common/SelectCountry";

const cities = [
    {
        value: 0,
        label: 'اختر مدينة'
    },
    {
        value: 1,
        label: 'نيويورك'
    },
    {
        value: 2,
        label: 'لوس أنجلوس'
    },
    {
        value: 3,
        label: 'شيكاغو'
    },
    {
        value: 4,
        label: 'فينيكس'
    },
    {
        value: 5,
        label: 'واشنطن'
    },
    {
        value: 6,
        label: 'بوسطن'
    },
    {
        value: 7,
        label: 'فيلادلفيا'
    },
    {
        value: 8,
        label: 'بالتيمور'
    },
    {
        value: 9,
        label: 'سياتل'
    },
    {
        value: 10,
        label: 'سان فرانسيسكو'
    },
];
const states = [
    {
        value: 0,
        label: 'اختر ولاية'
    },
    {
        value: 1,
        label: 'كاليفورنيا'
    },
    {
        value: 2,
        label: 'فلوريدا'
    },
    {
        value: 3,
        label: 'تكساس'
    },
    {
        value: 4,
        label: 'هاواي'
    },
    {
        value: 5,
        label: 'أريزونا'
    },
    {
        value: 6,
        label: 'ميشيغان'
    },
    {
        value: 7,
        label: 'نيو جيرسي'
    },
    {
        value: 8,
        label: 'جورجيا'
    },
    {
        value: 9,
        label: 'كارولينا الجنوبية'
    },
    {
        value: 10,
        label: 'مونتانا'
    },
];
class AddLocation extends Component {
    states = {
        selectedCity: null,
        selectedState: null,
        title: 'أضف الموقع'
    }

    handleChangeCity = () => {
        const { selectedCity } = this.state;
        this.setState(
            { selectedCity }
        );
    }
    handleChangeState = () => {
        const { selectedState } = this.state;
        this.setState(
            { selectedState }
        );
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">
                            {this.states.title}
                        </h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">عنوان</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FiMap />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="عنوانك" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">عنوان مؤقت</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FaMapSigns />
                                                </span>
                                                <input className="form-control" type="text" name="name" placeholder="عنوان مؤقت" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">مدينة</label>
                                            <div className="form-group">
                                                <Select
                                                    value={this.selectedCity}
                                                    onChange={this.handleChangeCity}
                                                    placeholder="اختر مدينة"
                                                    options={cities}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">حالة</label>
                                            <div className="form-group">
                                                <Select
                                                    value={this.selectedState}
                                                    onChange={this.handleChangeState}
                                                    placeholder="اختر ولاية"
                                                    options={states}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="label-text">بلد</label>
                                        <div className="form-group">
                                            <SelectCountry />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">
                                                رمز بريدي
                                            </label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsFileCode />
                                                </span>
                                                <input className="form-control" type="text" name="text" placeholder="رمز بريدي" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddLocation;