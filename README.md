# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

# Mobile Preview

![screenshot](https://github.com/romila2003/Pricing-Component-with-Toggle/blob/main/Mobile%20preview.PNG)

# Mobile Preview - active

![screenshot](https://github.com/romila2003/Pricing-Component-with-Toggle/blob/main/Mobile%20preview%20-%20active.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/Pricing-Component-with-Toggle/blob/main/Desktop%20preview.PNG)

# Desktop Preview - active

![screenshot](https://github.com/romila2003/Pricing-Component-with-Toggle/blob/main/Desktop%20preview%20-%20active.PNG)

### Links

 - Source code: [https://github.com/romila2003/Pricing-Component-with-Toggle](https://github.com/romila2003/Pricing-Component-with-Toggle)
 - Live website: [https://romila-pricing-component-with-toggle.netlify.app/](https://romila-pricing-component-with-toggle.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS (SCSS)
- Flexbox
- Mobile-first workflow

### What I learned

In this project, I learned using multiple files with SASS to help with my organisation. It was quite difficult however I found help through stackflow and the SASS official website. Regarding the design for both mobile and desktop screen, recreating the design provided was fun and enjoyable. Also, postioning the `background-image` and sizing the image made me think about the best ways to position it accurately. In terms of the JS, this was fun and simple since it just required the `toggle` feature which I am now becoming really familiar with.
Javascript - Toggle: 

```js

circle.addEventListener("click", (e) => {
    e.preventDefault();

    circle.classList.toggle("toggleBtn");
    bg.classList.toggle("bg");
    
    for(let i = 0; i < price.length; i++) {
        price[i].classList.toggle("priceToggle");
    }
});

```

### Continued development

For future developments, I want to advance my current JS skills with using my current knowledge of JS and learning more concepts which I will then utilise within my projects. Also, I want to keep practicing using SASS to really familiarise myself with this preprocessor. Furthermore, I need to try web layouts to test my HTML and CSS skills.


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)

