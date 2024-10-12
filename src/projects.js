'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event) => {
  const target = event.target.closest('button');
  if (!target) return;

  const filter = target.dataset.category;
  if (!filter) return;
  handleActiveSelection(target);

  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  if (active) {
    active.classList.remove('category--selected');
  }
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === 'all' || project.dataset.type === filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
