import React from 'react';

const Numbers = ({ currentIndex, totalPhotos }) => {
    return (
        <div className="photo-toolbar text-light fs-4">
            <p>Photo {currentIndex + 1} of {totalPhotos}</p>
        </div>
    );
}

export default Numbers;
