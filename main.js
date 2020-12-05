// For Preloader
window.addEventListener('load',function(){
    document.querySelector('.pre-loader').classList.add('hidePreLoader')
});

// For Reviews

// Array of Objects

const reviewSlider = [
    {
        id:1,
        image:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'avika sree',
        text:`I'm baby bicycle rights meggings plaid, portland roof party aesthetic glossier VHS`
    },

    {
        id:2,
        image:'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'adrian twarog',
        text:`VHS artisan gluten-free, lumbersexual tbh deep v cornhole direct trade`
    },

    {
        id:3,
        image:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'suchitra saxena',
        text:`Four dollar toast 3 wolf moon crucifix, DIY asymmetrical food truck skateboard prism`
    },

    {
        id:4,
        image:'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'niharika konidela',
        text:`Distillery post-ironic bitters marfa waistcoat ennui. Hella street art bushwick enamel`
    },

    {
        id:5,
        image:'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'mouni roy',
        text:`activated charcoal beard fingerstache scenester tattooed ethical yr air plant hella`
    },

    {
        id:6,
        image:'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'angel arna',
        text:`Tbh nulla prism letterpress ennui vexillologist semiotics ullamco butcher`
    },
];

console.log(reviewSlider);
// returns nodeObject

console.log(reviewSlider.length);

// First we should select image , name ,text, prev and next buttons.

// Selecting the elements
const image = document.getElementById('person-image');
console.log(image);

const textPerson = document.getElementById('text');
console.log(textPerson);

const studentName = document.getElementById('name');
console.log(studentName);

const previousButton = document.querySelector('.prev-btn');
console.log(previousButton);

const nextButton = document.querySelector('.next-btn');
console.log(nextButton);

// Global variable
let currentItem = 0;

// When ever the window loads complete HTML Document,
window.addEventListener('DOMContentLoaded',function(){
    // console.log('Hello');

    // Call back function as referance
    showDetails();
});

// Ananymous function
function showDetails(){
    const item = reviewSlider[currentItem];

    image.src = item.image;
    studentName.textContent = item.name;
    textPerson.textContent = item.text;
}

// prevPerson
previousButton.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviewSlider.length -1;
    }

    showDetails();
})

// nextPerson
nextButton.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviewSlider.length -1){
        currentItem = 0;
    }
    showDetails();
});

// For Common Questions

const articleList = document.querySelectorAll('.question');

// console.log(articleList);
// returns nodeValue

// Array Iteration Method
articleList.forEach(function(art){
    // console.log(art);

    const btn= art.querySelector('.question-button');
    // console.log(btn);

    btn.addEventListener('click',function(){
        articleList.forEach(function(item){
            // console.log(item);

            if(item !== art){
                item.classList.remove('show-answer');
            }
            
        });

        art.classList.toggle('show-answer');
    });
});
