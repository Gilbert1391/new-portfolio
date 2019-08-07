import img from "../assets/images/fifteen.png";

export const skillsData = [
  { id: 1, name: "hmtl", category: "frontend" },
  { id: 2, name: "css", category: "frontend" },
  { id: 3, name: "sass", category: "frontend" },
  { id: 4, name: "bem", category: "frontend" },
  { id: 5, name: "javascript", category: "frontend" },
  { id: 6, name: "react", category: "frontend" },
  { id: 7, name: "angular", category: "frontend" },
  { id: 8, name: "ionic", category: "frontend" },
  { id: 9, name: "jquery", category: "frontend" },
  { id: 10, name: "node.js", category: "backend" },
  { id: 11, name: "nestjs", category: "backend" },
  { id: 12, name: "express.js", category: "backend" },
  { id: 13, name: "sql", category: "backend" },
  { id: 15, name: "postgresql", category: "backend" },
  { id: 14, name: "mongodb", category: "backend" },
  { id: 15, name: "git", category: "other" }
];

export const projectsData = [
  {
    id: 1,
    name: "Fifteen",
    description: `Web app built with the MERN stack. Add /admin to the URL and login as admin 
                  to modify the data by sending HTTP requests to the server. Credentials:
                  username: admin, password: my_password`,
    imgUrl: "../assets/images/fifteen.png",
    siteUrl: "https://fifteen-app.herokuapp.com/",
    githubUrl: "https://github.com/Gilbert1391/fifteen-webapp"
  },
  {
    id: 2,
    name: "Dashboard box",
    description: `Single Page Application (SPA) implemented with React, I used the 
                  movie database API to fetch dynamic data to the app. Check repo on 
                  GitHub for more information."`,
    imgUrl: "../assets/images/fifteen.png",
    siteUrl: "https://dashboardbox.netlify.com/#/",
    githubUrl: "https://github.com/Gilbert1391/dashboardbox"
  }
];
