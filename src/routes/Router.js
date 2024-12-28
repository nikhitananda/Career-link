// import { lazy, Suspense } from "react";
// import { Navigate } from "react-router-dom";

// /****Layouts*****/
// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
// const ApplicationView = lazy(() => import('../views/ui/ApplicationView'));

// /***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Internships = lazy(() => import("../views/ui/Internships.js"));
// const Competitions = lazy(() => import("../views/ui/Competitions.js"));
// const Tables = lazy(() => import("../views/ui/Tables"));
// const Bookmarked = lazy(() => import("../views/ui/BookMarkedItems.js"));


// /*****Routes******/

// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Navigate to="/starter" /> },
//       { path: "/starter", exact: true, element: <Starter /> },
//       { path: "/about", exact: true, element: <About /> },
//       { path: "/alerts", exact: true, element: <Alerts /> },
//       { path: "/internships", exact: true, element: <Internships /> },
//       { path: "/competitions", exact: true, element: <Competitions /> },
//       { path: "/table", exact: true, element: <Tables /> },
//       { path: "/bookmarked", exact: true, element: <Bookmarked /> },
//       { path: "/application-view", exact: true, element: <ApplicationView /> },
//     ],
//   },
// ];

// export default ThemeRoutes;


import React, { useState, lazy } from 'react';
import { Navigate } from 'react-router-dom';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout.js'));

/***** Pages ****/
const Starter = lazy(() => import('../views/Starter.js'));
const About = lazy(() => import('../views/About.js'));
const Alerts = lazy(() => import('../views/ui/Alerts'));
const Internships = lazy(() => import('../views/ui/Internships.js'));
const Competitions = lazy(() => import('../views/ui/Competitions.js'));
const Tables = lazy(() => import('../views/ui/Tables'));
const Bookmarked = lazy(() => import('../views/ui/BookMarkedItems.js'));
const ApplicationViewPage = lazy(() => import('../views/ui/ApplicationView'));

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/starter" /> },
      { path: '/starter', exact: true, element: <Starter /> },
      { path: '/about', exact: true, element: <About /> },
      { path: '/alerts', exact: true, element: <Alerts /> },
      { path: '/internships', exact: true, element: <Internships /> },
      { path: '/competitions', exact: true, element: <Competitions /> },
      { path: '/table', exact: true, element: <Tables /> },
      { path: '/bookmarked', exact: true, element: <Bookmarked /> },
      { path: '/application-view', exact: true, element: <ApplicationViewPage /> },
    ],
  },
];

export default ThemeRoutes;

// Import the necessary dependencies
// import React, { lazy } from 'react';
// import { Navigate } from 'react-router-dom';

// // Import your components
// const FullLayout = lazy(() => import('../layouts/FullLayout.js'));
// const Starter = lazy(() => import('../views/Starter.js'));
// const About = lazy(() => import('../views/About.js'));
// const Alerts = lazy(() => import('../views/ui/Alerts'));
// const Internships = lazy(() => import('../views/ui/Internships.js'));
// const Competitions = lazy(() => import('../views/ui/Competitions.js'));
// const Tables = lazy(() => import('../views/ui/Tables'));
// const Bookmarked = lazy(() => import('../views/ui/BookMarkedItems.js'));
// const ApplicationViewPage = lazy(() => import('../views/ui/ApplicationView'));

// const ThemeRoutes = [
//   {
//     path: '/',
//     element: <FullLayout />,
//     children: [
//       { path: '/', element: <Navigate to="/starter" /> },
//       { path: '/starter', exact: true, element: <Starter /> },
//       { path: '/about', exact: true, element: <About /> },
//       { path: '/alerts', exact: true, element: <Alerts /> },
//       { path: '/internships', exact: true, element: <Internships /> },
//       { path: '/competitions', exact: true, element: <Competitions /> },
//       { path: '/table', exact: true, element: <Tables /> },
//       { path: '/bookmarked', exact: true, element: <Bookmarked /> },
//     ],
//   },
// ];

// export { ThemeRoutes, ApplicationViewPage };
