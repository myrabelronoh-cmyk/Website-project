const testimonials = {
  "01": {
    quote: "Myrabel brings curiosity to every challenge and keeps learning until the details feel right.",
    name: "Project collaborator",
    context: "Sample testimonial"
  },
  "02": {
    quote: "A thoughtful, steady approach to turning a rough idea into something clear and useful.",
    name: "Learning partner",
    context: "Sample testimonial"
  }
};

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio bringing together testimonials, selected work, and contact details.",
    tech: "HTML · CSS · JavaScript",
    number: "01"
  },
  {
    title: "Product Inventory",
    description: "A JavaScript exercise for keeping a product list organized with add, update, and remove actions.",
    tech: "JavaScript · Arrays · Functions",
    number: "02"
  }
];

const testimonialsList = document.querySelector("#testimonials-list");
const projectsGrid = document.querySelector("#projects-grid");

for (const [number, testimonial] of Object.entries(testimonials)) {
  const card = document.createElement("article");
  card.className = "testimonial-card";

  const index = document.createElement("p");
  index.className = "item-number";
  index.textContent = `NOTE / ${number}`;

  const quote = document.createElement("blockquote");
  quote.textContent = `“${testimonial.quote}”`;

  const attribution = document.createElement("p");
  attribution.className = "attribution";
  attribution.textContent = testimonial.name;

  const context = document.createElement("p");
  context.className = "item-context";
  context.textContent = testimonial.context;

  card.append(index, quote, attribution, context);
  testimonialsList.append(card);
}

for (const project of projects) {
  const card = document.createElement("article");
  card.className = "project-card";

  const index = document.createElement("p");
  index.className = "item-number";
  index.textContent = `PROJECT / ${project.number}`;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const tech = document.createElement("p");
  tech.className = "project-tech";
  tech.textContent = project.tech;

  card.append(index, title, description, tech);
  projectsGrid.append(card);
}