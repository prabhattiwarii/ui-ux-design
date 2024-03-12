import React from 'react';

const NotFound = () => {
    document.title="page not found"
    return (
        <>
            <div className='custome-error'>
                <p className='error-text'>Sorry, the page you are looking for could not be found.</p>
            </div>
        </>
    );
};

export default NotFound;
