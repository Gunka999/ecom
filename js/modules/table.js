export default function table() {
    const tabHeaderItem = document.querySelectorAll(".tab-header-item");
    const tabContentItem = document.querySelectorAll(".tab-content");

    showContent();
    controlTab();

    function showContent(i = 0) {
        tabContentItem.forEach(item => (item.style.display = "none"));
        tabContentItem[i].style.display = "flex";

        tabHeaderItem.forEach(item => item.classList.remove("active"));
        tabHeaderItem[i].classList.add("active");
    }

    function controlTab() {


        for (let i = 0; i < tabHeaderItem.length; i++) {
            tabHeaderItem[i].addEventListener("click", () => {
                showContent(i);
            });
        }
    }
}