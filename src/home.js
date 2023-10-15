import React from "react";

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './slider';
import Abotus from './SliderImage/NavbarImage/KGAboutGanpati.png'

import Card from 'react-bootstrap/Card';
import Loginform from './login';

const data = [
    {
      image: require('./SliderImage/NavbarImage/image1.jpg'),
      caption: "2018",
      description: "2018 Mondal Aarti"
    },
    {
      image: require('./SliderImage/NavbarImage/image4.webp'),
      caption: "2019",
      description: "2019 Mondal Aarti"
    },
    {
      image: require('./SliderImage/NavbarImage/image6.jpg'),
      caption: "2020",
      description: "2020 Mondal Aarti"
    },
    {
      image: require('./SliderImage/NavbarImage/image7.webp'),
      caption: "Caption",
      description: "Description Here"
    },
    {
      image: require('./SliderImage/NavbarImage/image8.webp'),
      caption: "Caption",
      description: "Description Here"
    },
    {
      image: require('./SliderImage/NavbarImage/image9.webp'),
      caption: "Caption",
      description: "Description Here"
    }
  ]

const home = () => {

    
    
    return (
        <>
          
        <Slider />
        <Container>
            <div class="text-center header_new py-4">ABOUT&nbsp;MANDAL</div>
            <Row className="pt-3 pb-5" id="aboutus">
                <Col md="9">
                    Pune, once the seat of power of the Marathas, is a city located on the confluence of the rivers, Mula and Mutha.

                    The history of the growth of Pune from a small village, Punawadi, to the fastest growing metropolis in India, is highly impressive. The landscape used to be dotted with temples adorned with beautiful sculptures, built at various points of time. Most of these temples were destroyed in the battles that ensued.

                    In the year 1630 AD, the queen Jijabai Bhosale arrived in Pune with her son Shivaji. Young Shivaji, who was only aged 12, was disturbed by the pathetic plight of the mavals. Shivaji vowed to liberate the mavals from the Mughals. At the same time, an idol of Lord Ganesh was found near the house of Vinayak Thakar, who used to reside close to the residence of the queen, Jijabai Bhosle. Jijabai perceived this as an auspicious moment and promptly built a temple, which is today known as the famous Shri Kasba Ganpati Mandir. Young Shivaji started building the empire of ‘Swarajya’ after this auspicious moment.

                    Since then, Pune is also known as the city of Lord Ganesh and witnessed the cultural development. Lord Ganesh is the Lord of knowledge and the destroyer of obstacles. Therefore, Lord Ganesh is worshipped on every auspicious occasion. The Peshwas were ardent followers of Lord Ganesh. During the regime of the Peshwas, Shaniwarwada--the house of the Peshwas witnessed the grand celebrations for Lord Ganesh.
                </Col>
                <Col md="3">
                    <img src={Abotus} />
                </Col>
            </Row>
            <h1 class="text-center header_new py-4">PHOTO&nbsp;GALLERY</h1>
            <Row id="gallery">

                {data.map((slide, i) => {
                    return (
                        <Col xs={12} md={4} className='py-3' >
                            <img
                                className="d-block w-100"
                                key={i}
                                height={300}
                                src={slide.image}
                                alt="slider image"
                            />
                        </Col>
                    )
                })}


            </Row>

            <Row id="login">
                <div class="text-center header_new py-4">LOGIN</div>
                <Col md={6} className='mx-auto pt-4'>
                    <Card>
                        <Card.Body><Loginform /></Card.Body>
                    </Card>
                </Col>
            </Row>
           
            
            </Container>
        </>
    );
};

export default home;
