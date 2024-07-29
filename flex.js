const pictures = document.querySelectorAll('.picture');

const removeActiveClass = () => {
    pictures.forEach(item => {
        item.classList.remove('active');
    });
};

pictures.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        const activeItem = document.querySelector('.picture.active');
        if (activeItem && activeItem !== item) {
            activeItem.classList.remove('active');
        }
        item.classList.toggle('active');
    });
});

document.addEventListener('click', () => {
    removeActiveClass();
});
