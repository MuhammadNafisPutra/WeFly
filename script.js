document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    function highlightNavOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150; 
            let sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    const searchForm = document.getElementById('flight-search-form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departureDate = document.getElementById('departure-date').value;
        
        if (!to || !departureDate) {
            alert('Silakan isi Tujuan dan Tanggal Keberangkatan Anda!');
        } else {
            const message = `Penerbangan dari ${from} ke ${to} pada tanggal ${departureDate} Tersedia`;
            alert(message);
        }
    });
    
    const date = new Date();
    const year = date.getFullYear();
    
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    const today = `${year}-${month}-${day}`;
    
    document.getElementById('departure-date').setAttribute('min', today);
    document.getElementById('return-date').setAttribute('min', today);
});