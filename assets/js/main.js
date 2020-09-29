const sectionLinks = document.querySelectorAll('.section-link');

const closeAllSubSections = () => {
  sectionLinks.forEach((sectionLink) => {
    const subSection = sectionLink.nextElementSibling;
    subSection.style.height = 0;
    sectionLink.dataset.isOpen = false;
  });
}

sectionLinks.forEach((sectionLink) => {
  sectionLink.addEventListener('click', (event) => {
    closeAllSubSections();
    const subSection = event.currentTarget.nextElementSibling;
    const subSectionHeight = subSection.firstElementChild.clientHeight;
    subSection.style.height = `${subSectionHeight}px`;
    sectionLink.dataset.isOpen = true;
  })
})
