// Jul 13 2025 - jul 13 2025
// For project 00 I'll make a simple project picker where the user (me) recives random project from the difficultiy he selected.

console.log("Project Picker Logic Initialized (test)");

import projects from '../data/projects.json' with { type: 'json' };

const diff = document.getElementById('projectSelect');
const btn      = document.getElementById('lockBtn');
const out  = document.getElementById('result');

btn.addEventListener('click', () => {
    const difficulty = diff.value;
    console.log("Selected Difficulty:", difficulty);

    const project = getRandomProject(difficulty);
    out.innerHTML = `<div class="card">
        <h2 class="project-name">${project.name}</h2>
        <span class="project-difficulty">Difficulty: ${project.difficulty}</span>
        </div>`;
});
    
function getRandomProject(difficulty) {
    const filteredProjects = projects.filter(project => project.difficulty === difficulty);

    const i = Math.floor(Math.random() * filteredProjects.length);
    return filteredProjects[i];
}
