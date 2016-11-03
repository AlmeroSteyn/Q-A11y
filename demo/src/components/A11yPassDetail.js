import React from 'react';

const A11yPassDetail = () => {
    return (
        <fieldset className="row">
            <legend>Enter your details:</legend>
            <div className="col-xs-12">
                <label >Name:
                    <input className="form-control"/>
                </label>
            </div>
            <div className="col-xs-12">
                <label htmlFor="surname">Surname:</label>
                <input className="form-control" id="surname"/>
            </div>
            <div className="col-xs-12 top-margin">
                <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">
                    <i className="glyphicon glyphicon-home"/>
                </span>
                    <input type="text" className="form-control" aria-label="Your address."/>
                </div>
            </div>
            <div className="col-xs-12">
                <button className="btn btn-primary top-margin" onClick={()=> {
                    alert('Pressed');
                }}>Press Me
                </button>
            </div>
        </fieldset>
    )
};

export default A11yPassDetail;