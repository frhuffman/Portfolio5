// const student = {
//   fullName: "Flynn Huffman",
//   semesters: 2,
//   openToWork: true,
// };

// // Arithmetic operator.
// let years = student.semesters / 2;
// console.log(`Years: ${years}`);

// // Conditional operators.
// let jobReady = student.openToWork && student.semesters >= 2;
// console.log(jobReady);

// // Ternary operator.
// let jobStatus = jobReady ? "Ready" : "Not ready";
// console.log(jobStatus);

// // Implicit conversion.
// let semesterMessage = " semesters";
// console.log(student.semesters + semesterMessage);

// // Explicit conversion.
// let semesterString = String(student.semesters);
// console.log(semesterString);

// // Explicit conversion.
// let projectCount = "5";
// let projectNumber = Number(projectCount);
// console.log(projectNumber);

let projects = [
  {
    id: 1,
    title: "NTC Zoo",
    description: "Built a zoo application using C#",
    technologiesUsed: "C#, Visual studio",
    image: "Zoo.png",
  },
  {
    id: 2,
    title: "Tri and Succeed Sports Website",
    description:
      "Built a website for Tri and Succeed sports using HTML and CSS pages and code.",
    technologiesUsed: "HTML, CSS",
    image: "TSS.png",
  },
  {
    id: 3,
    title: "Tree and Book Website",
    description:
      ": Built a website for Tree and Book, a family owned genealogy website using both HTML and CSS pages and code. Used interactive links, accesibility measures and overall formatting for a user friendly website.",
    technologiesUsed: "HTML, CSS",
    image: "tb.png",
  },
];
console.table(projects);

let projectGallery = document.getElementById("projectGallery");

projects.forEach(function (project) {
  let article = document.createElement("article");

  let title = document.createElement("h2");
  title.textContent = project.title;

  let image = document.createElement("img");
  image.src = project.image;
  image.alt = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let technologies = document.createElement("p");
  technologies.textContent = "Technologies: " + project.technologiesUsed;

  article.appendChild(title);
  article.appendChild(image);
  article.appendChild(description);
  article.appendChild(technologies);

  projectGallery.appendChild(article);
});

let contactForm = document.getElementById("contactForm");

if (contactForm) {
  let nameInput = document.getElementById("name");
  let nameError = document.getElementById("nameError");

  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let subjectInput = document.getElementById("subject");
  let subjectError = document.getElementById("subjectError");

  let messageInput = document.getElementById("message");
  let messageError = document.getElementById("messageError");

  contactForm.addEventListener("submit", function (event) {
    if (nameInput.value === "") {
      nameError.textContent = "Name field cannot be empty.";
      event.preventDefault();
    }
    if (subjectInput.value === "") {
      subjectError.textContent = "Please enter a subject.";
      event.preventDefault();
    }
    if (messageInput.value === "") {
      messageError.textContent = "Message cannot be empty.";
      event.preventDefault();
    }
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address";
      event.preventDefault();
    }
  });
}
