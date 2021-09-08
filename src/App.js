import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import {getPhotos} from './Services/getPhotos.js';
import SinglePic from './Components/SinglePic.jsx';


function App() {

  const [photos, setPhotos] = useState();

  const handleFetchAPI = async () => {
    const url = await getPhotos()
    console.log( url)
    setPhotos(url)

  }

  useEffect(()=>{
    handleFetchAPI();
  },[])

  
  return (
    <div className="App">
      <Header title="GALLERY"/>
      <hr />
      <div className="gallery__container">
        {photos && (photos.map(pic => (
    // <img src={pic.urls.regular} alt="" />
    <SinglePic key={pic.id}urls={pic.urls.small} alt_description={pic.alt_description} location={pic.user.location}/>
  )))}
      </div>
      <hr />
    </div>
  );
}

export default App;
