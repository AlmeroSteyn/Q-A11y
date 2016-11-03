import React from 'react';

const A11yPassMaster = () => {
    return (
        <div>
            <a href="www.qdelft.nl">Go to the company details.</a>
            <button className="btn btn-primary" onClick={()=> {
                alert('Pressed');
            }}>Save changes.
            </button>
        </div>
    )
};

export default A11yPassMaster;