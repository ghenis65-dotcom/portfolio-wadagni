
// MENU DE NAVIGATION MOBILE

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("show");

        const ouvert = menu.classList.contains("show");

        menuToggle.textContent = ouvert ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", ouvert);

    });

    // Fermer le menu après un clic sur un lien

    menu.querySelectorAll("a").forEach(function(lien) {

        lien.addEventListener("click", function() {

            menu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}

// GESTION DU FORMULAIRE DE CONTACT
const formulaire = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

if (formulaire && confirmation) {
    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();

        confirmation.textContent =
            "Merci ! Votre formulaire a été rempli correctement.";

        formulaire.reset();
    });
}


