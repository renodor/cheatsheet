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

const copyBtns = document.querySelectorAll('.copy-code');

const switchIcons = (clickedBtn) => {
  const svgSave = clickedBtn.innerHTML;
  clickedBtn.viewBox.baseVal.width = 16;
  clickedBtn.viewBox.baseVal.height = 16;
  clickedBtn.innerHTML = "<path d=\"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z\"/>"

  setTimeout(() => {
    clickedBtn.viewBox.baseVal.width = 30;
    clickedBtn.viewBox.baseVal.height = 30;
    clickedBtn.innerHTML = svgSave;
  }, 2000);
}

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener('click', event => {
    const clickedBtn = event.currentTarget;
    window.getSelection().selectAllChildren(
      clickedBtn.parentNode
    );
    document.execCommand('copy');
    switchIcons(clickedBtn);
  })
});


// SMOOTH SCROLL ONLY FOR ANCHOR LINKS

const links = document.querySelectorAll(".sub-section-link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.currentTarget.dataset.anchorLink) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth"
      });

      window.history.pushState('state', document.title, event.currentTarget.href);
    }
  })
})