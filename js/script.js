// Always ensure your JS file is connected to your html
// Make sure to save your file after each edit with CMD + S
// Selecting DOM Elements
// Select an element by it's id attribute 
// document.getElementById()
// const titleEl = document.getElementById('title');
// document.querySelector()
const titleEl = document.querySelector('.main-title');
// querySelector will select the first element that matches the "query"
// querySelector will return the value of null is no match can be made
// Activity of selecting p tag with class of cool
const pEl = document.querySelector('.cool');
// Changing the content of our DOM elements
// textContent
pEl.textContent = 'This is a really cool paragraph';
// process everything as raw text
// innerHTML
pEl.innerHTML = 'This is a <strong>really cool</strong> paragraph';
// process everything as text and html 
// Change the style of a DOM element using the style property
titleEl.style.fontFamily = 'Helvetica';
titleEl.style.textAlign = 'center';
// Change the color of the p tag to a color of your choosing
pEl.style.color = '#41a4c2';
// Working with HTML attributes
/*
1) id
2) class
3) src
4) alt
5) href
*/
// how to add an attribute with Element.setAttribute()
pEl.setAttribute('id', 'first-paragraph');
/* 
    if(!someElement.hasAttribute('class')) { 
        someElement.setAttribute('class', 'someValue')
    }
*/
/*
✅ Add an <a>tag to index.html with content of "Visit Google" 
but without an href attribute.
✅ Reload the page and verify that the link 
does not work (in fact, it probably doesn't even look like a link).
✅ In the JS, write the line of code that will add an href
attribute that will make the link navigate to "https://www.google.com".
*/

// step 1) select the element
// step 1) select the element "aka caching the element"
const aEl = document.querySelector('a');
// step 2) set the element's href attribute using setAttribute
aEl.setAttribute('href', 'https://www.google.com'); 
aEl.setAttribute('href', 'https://www.google.com');


// Selecting multiple elements with querySelectorAll

// Let's select all of the elements with a class of comment


// console.dir(commentEls);

// Iterate over a collection of DOM elements

// Step 1) Make sure we've selected those element using
// querySelectorAll
const commentEls = document.querySelectorAll('.comment');

// Step 2) Use the built-in forEach, for loop, or a for...of loop

for(let commentEl of commentEls) {
    if(commentEl.textContent === 'first comment') {
        commentEl.style.color = 'dodgerblue';
    }
    // change the style property of the second comment 
    // based on it's textContent value
    if(commentEl.textContent === 'second comment') {
        commentEl.style.fontFamily = 'Helvetica';
        commentEl.style.color = 'rebeccapurple';
    }
} 