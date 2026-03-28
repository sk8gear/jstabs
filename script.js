document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabcontent = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            tabcontent.forEach(content => content.classList.remove("active"));

            const target = this.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });
});