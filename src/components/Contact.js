import { Typography } from "@material-ui/core";
import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import img1 from '../images/1.png';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/5.jpeg';
import img6 from '../images/6.jpg';


const setting = {
  width: '600px',
  height: ['250px', '170px'],
  
  layout: [1, 4],
  photos: [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },

    
  ],
  showNumOfRemainingPhotos: true
};

const Contact = () => {
  return (
    <>
    <Typography variant="h5" component="h5" >Click on the Grid to view some awesome memories!</Typography>
    <ReactPhotoCollage {...setting} /></>
  );
}

export default Contact;
