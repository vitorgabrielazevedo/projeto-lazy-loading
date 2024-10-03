const images = document.querySelectorAll(".img-container img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }

        const img = entry.target;

        img.src = img.src.replace("w=10", "w=1000");

        observer.unobserve(img);
    });
}, {});

images.forEach((img) => {
    observer.observe(img);
});