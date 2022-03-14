import React from 'react';
import './loading.css';

const loading = () => {
    return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
    );
};

export default loading;