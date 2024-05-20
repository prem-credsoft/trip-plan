document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const submenu = item.querySelector('.submenu');
        
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Close any open submenus
            document.querySelectorAll('.submenu').forEach(sub => {
                if (sub !== submenu) {
                    sub.style.display = 'none';
                }
            });
            // Toggle the clicked submenu
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close the submenu if clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-item')) {
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.style.display = 'none';
            });
        }
    });

    // This is for second submenu in menu
    const subnavItems = document.querySelectorAll('.sub-nav-item');
    const submenuItems = document.querySelectorAll('.submenu2-item');

    subnavItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Hide all submenu items
            submenuItems.forEach(sub => sub.style.display = 'none');

            // Show the corresponding submenu item
            submenuItems[index].style.display = 'flex';
        });
    });
});
