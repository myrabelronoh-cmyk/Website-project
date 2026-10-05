const testimonials = {
  "01": {
    quote: "Amina brings clarity, warmth, and strong creative instinct to every project she touches.",
    name: "Creative partner",
    note: "Client feedback"
  },
  "02": {
    quote: "She blends thoughtful design with practical problem-solving in a way that feels effortless.",
    name: "Team collaborator",
    note: "Collaboration review"
  },
  "03": {
    quote: "Her work feels polished, intentional, and easy for users to connect with from the very first glance.",
    name: "Brand lead",
    note: "Design review"
  },
  "04": {
    quote: "Amina is thoughtful, reliable, and brings a calm, creative energy that lifts every project.",
    name: "Client partner",
    note: "Project reflection"
  }
};

const projects = [
  {
    title: "Amina Portfolio",
    description: "A personal portfolio site designed to showcase my work, personality, and approach to digital design.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Brand Landing Page",
    description: "A responsive landing page concept focused on storytelling, product clarity, and clean conversion flow.",
    technologies: ["JavaScript", "HTML", "CSS"]
  }
];

const testimonialContainer = document.querySelector("#test-container");
const projectsContainer = document.querySelector("#projects-container");

for (const [number, testimonial] of Object.entries(testimonials)) {
  const card = document.createElement("article");
  card.className = "testimonial-card";

  const quote = document.createElement("blockquote");
  quote.textContent = `“${testimonial.quote}”`;

  const name = document.createElement("p");
  name.className = "testimonial-name";
  name.textContent = testimonial.name;

  const note = document.createElement("p");
  note.className = "sample-note";
  note.textContent = `${number} / ${testimonial.note}`;

  card.append(quote, name, note);
  testimonialContainer.append(card);
}

for (const [index, project] of projects.entries()) {
  const card = document.createElement("article");
  card.className = "project-card";

  const heading = document.createElement("h3");
  heading.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const technologies = document.createElement("p");
  technologies.className = "project-technologies";
  technologies.textContent = project.technologies.join(" · ");

  const projectNumber = document.createElement("p");
  projectNumber.className = "project-number";
  projectNumber.textContent = `PROJECT / ${String(index + 1).padStart(2, "0")}`;

  card.append(projectNumber, heading, description, technologies);
  projectsContainer.append(card);
}