// CardComponent.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

import {
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";




const CardComponent = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const internshipsCollection = await db.ref('internships').get();
        const internshipData = internshipsCollection.docs.map((doc) => ({id:doc.id,...doc.data()}));
        setInternships(internshipData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if(loading){
    return <p>Loading...</p>;
  }
 
    return (
      <div>
        <h1>Internships</h1>
        <Row>
          {internships.map((internships) => (
            <Col sm="6" lg="6" xl="3" key={internships.id}>
              <Blog
                //image={blg.bg1} // Replace with actual field names from your data
                title={internships.companyName}
                subtitle={internships.jobTitle}
                text={internships.description}
               // color={internships.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  export default CardComponent