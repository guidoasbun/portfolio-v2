import weatherDashboard from "@/assets/images/project-images/weatherDashboard.png";
import calculatorImage from "@/assets/images/project-images/calculator.png";
import snakeGameImage from "@/assets/images/project-images/snake.png";
import paellaAppImage from "@/assets/images/project-images/paellaApp.png";

const webProjects = [
  {
    title: "Weather Dashboard",
    image: weatherDashboard,
    description:
      "This is a weather application that displays the current and a five day forecast for a searched city",
    github: "https://github.com/guidoasbun/WeatherDashboard?tab=readme-ov-file",
    live: "https://master.d2o5gk0ja3q3pq.amplifyapp.com/",
    tech: "openweathermap API, JavaScript, HTML, CSS, Bootstrap, AWS Amplify",
  },
  {
    title: "Paella Recipe App",
    image: paellaAppImage,
    description:
      "This is a weather application that displays the current and a five day forecast for a searched city",
    github:
      "https://github.com/Snap-Engineering-Academy-2021/food-town/tree/main/guido",
    live: "https://snap-engineering-academy-2021.github.io/food-town/guido/index.html",
    tech: "Javascript, HTML, CSS",
  },
  {
    title: "Calculator",
    image: calculatorImage,
    description:
      "This is a simple calculator application that performs basic arithmetic operations.",
    github: "https://github.com/guidoasbun/calculator-vanillaJS",
    live: "https://guidoasbun.github.io/calculator-vanillaJS/",
    tech: "Vanilla JavaScript, HTML, CSS, Bootstrap, GitHub Pages",
  },
  {
    title: "Snake Game",
    image: snakeGameImage,
    description:
      "This is a simple snake game application that allows the user to play the classic snake game.",
    github: "https://github.com/guidoasbun/snake-javascript",
    live: "https://guidoasbun.github.io/snake-javascript/",
    tech: "Vanilla JavaScript, HTML, CSS, Bootstrap, GitHub Pages",
  },
];

export default webProjects;
