const elementos = document.querySelectorAll('.banners');

const observer = new IntersectionObserver((registros) => {
    registros.forEach(registro => {
        if (registro.isIntersecting) {
            registro.target.classList.add('active');
        }
    });
},
{
    threshold: 0.2
});

elementos.forEach(el => observer.observe(el));