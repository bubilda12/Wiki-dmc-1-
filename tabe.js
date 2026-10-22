const tabs = document.querySelectorAll(".tab");

const content = document.querySelector(".content");

const heroCards = document.querySelectorAll(".heroes .card");
const enemyCards = document.querySelectorAll(".enemies .card");

const heroInfos = document.querySelectorAll(".hero-info");
const enemyInfos = document.querySelectorAll(".enemy-info");

const infos = document.querySelectorAll(".info");

const heroesBlock = document.querySelector(".heroes");
const enemiesBlock = document.querySelector(".enemies");

// ======================
// Переключение вкладок
// ======================

tabs.forEach(tab => {

    tab.addEventListener("click", function(){

        tabs.forEach(tab=>{
            tab.classList.remove("active");
        });

        this.classList.add("active");

        // Скрываем всю информацию
        infos.forEach(info=>{
        info.classList.remove("active");
        });

        if(this.dataset.tab === "heroes"){

            heroesBlock.classList.add("active");
            enemiesBlock.classList.remove("active");

            content.classList.remove("enemies-layout");
            content.classList.add("heroes-layout");

            heroCards.forEach(card=>{
                card.classList.remove("active");
            });

            heroCards[0].classList.add("active");
            heroInfos[0].classList.add("active");

        }else{

            enemiesBlock.classList.add("active");
            heroesBlock.classList.remove("active");

            content.classList.remove("heroes-layout");
            content.classList.add("enemies-layout");

            enemyCards.forEach(card=>{
                card.classList.remove("active");
            });

            enemyCards[0].classList.add("active");
            enemyInfos[0].classList.add("active");

        }

    });

});

// ======================
// Карточки персонажей
// ======================

heroCards.forEach((card,index)=>{

    card.addEventListener("click",function(){

        heroCards.forEach(card=>{
            card.classList.remove("active");
        });

        heroInfos.forEach(info=>{
            info.classList.remove("active");
        });

        this.classList.add("active");
        heroInfos[index].classList.add("active");

    });

});

// ======================
// Карточки врагов
// ======================

enemyCards.forEach((card,index)=>{

    card.addEventListener("click",function(){

        enemyCards.forEach(card=>{
            card.classList.remove("active");
        });

        enemyInfos.forEach(info=>{
            info.classList.remove("active");
        });

        this.classList.add("active");
        enemyInfos[index].classList.add("active");

    });

});