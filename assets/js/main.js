// NAVBAR 

const sectionLinks = document.querySelectorAll('.section-link');

const closeAllSubSections = () => {
  sectionLinks.forEach((sectionLink) => {
    const subSection = sectionLink.nextElementSibling;
    subSection.style.height = 0;
    sectionLink.dataset.isOpen = false;
  });
}

const openSubSection = (subSection) => {
  const subSectionHeight = subSection.firstElementChild.clientHeight;
  subSection.style.height = `${subSectionHeight}px`;
}

const closeSubSection = (subSection) => {
  subSection.style.height = 0;
}


sectionLinks.forEach((sectionLink) => {
  if (sectionLink.dataset.isOpen == 'true') {
    openSubSection(sectionLink.nextElementSibling);
  }

  sectionLink.addEventListener('click', (event) => {
    if (sectionLink.dataset.isOpen == 'false') {
      closeAllSubSections();
      openSubSection(event.currentTarget.nextElementSibling);
      sectionLink.dataset.isOpen = true;
    } else if (sectionLink.dataset.isOpen == 'true') {
      closeSubSection(event.currentTarget.nextElementSibling);
      sectionLink.dataset.isOpen = false;  
    }
  })
})


// COPY BLOC CODE

