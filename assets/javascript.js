
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Explore Our Range of 3D Scanners 

document.addEventListener("DOMContentLoaded", () => {
    // Attach click listener to all tab items
    document.querySelectorAll(".tabs li").forEach((tab) => {
      tab.addEventListener("click", handleTabClick);
    });
  });
  
  function handleTabClick(event) {
    const target = event.currentTarget; // Current clicked tab
    const tabId = target.getAttribute("data-tab");
  
    // Remove active styles from all tabs
    document.querySelectorAll(".tabs li").forEach((li) => {
      li.classList.remove("bg-orange-500", "text-white", "active");
      li.classList.add("hover:bg-gray-200");
    });
    // Add active styles to clicked tab
    target.classList.add("bg-orange-500", "text-white", "active");
  
    // Hide all content containers
    document.querySelectorAll(".content").forEach((content) => {
      content.classList.add("hidden");
    });
  
    // Show content corresponding to clicked tab
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.remove("hidden");
    }
  }
  
  function moveTabs(direction) {
    const tabs = Array.from(document.querySelectorAll(".tabs li"));
    let activeIndex = tabs.findIndex((tab) =>
      tab.classList.contains("active")
    );
    activeIndex = (activeIndex + direction + tabs.length) % tabs.length;
    tabs[activeIndex].click();
  }



  document.querySelectorAll('.faq-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isOpen = !content.classList.contains('hidden');

        // Close all other FAQ items
        document.querySelectorAll('.faq-content').forEach(item => item.classList.add('hidden'));
        document.querySelectorAll('.faq-header span').forEach(span => span.innerText = span.innerText.replace('-', '+'));

        // Toggle current item
        if (!isOpen) {
            content.classList.remove('hidden');
            button.querySelector('span').innerText = button.querySelector('span').innerText.replace('+', '-');
        }
    });
});