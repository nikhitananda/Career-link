// import {
//   Card,
//   CardBody,
//   CardImg,
//   CardSubtitle,
//   CardText,
//   CardTitle,
//   Button,
// } from "reactstrap";

// const Blog = (props) => {
//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <Button color={props.color}>Apply</Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;

// import React, { useState } from "react";
// import {
//   Card,
//   CardBody,
//   CardImg,
//   CardSubtitle,
//   CardText,
//   CardTitle,
//   Button,
//   Input,
// } from "reactstrap";

// const Blog = (props) => {
//   const [applied, setApplied] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);

//   const handleApplyClick = () => {
//     // No logic here to handle the application status
//   };

//   const handleBookmarkClick = () => {
//     setBookmarked(!bookmarked);
//     // Add logic to handle bookmarking status (e.g., update database).
//   };

//   const handleAppliedCheckboxChange = () => {
//     // Allow the user to manually tick or untick the "Applied" checkbox
//     setApplied(!applied);
//   };

//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <div className="d-flex flex-column mt-3">
//           <Button color={props.color} onClick={handleApplyClick}>
//             Apply
//           </Button>
//           <div className="mt-2">
//             <Input
//               type="checkbox"
//               id={`applyCheckbox-${props.title}`}
//               checked={applied}
//               onChange={handleAppliedCheckboxChange}
//             />
//             <label htmlFor={`applyCheckbox-${props.title}`}>Applied</label>
//           </div>
//           <div className="mt-2">
//             <Input
//               type="checkbox"
//               id={`bookmarkCheckbox-${props.title}`}
//               checked={bookmarked}
//               onChange={handleBookmarkClick}
//             />
//             <label htmlFor={`bookmarkCheckbox-${props.title}`}>Bookmark</label>
//           </div>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;


// import React, { useState } from "react";
// import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";

// const Blog = (props) => {
//   const [applied, setApplied] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);

//   const handleApplyClick = () => {
//     // Add logic for applying
//     setApplied(!applied);
//   };

//   const handleBookmarkClick = () => {
//     // Add logic for bookmarking
//     setBookmarked(!bookmarked);
//   };

//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <div className="mb-3">
//           <label>
//             <input type="checkbox" checked={applied} onChange={handleApplyClick} />
//             Application Filled
//           </label>
//         </div>
//         <div className="mb-3">
//           <label>
//             <input type="checkbox" checked={bookmarked} onChange={handleBookmarkClick} />
//             Mark As Important
//           </label>
//         </div>
//         <Button color={props.color} onClick={handleApplyClick}>
//           Apply
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;

// import React, { useState } from "react";
// import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const Blog = (props) => {
//   const [applied, setApplied] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);
//   const navigate = useNavigate();

//   const handleApplyClick = () => {
//     // Add logic for applying
//     setApplied(!applied);

//     // Redirect to the application view
//     navigate("/application-view");
//   };

//   const handleBookmarkClick = () => {
//     // Add logic for bookmarking
//     setBookmarked(!bookmarked);
//   };

//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <div className="mb-3">
//           <label>
//             <input type="checkbox" checked={applied} onChange={handleApplyClick} />
//             Applied
//           </label>
//         </div>
//         <div className="mb-3">
//           <label>
//             <input type="checkbox" checked={bookmarked} onChange={handleBookmarkClick} />
//             Bookmarked
//           </label>
//         </div>
//         <Button color={props.color} onClick={handleApplyClick}>
//           Apply
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;


// import React, { useState } from "react";
// import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const Blog = (props) => {
//   const [applied, setApplied] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);
//   const navigate = useNavigate();

//   const handleApplyClick = () => {
//     // Redirect to the application view only if the "Apply" button is clicked
//     if (!applied) {
//       // Add logic for applying
//       setApplied(true);
//       navigate("/application-view");
//     }
//   };

//   const handleBookmarkClick = () => {
//     // Add logic for bookmarking
//     setBookmarked(!bookmarked);
//   };

//   return (
//     <Card>
//       <CardImg alt="Card image cap" src={props.image} />
//       <CardBody className="p-4">
//         <CardTitle tag="h5">{props.title}</CardTitle>
//         <CardSubtitle>{props.subtitle}</CardSubtitle>
//         <CardText className="mt-3">{props.text}</CardText>
//         <div className="mb-3">
//           <label>
//             <input type="checkbox" checked={applied} onChange={() => {}} />
//             Applied
//           </label>
//         </div>
//         <div className="mb-3">
//           <label>
//             <input type="checkbox" checked={bookmarked} onChange={handleBookmarkClick} />
//             Bookmarked
//           </label>
//         </div>
//         <Button color={props.color} onClick={handleApplyClick}>
//           Apply
//         </Button>
//       </CardBody>
//     </Card>
//   );
// };

// export default Blog;


import React, { useState } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  const [applied, setApplied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    // Redirect to the application view only if the "Apply" button is clicked
    if (!applied) {
      // Add logic for applying
      setApplied(true);
      navigate("/application-view");
    }
  };

  const handleBookmarkClick = () => {
    // Add logic for bookmarking
    setBookmarked(!bookmarked);
  };

  const handleAppliedCheckboxChange = () => {
    // Toggle the "Applied" checkbox independently
    setApplied(!applied);
  };

  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <div className="mb-3">
          <label>
            <input type="checkbox" checked={applied} onChange={handleAppliedCheckboxChange} />
            Applied
          </label>
        </div>
        <div className="mb-3">
          <label>
            <input type="checkbox" checked={bookmarked} onChange={handleBookmarkClick} />
            Bookmark
          </label>
        </div>
        <Button color={props.color} onClick={handleApplyClick}>
          Apply
        </Button>
      </CardBody>
    </Card>
  );
};

export default Blog;




