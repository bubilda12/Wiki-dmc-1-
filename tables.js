document.querySelectorAll('.pers').forEach(persBlock => {
    // Находим блок с картинкой персонажа
    const characterWeap = persBlock.querySelector('.pers__weap');
    
    // Находим контейнер с оружием
    const itemBlock = persBlock.querySelector('.weapons__items');

    if (characterWeap && itemBlock) {
        characterWeap.addEventListener('click', () => {
            // Если скрыто — открываем главный контейнер вертикально
            if (itemBlock.style.display === 'none' || itemBlock.style.display === '') {
                itemBlock.style.display = 'flex';
                itemBlock.style.flexDirection = 'column'; // Карточки оружия идут сверху вниз
                itemBlock.style.gap = '15px';             // Расстояние между строками оружия
            } else {
                // Если открыто — скрываем обратно
                itemBlock.style.display = 'none';
            }
        });
    }
});