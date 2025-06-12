async function loadMenu() {
    try {
        const response = await fetch('templates/menu.html');
        const menuHtml = await response.text();
        const menuContainer = document.getElementById('menu-container');
        if (menuContainer) {
            menuContainer.innerHTML = menuHtml;
            // Dispatch an event to notify that the menu has been loaded
            menuContainer.dispatchEvent(new CustomEvent('menuLoaded'));
        }
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

// Load the menu when the page loads
document.addEventListener('DOMContentLoaded', loadMenu);

export { loadMenu };
