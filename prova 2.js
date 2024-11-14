// Initialize counters for tracking activities
let clickCount = 0;
let mouseMoveCount = 0;
let scrollCount = 0;

// Consent button handler
document.getElementById("consent-button").addEventListener("click", () => {
    // Hide consent screen and display tracking info section
    document.getElementById("consent-screen").style.display = "none";
    document.getElementById("data-info").style.display = "block";

    // Start tracking mouse movements, clicks, and scrolls
    startTracking();
});

// Function to start tracking user activity
function startTracking() {
    // Track mouse movements
    document.addEventListener("mousemove", (event) => {
        // Create a heatmap dot at the mouse location
        const heatmapDot = document.createElement("div");
        heatmapDot.className = "heatmap-dot";
        heatmapDot.style.left = `${event.pageX}px`;
        heatmapDot.style.top = `${event.pageY}px`;
        document.body.appendChild(heatmapDot);

        // Remove the dot after 1 second
        setTimeout(() => {
            heatmapDot.remove();
        }, 1000);

        // Update mouse movement count and display
        mouseMoveCount++;
        document.getElementById("mouse-moves").textContent = `👆 Total Mouse Movements: ${mouseMoveCount}`;
    });

    // Track clicks
    document.addEventListener("click", () => {
        clickCount++;
        document.getElementById("clicks").textContent = `🖱️ Total Clicks: ${clickCount}`;
    });

    // Track scrolls
    document.addEventListener("scroll", () => {
        scrollCount++;
        document.getElementById("scrolls").textContent = `🔄 Total Scrolls: ${scrollCount}`;
    });
}
