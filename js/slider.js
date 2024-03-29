// Общая переменная для всех изображений
var imgs = ['imgSlider/1.jpg','imgSlider/2.jpg','imgSlider/3.jpg','imgSlider/4.jpg','imgSlider/5.jpg','imgSlider/6.jpg','imgSlider/7.jpg','imgSlider/8.jpg','imgSlider/9.jpg','imgSlider/10.jpg']

// Количество картинок которое будет отображаться на экране
// Главное, чтобы количество в общей переменной для всех изображений, могло делиться без остатка на это число
var numbersOfImages = 2;
// Получения данных из div'ов
var prev = document.getElementById('prev')
var now = document.getElementById('now')
var next = document.getElementById('next')
var circlesCoinatiner = document.getElementById('circles')
// Количество круглешков, которые должны отображаться взависимости от количества "Объединённых слайдов"
var howMuchCr = imgs.length /numbersOfImages;
// Переменные кнопок Right/Left
const prevBTN = document.getElementById('PrevBtn')
const nextBTN = document.getElementById('NextBtn')
//Ширина картинок
const widthImgs = 300;

// С какой по ID картинки начинается перебор картинок
var beginingImg = 0;

// Переменная для всех круглешков
var circles = [];

// Нужна для того, чтобы добавить картинки в NOW сразу же после загрузки страницы
for(let i = 0; i < numbersOfImages;i++){
    let elem = document.createElement('img');
    elem.setAttribute('src',imgs[i + beginingImg]);
    elem.setAttribute('id',imgs[i + beginingImg])
    now.appendChild(elem)
}
// Функция чтобы добавить необходимое количество кругляшков.
addCircles()
// Движение вправо
function addPrev(nextIMG){
    let checkWork = 0;
    for(let i = 0; i < numbersOfImages;i++){
        imgsLength = now.getElementsByTagName('img').length;
        let prevImg
        let prevSrcImg
        let findIMG
        if(nextIMG !== undefined){
            findIMG=nextIMG * numbersOfImages+numbersOfImages-1;
            let prevElem = document.createElement('img');
            prevElem.setAttribute('src',imgs[findIMG]);
            let id = Math.random()
            prevElem.setAttribute('id',id);
            now.prepend(prevElem)
            nextIMG = undefined;
        } else{
            prevImg = now.children[0].getAttribute('src');
            prevSrcImg = imgs.findIndex((src) => src === prevImg);
            if(prevSrcImg - 1 === -1){
                prevSrcImg = imgs.length-1;
            } else{
                prevSrcImg -= 1;
            }
            let nextElem = document.createElement('img');
            nextElem.setAttribute('src',imgs[prevSrcImg]);
            let id = Math.random()
            nextElem.setAttribute('id',id);
            now.prepend(nextElem);
           checkWork++;
        }   
    }
    if (checkWork === numbersOfImages){
        addActiveCircle('prev');
        checkWork = 0
    } else{
        checkWork = 0
    }
    anima('prev');
}
// Движение влево
function addNext(nextIMG){
    let checkWork = 0;
    for(let i = 0; i < numbersOfImages;i++){
        imgsLength = now.getElementsByTagName('img').length;
        let nextImg
        let nextSrcImg
        if(nextIMG !== undefined){
            let findIMG = nextIMG * numbersOfImages;
            let nextElem = document.createElement('img');
            nextElem.setAttribute('src',imgs[findIMG]);
            let id = Math.random()
            nextElem.setAttribute('id',id);
            now.append(nextElem)
            nextIMG = undefined;
        } else{
            nextImg = now.children[imgsLength-1].getAttribute('src');
            nextSrcImg = imgs.findIndex((src) => src === nextImg);
            if(nextSrcImg + 1 > imgs.length-1){
                nextSrcImg = 0;
            } else{
                nextSrcImg += 1;
            }
            let nextElem = document.createElement('img');
            nextElem.setAttribute('src',imgs[nextSrcImg]);
            let id = Math.random()
            nextElem.setAttribute('id',id);
            now.append(nextElem);
           checkWork++;
        }        
    }
    if (checkWork === numbersOfImages){
        addActiveCircle('next');
        checkWork = 0
    } else{
        checkWork = 0
    }
    anima('next');
   
}
// Данная функция в зависимости движения next/prev удаляет или первые/последние сколько-то там картинок
function deleteEl(direction){    
    if(direction === 'prev'){
        for(let i = 0; i < numbersOfImages;i++){
            imgsLength = now.getElementsByTagName('img').length;
        let removeImg = document.getElementById(now.children[imgsLength-1].getAttribute('id'));
        removeImg.remove()
        }
    }else if(direction === 'next'){
        for(let i = 0; i < numbersOfImages;i++){
            imgsLength = now.getElementsByTagName('img').length;
        let removeImg = document.getElementById(now.children[0].getAttribute('id'));
        removeImg.remove()
        }
    }
   
}
// Эта функция в зависимости от направления next/prev добавляет margin left/right для блоков prev/next
function anima(direction){
    let start = Date.now();
    if(direction == 'next'){
        let timer = setInterval(function() {
            nextBTN.style.pointerEvents = 'none';
            prevBTN.style.pointerEvents = 'none';
            circles.forEach((circle) => circle.style.pointerEvents = 'none');
        let timePassed = Date.now() - start;
        next.style.marginRight = ((-numbersOfImages * widthImgs) + (timePassed / 1)) + 'px';

        if (timePassed >= ((numbersOfImages * widthImgs)*2)) {
            clearInterval(timer) 
            nextBTN.style.pointerEvents = 'all';
            prevBTN.style.pointerEvents = 'all';
            circles.forEach((circle) => circle.style.pointerEvents = 'all');
            deleteEl('next')
            next.style.marginRight = 0 + 'px';
        };

        }, 1);
    }
    else if(direction == 'prev'){
        let timer = setInterval(function() {
            nextBTN.style.pointerEvents = 'none';
            prevBTN.style.pointerEvents = 'none';
            circles.forEach((circle) => circle.style.pointerEvents = 'none');
        let timePassed = Date.now() - start;
        prev.style.marginLeft = ((-numbersOfImages * widthImgs + 20) + (timePassed / 1)) + 'px';

        if (timePassed >= ((numbersOfImages * widthImgs)*2)) {
            clearInterval(timer) 
            nextBTN.style.pointerEvents = 'all';
            prevBTN.style.pointerEvents = 'all';
            circles.forEach((circle) => circle.style.pointerEvents = 'all');
            deleteEl('prev')
            prev.style.marginLeft = 0 + 'px';
        };

        }, 1);
    }
}
// Функция для создания круглешка
function createCircles(){
    const divCircle = document.createElement('div');
    divCircle.className = 'circle';
    circlesCoinatiner.appendChild(divCircle);
    circles.push(divCircle);
}
// Просто функция которая создаёт кружки снизу в зависимости от количества слайдов, которое равно Общее число слайдов / количество отображаемых слайдов
function addCircles(){
    for(let ch = 0; ch < howMuchCr; ch ++){
        createCircles()
    }
    circles.forEach((circle,index) => {
        circle.addEventListener('click', () => changeSlide(index));
    })
    circles[beginingImg].classList.add('active-circle');
}
// Данная функция работает только при том, что количество изображений равно 1, и позволяет переключаться между слайдами по нажатию на кружки
function changeSlide(index){
    if(beginingImg === index){
        console.log('Тот же самый');
    } else{
        if(beginingImg > index){
            circles[beginingImg].classList.remove('active-circle');
            beginingImg = index
            circles[beginingImg].classList.add('active-circle');
            addPrev(index)
        } else{
            circles[beginingImg].classList.remove('active-circle');
            beginingImg = index;
            circles[beginingImg].classList.add('active-circle');
            addNext(index)
        }
        
    }
}
// Данная функция нужна для добавления эффекта active для выбранного круглешка
function addActiveCircle(direction){    
    if(direction === 'next'){
        circles[beginingImg].classList.remove('active-circle');
        beginingImg++;
        if(beginingImg > circles.length-1){
            beginingImg = 0
        }
        circles[beginingImg].classList.add('active-circle');
    } else if(direction === 'prev'){
        circles[beginingImg].classList.remove('active-circle');
        beginingImg--;
        if(beginingImg < 0){
            beginingImg = circles.length-1
        }
        circles[beginingImg].classList.add('active-circle');
    }
    
}
// Функция для добавления полос справа и слева, в которые прячуться появляющиеся изображения
function widthBlack(){
    let leftBlack = document.getElementById('buttonHoverPrev');
    let rightBlack = document.getElementById('buttonHoverNext');
    leftBlack.style.width ='calc(50vw - ' + (160 *numbersOfImages) + 'px)'
    rightBlack.style.width ='calc(50vw - ' + (160 *numbersOfImages) + 'px)'
}

widthBlack();