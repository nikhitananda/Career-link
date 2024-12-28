// import React, { useEffect, useState } from "react";
// import Blog from "../../components/dashboard/Blog";
// import { Col, Row } from "reactstrap";

// const BookmarkedItems = () => {
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     // Fetch or set your blogData here
//     const fetchData = async () => {
//       // Replace this with your actual data fetching logic
//       const response = await fetch("your_api_endpoint");
//       const data = await response.json();
//       setBlogData(data);
//     };

//     fetchData();
//   }, []);

//   const bookmarkedItems = blogData.filter((item) => item.bookmarked);

//   return (
//     <div>
//       <h2>Bookmarked Items</h2>
//       <Row>
//         {bookmarkedItems.map((blg, index) => (
//           <Col sm="6" lg="6" xl="3" key={index}>
//             <Blog
//               image={blg.image}
//               title={blg.title}
//               subtitle={blg.subtitle}
//               text={blg.description}
//               color={blg.btnbg}
//             />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default BookmarkedItems;

import React, { useEffect, useState } from "react";
import Blog from "../../components/dashboard/Blog";
import { Col, Row } from "reactstrap";

const BookmarkedItems = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    // Fetch bookmarked items from local storage when the component mounts
    const localStorageBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedItems(localStorageBookmarks);
  }, []);

  return (
    <div>
      <h2>Bookmarked Items</h2>
      <Row>
        {bookmarkedItems.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookmarkedItems;
