import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
     image: require('./SliderImage/Image1.jpg'), 
     caption: "2020",
      description: "2020 Mondal Aarti"
    },
    {
      image:require('./SliderImage/Image2.jpg'), 
      caption: "2021",
      description: "2021 Mondal Aarti"
     },
     {
      image:require('./SliderImage/Image3.jpg'), 
      caption: "2022",
      description: "2022 Mondal Aarti"
     } 
  ]

function UncontrolledExample() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
    {data.map((slide, i) => {
     return (
       <Carousel.Item>        
     <img
       className="d-block w-100"
        height={500}
       src={slide.image}
       alt={slide.caption}
     />
     <Carousel.Caption>
       <h3>{slide.caption}</h3>
       <p>{slide.description}</p>
     </Carousel.Caption>
   </Carousel.Item>
     )
   })}
   
 </Carousel>
  );
}

export default UncontrolledExample;