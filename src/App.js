import React, {useState,useEffect} from 'react';
import styles from './Home.module.css';

function App() {
  const [image1,setImage1]=useState('');
  const [image2,setImage2]=useState('');
  const [image3,setImage3]=useState('');

  useEffect(()=>{
    Promise.all([
      fetch('https://dog.ceo/api/breeds/image/random'),
      fetch('https://dog.ceo/api/breeds/image/random'),
      fetch('https://dog.ceo/api/breeds/image/random')

    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
    }).then(function (data) {
        //console.log(data);

        setImage1(data[0].message);
        setImage2(data[1].message);
        setImage3(data[2].message);
        console.log(data[1]);


    }).catch(function (error) {

        console.log(error);

    });
  },[]);
    return(
          <div>
            <img className={styles.img1} src={image1} alt="dog"/><br/>
            <img className={styles.img2} src={image2} alt="dog"/><br/>
            <img className={styles.img3} src={image3} alt="dog"/>
          </div>
        );
}
 
export default App;