import React from 'react';


const ImagePresenter = ({img, altText}) => {
    return ( 
        <div>
            <p>I am in the div!</p>
            < img src={img} alt={altText} />
        </div>
     );
}
 
export default ImagePresenter;