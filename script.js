document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".project-links a");

  projectLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Opening project link...");
    });
  });
});
