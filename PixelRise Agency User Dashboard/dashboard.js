document.addEventListener("DOMContentLoaded", () => {
    const eyebrow = document.querySelector(".eyebrow");
    const today = new Date();

    if (eyebrow) {
        eyebrow.textContent = `Updated ${today.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })}`;
    }

    console.log("✅ PixelRise Agency Dashboard Loaded Successfully");
});