const question = document.querySelector('.question');
const ingredient1 = document.querySelector('.ingredient1')
const ingredient2 = document.querySelector('.ingredient2')
const ingredient3 = document.querySelector('.ingredient3')
const ingredient4 = document.querySelector('.ingredient4')
let pick = null;
let randomDish = null;
let randomDishNumber = null;
let correctIngredients = [];
let incorrectIngredients = [];
let choicesArray = []
let scoreCount = 0;
const score = document.querySelector('.score')
const questionNum = document.querySelector('.questionNum');
currentQuestion = 0;

//the ingredients are added to an array here
const ingredientsArray = [
    'onions', 'green beans', 'bell peppers', 'chives', 'basil', 'beansprouts', 'tomato',
    'garlic', 'fermented garlic', 'green onion', 'chinese broccoli', 'cucumber',
    'green leaf lettuce', 'broccoli', 'carrots', 'potato', 'dried shrimp', 'fish ball / fish tofu',
    'crispy garlic', 'crispy fried onion', 'spicy pickled mustard greens', 'lime',
    'peanuts', 'marinated pickled mustard greens', 'ground chicken', 'ground pork', 'rice', 'vinegar',
    'egg', 'bean thread noodles', 'thin rice noodles', 'fish sauce', 'shredded papaya',
    'shredded carrot'
]
//the dishes are defined here
const papayaSaladThaiStyle = {
    question: 'Which of these ingredients is in the papaya salad thai style?',
    ingredients: ['shredded papaya', 'tomato', 'shredded carrot', 'green beans', 'dried shrimp', 'lime', 'garlic']
}

const yellowCurry = {
    question: 'Which of these ingredients is in yellow curry?',
    ingredients: ['potato', 'carrots', 'onions']
}

const panangCurry = {
    question: 'Which of these ingredients is in panang curry?',
    ingredients: ['broccoli', 'carrots', 'bell peppers']
}

const holyBasil = {
    question: 'Which of these ingredients is in holy basil?',
    ingredients: ['green beans', 'bell peppers', 'basil', 'onions', 'ground chicken', 'garlic', 'ground pork']
}

const garlicStirfry = {
    question: 'Which of these ingredients is in the garlic stirfry?',
    ingredients: ['broccoli', 'cucumber', 'crispy garlic', 'green onion']
}

const popPopFriedRice = {
    question: 'Which of these ingredients is in the pop pop fried rice?',
    ingredients: ['rice', 'onions', 'tomato', 'chinese broccoli', 'cucumber', 'lime', 'green onion', 'egg']
}

const padThai = {
    question: 'Which of these ingredients is in pad thai?',
    ingredients: ['lime', 'peanuts', 'chives', 'beansprouts', 'egg', 'thin rice noodles']
}

const woonsenPadThai = {
    question: 'Which of these ingredients is in woonsen pad thai?',
    ingredients: ['bean thread noodles', 'lime', 'peanuts', 'beansprouts', 'chives']
}

const padSeeEw = {
    question: 'Which of these ingredients is in pad see ew?',
    ingredients: ['egg', 'chinese broccoli', 'vinegar']
}

const padKeeMao = {
    question: 'Which of these ingredients is in pad kee mao?',
    ingredients: ['onions', 'green beans', 'bell peppers', 'basil', 'tomato', 'vinegar', 'egg']
}

const garlicChickenNoodle = {
    question: 'Which of these ingredients is in garlic chicken noodle?',
    ingredients: ['green leaf lettuce', 'green onion', 'crispy garlic', 'egg', 'fish sauce', 'vinegar']
}
//the dishes are added to an array here
const dishes = [
    papayaSaladThaiStyle, yellowCurry, panangCurry, holyBasil, garlicStirfry, popPopFriedRice, padThai, woonsenPadThai, padSeeEw, padKeeMao, garlicChickenNoodle
]
//random dish picking function
function pickRandomDish(){
    randomDishNumber = Math.floor(Math.random() * dishes.length);
    randomDish = dishes[randomDishNumber];
    
    for(i=0;i<ingredientsArray.length;i++){
        incorrectIngredients.push(ingredientsArray[i]);
    }
    for(i = 0; i < randomDish.ingredients.length; i++){
        let ingredientPick = ingredientsArray.filter(ing => ing == `${randomDish.ingredients[i]}`);
        correctIngredients.push(ingredientPick);
        incorrectIngredients = incorrectIngredients.filter(ingredientPick => ingredientPick !== `${randomDish.ingredients[i]}`)
    }
}
const playBtn = document.querySelector('.playButton');
//random question picking function
function pickQuestion(){
    /*if(currentQuestion > 2){
        console.log('you have made it to the end of the game')
        console.log('you got ' + scoreCount + ' correct')
        removeListeners();
        playBtn.classList.remove('hidden')
        return
    }*/
    currentQuestion++;
    questionNum.innerText = currentQuestion
    question.innerText = randomDish.question;

    let ingredientsPick = Math.floor(Math.random() * correctIngredients.length);
    let firstIngredient = correctIngredients[ingredientsPick];
    choicesArray.push(firstIngredient);
    
    let ingredientsPick2 = Math.floor(Math.random() * incorrectIngredients.length);
    let secondIngredient = incorrectIngredients[ingredientsPick2]
    choicesArray.push(secondIngredient);
    
    let ingredientsPick3 = Math.floor(Math.random() * incorrectIngredients.length);
    let thirdIngredient = incorrectIngredients[ingredientsPick3];
    choicesArray.push(thirdIngredient);
    
    let ingredientsPick4 = Math.floor(Math.random() * incorrectIngredients.length);
    let fourthIngredient = incorrectIngredients[ingredientsPick4];
    choicesArray.push(fourthIngredient);
    
    randomChoice1 = Math.floor(Math.random() * choicesArray.length);
    ingredient1.innerText = choicesArray[randomChoice1];
    choicesArray.splice(randomChoice1, 1);
    randomChoice2 = Math.floor(Math.random() * choicesArray.length);
    ingredient2.innerText = choicesArray[randomChoice2];
    choicesArray.splice(randomChoice2, 1);
    randomChoice3 = Math.floor(Math.random() * choicesArray.length)
    ingredient3.innerText = choicesArray[randomChoice3];
    choicesArray.splice(randomChoice3, 1);
    ingredient4.innerText = choicesArray[0];    
}

pickRandomDish();
pickQuestion();
addListeners();

function addListeners(){
    ingredient1.addEventListener('click', checkAnswer);
    ingredient2.addEventListener('click', checkAnswer);
    ingredient3.addEventListener('click', checkAnswer);
    ingredient4.addEventListener('click', checkAnswer);
}

function removeListeners(){
    ingredient1.removeEventListener('click', checkAnswer);
    ingredient2.removeEventListener('click', checkAnswer);
    ingredient3.removeEventListener('click', checkAnswer);
    ingredient4.removeEventListener('click', checkAnswer);
}


function checkAnswer(){
    console.log('check the answer');
    removeListeners();
    checkIt = this.innerText;
    
    console.log(checkIt);
    console.log(correctIngredients);
    for(i=0;i<correctIngredients.length;i++){
        if(checkIt == correctIngredients[i]){
            this.style.backgroundColor = 'green'
            setTimeout(() => {
                correctAnswer();
                this.style.backgroundColor = 'white'
                
                if(currentQuestion > 25){
                    console.log('you have made it to the end of the game')
                    console.log('you got ' + scoreCount + ' correct')
                    question.innerText = 'you got ' + scoreCount + ' correct';
                    ingredient1.innerText = ''
                    ingredient2.innerText = ''
                    ingredient3.innerText = ''
                    ingredient4.innerText = ''
                    questionNum.innerText = ''
                    playBtn.classList.remove('hidden')
                    playBtn.addEventListener('click', restartGame)
                    return    
                }
                addListeners();
                //console.log("Delayed for 1 second.");
            }, 1000)
            return
        }
    }
    this.style.backgroundColor = 'red'
    setTimeout(() => {
        incorrectAnswer();
        this.style.backgroundColor = 'white'
        if(currentQuestion > 25){
            console.log('you have made it to the end of the game')
            console.log('you got ' + scoreCount + ' correct')
            question.innerText = 'you got ' + scoreCount + ' correct';
            ingredient1.innerText = ''
            ingredient2.innerText = ''
            ingredient3.innerText = ''
            ingredient4.innerText = ''
            questionNum.innerText = ''
            playBtn.classList.remove('hidden')
            playBtn.addEventListener('click', restartGame)
            return
        }
        addListeners();
    }, 1000)
}

function restartGame(){
    playBtn.classList.add('hidden');
    currentQuestion = 0;
    scoreCount = 0;
    score.innerText = scoreCount;
    checkIt = null;
    randomDish = null;
    correctIngredients = [];
    incorrectIngredients = [];
    choicesArray = [];
    pickRandomDish();
    pickQuestion();
    addListeners();
}

function correctAnswer(){
    console.log('that is a correct ingredient')
    scoreCount++
    score.innerText = scoreCount;
    checkIt = null;
    randomDish = null;
    randomDishNumber = null;
    correctIngredients = [];
    incorrectIngredients = [];
    choicesArray = []
    pickRandomDish();
    pickQuestion();
}

function incorrectAnswer(){
    console.log('that is not right');
    checkIt = null;
    randomDish = null;
    randomDishNumber = null;
    correctIngredients = [];
    incorrectIngredients = [];
    choicesArray = []
    pickRandomDish();
    pickQuestion();
    return
}