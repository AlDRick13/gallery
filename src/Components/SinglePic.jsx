import "../Styles/SinglePic.css";

const SinglePic = ({urls, alt_description, location}) => {
    return(
        <div className="gallery__item">
            <img src={urls} alt={alt_description} className="gallery__img" />
            <h2 className="gallery__title">Taken at: {location}</h2>
        </div>
        )
}

export default SinglePic