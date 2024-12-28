import { Row, Col } from 'reactstrap';
import BookmarkedItems from './BookMarkedItems';

import Blog from '../../components/dashboard/Blog';
import bg1 from '../../assets/images/bg/bg5.jpg';
import bg2 from '../../assets/images/bg/bg5.jpg';
import bg3 from '../../assets/images/bg/bg5.jpg';
import bg4 from '../../assets/images/bg/bg5.jpg';
import { useEffect, useState } from 'react';
import { readCompetitions } from '../../services/form';

const Cards = () => {
  const [compData, setCompData] = useState([]);

  const compImage = [bg1, bg2, bg3, bg4];
  useEffect(() => {
    const rawData = Object.entries(readCompetitions());
    console.log(rawData);
    const dummy = rawData.map((item) => {
      return {
        ...item[1],
        image: compImage[Math.floor(Math.random() * 4)],
        btnbg: 'primary',
      };
    });
    setCompData(dummy);
  }, []);
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <h5 className="mb-3">Basic Card</h5> */}
      <Row>
        {compData &&
          compData.map((comp, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
              <Blog
                image={comp.image}
                title={comp.host}
                subtitle={comp.platform}
                text={comp.desc}
                color={comp.btnbg}
              />
            </Col>
          ))}
      </Row>
      <Row>
        {compData &&
          compData.map((comp, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
              <Blog
                image={comp.image}
                title={comp.host}
                subtitle={comp.platform}
                text={comp.desc}
                color={comp.btnbg}
              />
            </Col>
          ))}
      </Row>
      <BookmarkedItems />
    </div>
  );
};

export default Cards;
