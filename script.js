// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const filterButtons = document.querySelectorAll('.filter-btn');
const galleriaItems = document.querySelectorAll('.galleria-item');

if (filterButtons.length > 0 && galleriaItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Rimuovi classe active da tutti i bottoni
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Aggiungi active al bottone cliccato
            this.classList.add('active');
            
            // Filtra gli elementi
            galleriaItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
}


fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        
        let currentPage = window.location.pathname.split('/').pop();
        
        if (currentPage === '' || currentPage === '/') {
            currentPage = 'index.html';
        }

        document.querySelectorAll('.nav-menu a').forEach(link => {
            const linkHref = link.getAttribute('href');

            link.classList.remove('active');

            if (linkHref === currentPage) {
                link.classList.add('active');
            }
        });
    });

// Carica Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

    