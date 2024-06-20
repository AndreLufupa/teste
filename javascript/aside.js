document.querySelectorAll('.sidebar > ul > li > a').forEach(item => {
    item.addEventListener('click', event => {
        // Prevent the default action
        event.preventDefault();

        // Get the submenu of the clicked menu item
        let submenu = event.target.nextElementSibling;

        // If the submenu exists, toggle its visibility
        if (submenu) {
            submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        }
    });
});