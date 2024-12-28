import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About CareerLink
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">CareerLink - Your Career Launchpad</h2>
                <h5 className=" mb-4">
                The objective of the Internship Portal is to enhance efficiency and ease in the distribution 
and administration of internship and competition-related emails among our campus 
community. The objective of this project is to improve the efficiency and effectiveness of 
communication between students and the placement office.

                </h5>
                {/* <img
                  src="https://demos.wrappixel.com/free-admin-templates/angular/landingpage-styles/assets/images/screenshots/adminpro-react-pro-lp-img.jpg"
                  alt="my"
                />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://www.wrappixel.com/templates/adminpro-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
