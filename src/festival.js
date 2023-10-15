import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import GanpatiMondal from './SliderImage/NavbarImage/mondal.webp';
import MumbaiMondal from './SliderImage/NavbarImage/mumbai.webp';

const aarti = () => {

	

return (
	<>
        <Container>
            <Row>

                

               <Col xs={12} md={6}>
                <img src={GanpatiMondal} style={{'width':'100%'}}   />
               </Col>
               <Col xs={12} md={6}>
               <h2>Festival at Shri Kasba Ganpati Mandal</h2>
               <p>Shri Kasba Ganpati Mandal celebrates the Ganpati festival with a unique tradition every year. The Ganpati festival was being celebrated within the Kasba Ganpati temple till 1925. From 1926, the Ganpati festival is celebrated in an enclosed mandap. Every year, the festival is celebrated for 10 days in the same tradition with ardent fervor. It also forms a great platform for artistes from various backgrounds, to exhibit their talents through the cultural programs, organized to celebrate the festival. On the 10th day, the idol of Shri Kasba Ganpati Mandal is bestowed with the honor of leading the immersion procession in Pune.</p>
                </Col>
               
               <Col xs={12} md={6} className='pt-5'>
               <h2>Celebration of the Ganesh Festival</h2>
               <p>On the auspicious day of Ganesh Chaturthi, the day when the festival falls, the welcome rituals of Lord Ganesh begin with a new idol of Lord Ganesh placed in a palkhi made of silver, and carried out in a procession to the Utsav Mandap by the devotees, on their shoulders. After bringing the Ganesh idol into the Utsav Mandap, the priest performs the puja of Lord Ganpati, known as ‘Pranpratishtha’. All the devotees participate in the puja and arti. Thus, the ten day long Ganesh festival is commenced. During the festival days, the mandal conducts various social as well as cultural programs for personal and community development. Various programs such as Bhajans, and Satsangs are arranged. Various groups partake in the Bhajans with great piety and devotion. Apart from cultural programs, social initiatives such as, free-eye check-up, blood check-up camps, talks on social development by famous social workers, debates on topics which create social awareness and so on are held. For children, “Vividh-Gundarshan” program is organized in which children between the age group of 3 to 12 years perform various plays, dance, and so on to encourage and display their talents in the field of music, poetry, and art. This activity builds a sense of belonging and teamwork among the youth. </p>
                </Col>
                <Col xs={12} md={6} className='pt-5'>
                <img src={MumbaiMondal} style={{'width':'100%'}}   />
               </Col>
            </Row>
        </Container>
    </>
);
};

export default aarti;
