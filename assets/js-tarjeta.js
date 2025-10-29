const tarjeta = document.querySelector('.container');
const contenido = document.querySelector('.contenido');

tarjeta.addEventListener('mousemove', (e) => {
    const rect = tarjeta.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerY) / 20;

    contenido.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    contenido.style.transition = 'transform .1s ease'
});

tarjeta.addEventListener('mouselave', () => {
    contenido.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    contenido.style.transition = 'transform .3 ease';
});
