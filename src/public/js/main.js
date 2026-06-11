document.addEventListener("DOMContentLoaded", () => {

    // SCROLL HEADER
    const header = document.getElementById("mainHeader");

    window.addEventListener("scroll", () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    // MOBILE MENU
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.add("open");
        });

        closeMenu.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    }

    // IMAGE PREVIEW (ROBUST)
    const imageInput = document.getElementById("imageUrl");
    const preview = document.getElementById("imagePreview");

    if (imageInput && preview) {
        const updatePreview = () => {
            const url = imageInput.value.trim();

            if (url.length > 5) {
                preview.src = url;
                preview.style.opacity = "1";
            } else {
                preview.src = "https://placehold.co/600x800?text=Preview";
                preview.style.opacity = "0.5";
            }
        };

        imageInput.addEventListener("input", updatePreview);

        // run once on load (important for edit page)
        updatePreview();
    }
});