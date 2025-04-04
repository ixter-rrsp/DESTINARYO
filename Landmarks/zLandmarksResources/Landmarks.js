
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card1").forEach((card) => {
        let images = card.querySelectorAll(".image-container img");
        if (images.length <= 1) return; 
        
        let currentIndex = 0;
        let interval;

        // Ensure first image is visible, others hidden
        images.forEach((img, index) => {
            img.style.transition = "opacity 0.3s ease";
            img.style.opacity = index === 0 ? "1" : "0";
        });

        function startSlideshow() {
            // Immediately change image on first hover
            images[currentIndex].style.opacity = "0"; 
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.opacity = "1"; 

            // Start interval for subsequent changes
            interval = setInterval(() => {
                images[currentIndex].style.opacity = "0"; 
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.opacity = "1"; 
            }, 1500);
        }

        function stopSlideshow() {
            clearInterval(interval);

            // Reset to first image
            images.forEach(img => img.style.opacity = "0");
            currentIndex = 0;
            images[0].style.opacity = "1";
        }
 
        card.addEventListener("mouseenter", startSlideshow);
        card.addEventListener("mouseleave", stopSlideshow);
    });
});