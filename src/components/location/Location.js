import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="event location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3070442048074!2d-79.39133238415191!3d43.64177977912162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7b66a4a51%3A0xe210b2f6fe0b1405!2sRogers%20Centre!5e0!3m2!1sen!2sca!4v1593446030677!5m2!1sen!2sca"

                width="100%"
                height="500"
                frameborder="0"
                style={{ border: 0 }}
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>)
}

export default Location;