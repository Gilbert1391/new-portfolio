export const skillsData = [
  { name: "html", category: "frontend" },
  { name: "css", category: "frontend" },
  { name: "sass", category: "frontend" },
  { name: "javascript", category: "language" },
  { name: "typescript", category: "other" },
  { name: "C#", category: "language" },
  { name: "react", category: "frontend" },
  { name: "angular", category: "frontend" },
  { name: "ionic", category: "frontend" },
  { name: "node.js", category: "backend" },
  { name: "nestjs", category: "backend" },
  { name: "express.js", category: "backend" },
  { name: "sql", category: "backend" },
  { name: "ASP.NET", category: "backend" },
  { name: "git", category: "other" },
];

skillsData.forEach((e, i) => (e.id = i));

export const projectsData = [
  {
    name: "Fifteen",
    description: `Web app built with the MERN stack. Add /admin to the URL and login as admin 
                  to modify the data by sending HTTP requests to the server. Credentials:
                  username: admin, password: my_password`,
    imgName: "fifteen.png",
    siteUrl: "https://fifteen-app.herokuapp.com/",
    githubUrl: "https://github.com/Gilbert1391/fifteen-webapp",
  },
  {
    name: "Dashboard box",
    description: `Single Page Application (SPA) implemented with React, I used the 
                  movie database API to fetch dynamic data to the app. Check repo on 
                  GitHub for more information.`,
    imgName: "dashboard-box.png",
    siteUrl: "https://dashboardbox.netlify.com/#/",
    githubUrl: "https://github.com/Gilbert1391/dashboardbox",
  },
  {
    name: "Bryant hill",
    description: `I built this website thinking about real estate, 
                  it has galleries and individual listing pages. 
                  I integrated some vanilla JavaScript functionalities.`,
    imgName: "bryant-hill.png",
    siteUrl: "https://gilbert1391.github.io/Bryant-Hill/",
    githubUrl: "https://github.com/Gilbert1391/Bryant-Hill",
  },
];

projectsData.forEach((e, i) => (e.id = i));
