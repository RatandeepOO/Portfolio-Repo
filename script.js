// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// View More button functionality
document.getElementById('view-more').addEventListener('click', function() {
    // Simulate fetching more projects (this could be an AJAX call in a real scenario)
    const newProjects = [
        {
            imgSrc: 'project4.png',
            title: 'Project 4',
            description: 'Description of project 4.',
            githubLink: 'https://github.com/yourprofile/project4'
        },
        {
            imgSrc: 'project5.png',
            title: 'Project 5',
            description: 'Description of project 5.',
            githubLink: 'https://github.com/yourprofile/project5'
        }
    ];

    const projectGrid = document.getElementById('project-grid');

    newProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <img src="${project.imgSrc}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank">View on GitHub</a>
        `;

        projectGrid.appendChild(projectDiv);
    });
});



