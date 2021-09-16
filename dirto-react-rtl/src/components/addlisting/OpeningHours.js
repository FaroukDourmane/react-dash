import React, {Component} from 'react';
import Select from "react-select";

const shortby = [
    {
        value: 2,
        label: '1:00 صباحا'
    },
    {
        value: 2,
        label: '2:00 صباحا'
    },
    {
        value: 3,
        label: '3:00 صباحا'
    },
    {
        value: 4,
        label: '4:00 صباحا'
    },
    {
        value: 5,
        label: '5:00 صباحا'
    },
    {
        value: 6,
        label: '6:00 صباحا'
    },
    {
        value: 7,
        label: '7:00 صباحا'
    },
    {
        value: 8,
        label: '8:00 صباحا'
    },
    {
        value: 9,
        label: '1:00 صباحا'
    },
    {
        value: 10,
        label: '10:00 صباحا'
    },
    {
        value: 11,
        label: '11:00am'
    },
    {
        value: 12,
        label: '12:00 صباحا'
    },
    {
        value: 13,
        label: '13:00 صباحا'
    },
    {
        value: 14,
        label: '14:00 صباحا'
    },
    {
        value: 15,
        label: '15:00 صباحا'
    },
    {
        value: 16,
        label: '1:00 صباحا'
    },
    {
        value: 17,
        label: '5:00 صباحا'
    },
    {
        value: 18,
        label: '6:00 صباحا'
    },
    {
        value: 19,
        label: '7:00 صباحا'
    },
    {
        value: 20,
        label: '8:00 صباحا'
    },
    {
        value: 21,
        label: '9:00 صباحا'
    },
    {
        value: 22,
        label: '10:00 صباحا'
    },
    {
        value: 23,
        label: '11:00 صباحا'
    },
    {
        value: 24,
        label: '12:00 صباحا'
    },
]
class OpeningHours extends Component {
    state = {
        selectedHours: null,
        title: 'ساعات العمل',
    }
    handleChangeHours = () => {
        const { selectedHours } = this.state;
        this.setState(
            { selectedHours }
        );
    }
    render() {
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">{this.state.title}</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">يوم الاثنين</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">الثلاثاء</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">الأربعاء</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">الخميس</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">Friday</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">يوم السبت</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <label className="label-text">الأحد</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت مفتوح"
                                                options={shortby}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <Select
                                                value={this.selectedHours}
                                                onChange={this.handleChangeHours}
                                                placeholder="وقت الإغلاق"
                                                options={shortby}
                                            />
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

export default OpeningHours;