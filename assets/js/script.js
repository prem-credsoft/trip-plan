document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const submenu = item.querySelector('.submenu');
        
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.submenu').forEach(sub => {
                if (sub !== submenu) {
                    sub.style.display = 'none';
                }
            });
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
            submenuItems.forEach(sub => sub.style.display = 'none');
            submenuItems[index].style.display = 'flex';
        });
    });


    
    const mobile_menu_button = document.querySelector('.mobile-menu-button');
    const mobile_search_button = document.querySelector('.mobile-search');
    
    const mobile_menu_close = document.querySelector('.mobile-menu-close>.close-btn');
    const mobile_menu_back = document.querySelector('.mobile-menu-close>.back-btn');
    mobile_menu_back.addEventListener('click', function(){
    let v3 = false;
        const mmLevel3Elements = document.querySelectorAll('.mm-level3');
        mmLevel3Elements.forEach(element => {
        if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
            v3 = true;
        }
        });

        if(v3 != true){
            const mmLevel2Elements = document.querySelectorAll('.mm-level2');
            mmLevel2Elements.forEach(element => {
            if (!element.classList.contains('hidden')) {
                element.classList.add('hidden');
            }
            });
        }
    });


    const mobile_level2_close = document.querySelector('.mobile-level2-close');
    const mobile_level3_close = document.querySelector('.mobile-level3-close');
    const menu = document.querySelector('.mobile-menu');
    const mobile_search_modal = document.querySelector('.mobile-search-modal');
    const menulevel2 = document.querySelector('.mm-level2');
    const menulevel3 = document.querySelector('.mm-level3');

    mobile_search_button.addEventListener('click', function() {
        document.querySelector('.mobile-search-icon').classList.toggle('hidden');
        document.querySelector('.mobile-search-close').classList.toggle('hidden');
        mobile_search_modal.classList.toggle('hidden');
    });
    mobile_menu_button.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
    });
    mobile_menu_close.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        // menulevel2.classList.toggle('hidden');
        // menulevel3.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
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
