function setupHeaderObserver() {
    // Current Header in Topbar.html, Sections in maincontent.html
    const headerActive = document.querySelector(".active-header");
    const headerSet = document.querySelectorAll(".header-section");

    // Find topbar height using JS on topbar.html
    const topbar = document.querySelector(".topbar");
    const topbarHeight = topbar.getBoundingClientRect().height;


    // Create updateHeader
    function updateHeader() {
        let headerCurrent = null;

        headerSet.forEach((header) => {
            const headerTop = header.getBoundingClientRect().top;
            if (headerTop <= topbarHeight) {
                headerCurrent = header;
            }
        }
        );

        if (headerCurrent) {
        headerActive.textContent = headerCurrent.dataset.title;
        } 
        else {
            headerActive.textContent = "";
        }
    }

    window.addEventListener("scroll", updateHeader);
}



document.addEventListener("DOMContentLoaded", setupHeaderObserver);