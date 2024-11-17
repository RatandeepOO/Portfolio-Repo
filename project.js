// Get references to the search box and project list
const searchBox = document.getElementById('search-box');
const projectList = document.getElementById('project-list');
const projects = document.querySelectorAll('.project');

// Add an event listener to the search box
searchBox.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();

    // Loop through each project and check if it matches the search query
    projects.forEach(project => {
        const projectName = project.getAttribute('data-name').toLowerCase();

        // Show or hide the project based on the query match
        if (projectName.includes(searchQuery)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      //  e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});