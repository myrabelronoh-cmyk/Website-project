const testimonials = {
  "01": {
    quote: "Your collaborative approach made the project easy to move forward.",
    name: "Project collaborator",
    note: "Sample testimonial"
  },
  "02": {
    quote: "You brought care and curiosity to every step of the work.",
    name: "Learning partner",
    note: "Sample testimonial"
  }
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A single-page site introducing my work and making it easy to get in touch.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Project Two",
    description: "Replace this description with a short summary of another project you have built.",
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