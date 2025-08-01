document.addEventListener("DOMContentLoaded", () => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = new Date();
  const currentDayId = days[today.getDay()]; // 'mon', 'tue', etc.

  const tabLinks = document.querySelectorAll(".tabs ul li a");
  const tabContents = document.querySelectorAll(".tabs > div");

  // Remove active classes and hide all tab content
  tabLinks.forEach(link => link.parentElement.classList.remove("ui-state-active"));
  tabContents.forEach(content => content.style.display = "none");

  // Activate the correct tab
  const currentTab = document.querySelector(`.tabs ul li a[href="#${currentDayId}"]`);
  const currentContent = document.querySelector(`#${currentDayId}`);

  if (currentTab && currentContent) {
    currentTab.parentElement.classList.add("ui-state-active");
    currentContent.style.display = "block";
  }

  // Optional: Make tabs interactive
  tabLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove active classes and hide contents
      tabLinks.forEach(l => l.parentElement.classList.remove("ui-state-active"));
      tabContents.forEach(div => (div.style.display = "none"));

      // Activate clicked tab
      link.parentElement.classList.add("ui-state-active");
      const targetId = link.getAttribute("href").substring(1);
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.style.display = "block";
    });
  });
});
