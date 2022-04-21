const filterSections = document.querySelector('.img-filters');

function showFilters() {
  filterSections.classList.remove('.img-filters--inactive');
}

export { showFilters };
