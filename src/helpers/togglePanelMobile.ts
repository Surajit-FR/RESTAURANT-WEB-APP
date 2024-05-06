export const togglePanelMobile = (isPanelMobileOpen: boolean, setIsPanelMobileOpen: Function) => {
    // Toggle panel-mobile class
    const panelMobile = document.getElementById("panel-mobile");
    if (panelMobile) {
        panelMobile.classList.toggle("show");
    }

    // Toggle body-overlay1 style
    const bodyOverlay = document.getElementById("body-overlay1");
    if (bodyOverlay) {
        bodyOverlay.style.display = isPanelMobileOpen ? "none" : "block";
    }

    // Toggle state
    setIsPanelMobileOpen(!isPanelMobileOpen);
};