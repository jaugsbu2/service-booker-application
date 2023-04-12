import React from "react";
import image1 from "../assets/IMG_1437.jpg";
import car2 from '../assets/dhiva-krishna-YApS6TjKJ9c-unsplash.jpg'
import background from "../assets/auto-1868726__480.jpg";

const styles = {
  mane: 'Home',
  theme: {
    color: 'white',
    textAlign: 'center',
    padding: '15px',
  },
 pStyles: {
  



  },
  imgStyles:{
    padding: 20,
    height: 200,
  }
};

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100%"}}>  
    <div style={styles.theme}className='home'> 

    <h1> WELLCOME</h1>
    <h4> Service Booker Application</h4>
   
       <p style={styles.pStyles}>
         Service Booker Application an app
          created by Josh Augsburger, Malik Kouyate, Beena Robert and Wilfredo Recinos Recinos
          students of UC Berkeley  coding bootcapm. This website application allows users to create 
          an account, request tickets, delete them and also allows employee  be able to send email 
          to the users.
      </p>
      
      <img src={image1}style={styles.imgStyles}></img>
      <img src={car2}style={styles.imgStyles}></img>


     </div>
     </div>
  )
};

export default Home;
