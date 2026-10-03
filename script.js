const testimonialsData = {
  t1: {
    name: "John Makalele",
    role: "Project Manager",
    quote: "A driven developer who delivers clean and efficient web solutions."
  },
  t2: {
    name: "Sarah Lee",
    role: "Project Collaborator",
    quote: "Great attention to detail and awesome collaboration on design components."
  }
};


const projectsData = [
  {
    title: "Portfolio Website",
    description: "A clean, single-page personal portfolio built with HTML, CSS, and JS.",
    techUsed: "HTML, CSS, JavaScript"
  },
  {
    title: "Task Tracker App",
    description: "An interactive web application to organize daily tasks and deadlines.",
    techUsed: "JavaScript, HTML, CSS"
  }
];


const testContainer = document.getElementById("test-container");

for (const key in testimonialsData) {
  const item = testimonialsData[key];


  const card = document.createElement("div");
  card.className = "card";


  card.innerHTML = `
    <h3>${item.name}</h3>
    <p><strong>${item.role}</strong></p>
    <p>"${item.quote}"</p>
  `;


  testContainer.appendChild(card);
}


const projectsContainer = document.getElementById("projects-container");

projectsData.forEach((project) => {
  
  const card = document.createElement("div");
  card.className = "card";


  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><small><strong>Tech:</strong> ${project.techUsed}</small></p>
  `;


  projectsContainer.appendChild(card);
});