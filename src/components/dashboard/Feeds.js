import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "JP Morgan appli..",
    icon: "bi bi-bell",
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "Apply for TATA Busi..",
    icon: "bi bi-bell",
    color: "primary",
    date: "30 minute ago",
  },
  {
    title: "American Express..",
    icon: "bi bi-bell",
    color: "primary",
    date: "45 minute ago",
  },
  {
    title: "Internships marked as..",
    icon: "bi bi-bell",
    color: "primary",
    date: "1 hour ago",
  },
  {
    title: "Checkout MLH's Hack..",
    icon: "bi bi-bell",
    color: "primary",
    date: "1 hour ago",
  },
  {
    title: "Checkout CCS Hack..",
    icon: "bi bi-bell",
    color: "primary",
    date: "1 hour ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Notifications</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
