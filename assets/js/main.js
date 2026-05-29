document.addEventListener("DOMContentLoaded", () => {
/* =========================================
   Smooth Scroll Navigation
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* =========================================
   Navbar Scroll Effect
========================================= */
const nav = document.querySelector(".nav");

function updateNavbar() {
    if (window.scrollY > 50) {
        nav.style.background = "rgba(13,17,23,0.95)";
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        nav.style.background = "rgba(13,17,23,0.8)";
        nav.style.boxShadow = "none";
    }
}

updateNavbar();
window.addEventListener("scroll", updateNavbar);

/* =========================================
   Active Navigation Link
========================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".links a");

function highlightNav() {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#c9a84c";
        }
    });
}

window.addEventListener("scroll", highlightNav);
highlightNav();

/* =========================================
   Hero Animation
========================================= */
const hero = document.querySelector(".hero");

if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";
    hero.style.transition = "all 1s ease";

    setTimeout(() => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);
}

/* =========================================
   Reveal Elements on Scroll
========================================= */
const revealElements = document.querySelectorAll(
    "section, .card, .stats div"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);
});

/* =========================================
   Animated Counters
========================================= */
const statNumbers = document.querySelectorAll(".stats h3");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const element = entry.target;

        const rawText = element.innerText;

        const target = parseInt(rawText.replace(/\D/g, ""));

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);
            }

            if (rawText.includes("+")) {
                element.innerText = current + "+";
            } else {
                element.innerText = current;
            }

        }, 25);

        counterObserver.unobserve(element);

    });

}, {
    threshold: 0.5
});

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

/* =========================================
   Card Hover Animation
========================================= */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.style.transition =
        "transform 0.3s ease, box-shadow 0.3s ease";

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";
        card.style.boxShadow =
            "0 10px 30px rgba(201,168,76,0.15)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

/* =========================================
   Back To Top Button
========================================= */
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.background = "#c9a84c";
topBtn.style.color = "#000";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

});
