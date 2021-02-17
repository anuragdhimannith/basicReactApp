import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.5255282131982!2d77.34499953821887!3d28.598245098723027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5362876a3cd%3A0x1af35248105c19fd!2sGOTHAM%20CITY!5e0!3m2!1sen!2sin!4v1613587962758!5m2!1sen!2sin"
                width="100%"
                height="700px"
                frameBorder="0"
                allowFullScreen=""
            >
            </iframe>
            <div className="location_tag">
                <div> Location </div>
            </div>
        </div>
    );
};

export default Location;