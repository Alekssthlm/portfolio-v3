import toolio from "../assets/Toolio.webp";
import snake from "../assets/Sneaky_snake.webp";
import tick from "../assets/Tick_task_manager.webp";
import prisoner from "../assets/free_prisoner.webp";
import ksss from "../assets/KSSS.webp";

export const projectsData = [
  {
    name: "KSSS history site",
    src: ksss,
    id: "ksss-history-site",
    url: "https://ksss-history-site.vercel.app/",
    preview: "One of the largest sailing clubs in Sweden",
    learnings:
      "Group project with one of the biggest sailing clubs in Sweden. KSSS wanted a new website to showcase their history and achievements. The project was a great learning experience in terms of working with a client and understanding their needs. We also learned how to work with a large codebase and how to manage a project with multiple contributors, both UX designers and Front End Developers. \n The project was built with Next.js and Tailwind CSS. We used Sanity.io as a headless CMS and Vercel for deployment. The project was a great success and the client was very happy with the result. We learned a lot about the importance of communication and collaboration in a project of this scale.",
    badges: ["Next.js", "Sanity CMS", "React", "Tailwind", "Vercel", "jsdoc"],
  },
  {
    name: "TICK task manager",
    src: tick,
    id: "tick-task-manager",
    url: "https://todo-group3-client.vercel.app/",
    preview: "Task manager with user authentication and CRUD operations",
    learnings:
      "Group project where we built a task manager with user authentication and CRUD operations. The project was built with React, Node.js, Express, PostgreSQL and Tailwind UI for styling. We used JWT for authentication and deployed the project to Vercel.\n We implemented a RESTful API, used Postman for testing, set up CI/CD with GitHub Actions and API documentation with Swagger. This was a great learning experience in terms of backend development, working with databases and setting up a RESTful API. ",
    badges: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "JWT",
      "Github CI/CD",
      "Swagger",
    ],
  },
  {
    name: "Toolio",
    src: toolio,
    id: "toolio-productivity-tools",
    url: "https://toolio-six.vercel.app/",
    preview: "Collection of productivity tools",
    learnings:
      "Group project where we built a collection of productivity tools. This project was our first use of React as a library. We used React Router for navigation, React Context for state management and deployed the project to Vercel. We learned how to work with components, props and state in React. We also learned how to use React Router for navigation and how to manage state with React Context. \nThis project was a great introduction to React and helped us understand the basics of component-based front end development.",
    badges: [
      "React",
      "React Router",
      "Context API",
      "Javascript",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Sneaky Snake",
    src: snake,
    id: "sneaky-snake",
    url: "https://sneaky-snake-client.vercel.app/",
    preview: "Snake game with a twist",
    learnings:
      "Own take on a previously built group project where we built a snake game, but with a twist - a random joke when the game loads. The project was built with vanilla JavaScript, HTML and CSS, and it was a great introduction to the concept of game loops and event listeners.\n I learned how to think effectively and follow the javascript logic to build the game. I also learned how to use CSS to style the game and make it look good. Overall, it was a fun project",
    badges: ["Javascript", "HTML", "CSS", "Node.js", "Express"],
  },
  {
    name: "Free the prisoner",
    src: prisoner,
    id: "free-the-prisoner",
    url: "https://free-the-prisoner.netlify.app/",
    preview: "2-player guess-the-word game",
    learnings:
      "One of my first individual projects in my student journey, where I built a 2-player guess-the-word game. The project was built with vanilla JavaScript, HTML and CSS. I learned how to work with arrays, objects and functions in JavaScript, how to use event listeners and DOM manipulation to build the game. \nI practised how to think logically and break down the problem into smaller parts. I also used vanilla CSS to style the game and make it look good.",
    badges: ["Javascript", "HTML", "CSS"],
  },
];
