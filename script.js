/* =====================================================
   LANGUAGE SWITCHING
===================================================== */

const languageButton =
    document.getElementById("languageButton");


let currentLanguage = "kn";


function changeLanguage() {

    const elements =
        document.querySelectorAll("[data-kn]");


    if (currentLanguage === "kn") {

        elements.forEach(function(element) {

            element.textContent =
                element.getAttribute("data-en");

        });


        currentLanguage = "en";


        languageButton.textContent =
            "ಕನ್ನಡ";


        document.documentElement.lang =
            "en";

    }

    else {

        elements.forEach(function(element) {

            element.textContent =
                element.getAttribute("data-kn");

        });


        currentLanguage = "kn";


        languageButton.textContent =
            "English";


        document.documentElement.lang =
            "kn";

    }

}


languageButton.addEventListener(
    "click",
    changeLanguage
);



/* =====================================================
   PHOTO FULLSCREEN VIEWER
===================================================== */

const photos =
    document.querySelectorAll(
        ".event-photo-single img, .pleiades-photo img"
    );


photos.forEach(function(photo) {

    photo.style.cursor = "pointer";


    photo.addEventListener(
        "click",
        function() {

            openImage(this.src);

        }
    );

});



function openImage(imageSource) {


    const viewer =
        document.createElement("div");


    viewer.className =
        "image-viewer";


    viewer.innerHTML = `

        <div class="viewer-close">
            ×
        </div>

        <img
            src="${imageSource}"
            alt="Event Photo">

    `;


    document.body.appendChild(viewer);


    viewer.addEventListener(
        "click",
        function() {

            viewer.remove();

        }
    );

}



/* =====================================================
   ESCAPE KEY CLOSES IMAGE
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            const viewer =
                document.querySelector(
                    ".image-viewer"
                );


            if (viewer) {

                viewer.remove();

            }

        }

    }
);