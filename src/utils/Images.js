import logo512 from '../img/logo512.png';

const Images = (props) => {
const { data, onClick } = props;

const handleClickImage = (index) => {
    onClick(index);
};

return (
    <div className='images-container'>
    {data.map((slide, index) => (
        <div
        onClick={() => handleClickImage(index)}
        key={index}
        className='image'
        >
        <img src={slide.src || logo512} alt={slide.description} />
        </div>
    ))}
    </div>
);
};
 
export default Images;