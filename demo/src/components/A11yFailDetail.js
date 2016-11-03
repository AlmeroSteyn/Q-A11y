import React from 'react';

const A11yFailDetail = () => {
    return (
        <div className="well">
            <fieldset className="no-focus">
                <legend>Enter your details:</legend>
                <label>Name:</label>
                <input className="form-control"/>
                <label>Surname:</label>
                <input className="form-control"/>
                <input className="form-control top-margin" placeholder="Your address here!"/>
                <div className="btn btn-primary top-margin" onClick={()=> {
                    alert('clicked');
                }}>Press Me
                </div>
            </fieldset>
        </div>
    )
};

export default A11yFailDetail;