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


    
    const mobile_menu_button = document.querySelector('.mobile-menu-button');
    const mobile_menu_close = document.querySelector('.mobile-menu-close');
    const mobile_level2_close = document.querySelector('.mobile-level2-close');
    const mobile_level3_close = document.querySelector('.mobile-level3-close');
    const menu = document.querySelector('.mobile-menu');
    const menulevel2 = document.querySelector('.mm-level2');
    const menulevel3 = document.querySelector('.mm-level3');

    mobile_menu_button.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
    mobile_menu_close.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
    mobile_level2_close.addEventListener('click', function() {
        menulevel2.classList.toggle('hidden');
    });
    mobile_level3_close.addEventListener('click', function() {
        menulevel3.classList.toggle('hidden');
    });
    

    const menuItems = document.querySelectorAll('.mm-level1 > li');

    menuItems.forEach(item => {
        const item2 = item.querySelector('span');
        item2.addEventListener('click', function() {
        const subMenu = item.querySelector('.mm-level2');
        if (subMenu) {
          subMenu.classList.toggle('hidden');
        }
      });
    });

    const menuItems2 = document.querySelectorAll('.mm-level2 .mobile-menu-content > ul > li');

    menuItems2.forEach(item => {
        const item2 = item.querySelector('span');
        item2.addEventListener('click', function() {
        const subMenu = item.querySelector('.mm-level3');
        if (subMenu) {
          subMenu.classList.toggle('hidden');
        }
      });
    });

});
