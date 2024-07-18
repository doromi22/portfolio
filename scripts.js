// initial section status
let sectionsState = {
    stacks: false,
    projects: false,
    'educational-bg': false
};

document.addEventListener('DOMContentLoaded', function() {
    toggleSectionState('stacks');
    toggleSectionState('projects');
    toggleSectionState('educational-bg');
});

// section toggle
function toggleSection(section) {
    sectionsState[section] = !sectionsState[section]; // change status
    toggleSectionState(section); // apply status
}

// ui change
function toggleSectionState(section) {
    const sectionElement = document.querySelector(`.${section}`);
    const toggleButton = sectionElement.querySelector('.toggle-btn');
    const content = sectionElement.querySelector(`.${section}list`);

    if (sectionsState[section]) {
        content.style.display = 'block'; // open
        toggleButton.textContent = toggleButton.textContent.replace('▶', '▼'); // change icon
    } else {
        content.style.display = 'none'; // close
        toggleButton.textContent = toggleButton.textContent.replace('▼', '▶'); // change icon
    }
}
