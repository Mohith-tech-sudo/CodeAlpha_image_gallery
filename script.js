const cards = document.querySelectorAll(".card");

const filters = document.querySelectorAll(".filter");

const searchInput = document.getElementById("searchInput");

const lightbox = document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const closeButton =
    document.querySelector(".close");

const nextButton =
    document.querySelector(".next");

const prevButton =
    document.querySelector(".prev");


let currentIndex = 0;


/* Open Lightbox */

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        currentIndex = index;

        showImage();

    });

});


function showImage() {

    const card = cards[currentIndex];

    const image =
        card.querySelector("img");

    const title =
        card.dataset.title;

    const category =
        card.dataset.category;


    lightboxImage.src = image.src;

    lightboxTitle.textContent = title;

    lightboxCategory.textContent =
        category.toUpperCase();


    lightbox.style.display = "flex";

}


/* Next Image */

nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= cards.length) {

        currentIndex = 0;

    }

    showImage();

});


/* Previous Image */

prevButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = cards.length - 1;

    }

    showImage();

});


/* Close Lightbox */

closeButton.addEventListener("click", () => {

    lightbox.style.display = "none";

});


/* Close When Clicking Background */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});


/* Keyboard Navigation */

document.addEventListener("keydown", (event) => {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {

            nextButton.click();

        }

        if (event.key === "ArrowLeft") {

            prevButton.click();

        }

        if (event.key === "Escape") {

            closeButton.click();

        }

    }

});


/* Category Filter */

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const category =
            button.dataset.category;


        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* Search Feature */

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase();


    cards.forEach(card => {

        const title =
            card.dataset.title.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();


        if (
            title.includes(searchText) ||
            category.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
