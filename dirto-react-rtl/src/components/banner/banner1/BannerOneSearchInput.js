import React, {Component} from 'react'
import  { FiSearch } from 'react-icons/fi'
import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";


const categories = [
    {
        value: 0,
        label: 'اختر تصنيف'
    },
    {
        value: 1,
        label: 'كل الفئات'
    },
    {
        value: 2,
        label: 'محلات'
    },
    {
        value: 3,
        label: 'الفنادق'
    },
    {
        value: 4,
        label: 'أغذية ومطاعم'
    },
    {
        value: 5,
        label: 'اللياقه البدنيه'
    },
    {
        value: 6,
        label: 'السفر'
    },
    {
        value: 7,
        label: 'صالونات'
    },
    {
        value: 8,
        label: 'حدث'
    },
    {
        value: 9,
        label: 'اعمال'
    },
    {
        value: 10,
        label: 'وظائف'
    }
]

export default class BannerOneSearchInput extends Component {
    state = {
        selectedCatOp: null,
    }

    handleChangeCat = () => {
        const { selectedCatOp } = this.state;
        this.setState(
            { selectedCatOp }
        );
    }
    render() {
        return (
            <>
                <div className="main-search-input">

                    <div className="main-search-input-item">
                        <div className="contact-form-action">
                            <form action="#">
                                <div className="form-group mb-0">
                                <span className="form-icon">
                                    <FiSearch/>
                                </span>
                                    <input className="form-control" type="text"
                                           placeholder="عما تبحث؟"/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="main-search-input-item location">
                        <SelectCountry />
                    </div>

                    <div className="main-search-input-item category">
                        <Select
                            value={this.selectedCatOp}
                            onChange={this.handleChangeCat}
                            placeholder="اختر تصنيف"
                            options={categories}
                        />
                    </div>

                    <div className="main-search-input-btn">
                        <button className="button theme-btn" type="submit">بحث</button>
                    </div>

                </div>
            </>
        )
    }
}
