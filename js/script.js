'use strict';
const titleClickHandler = function (event) {
    event.preventDefault();
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */

    /* add class 'active' to the clicked link */

    /* remove class 'active' from all articles */

 const activeArticles = document.querySelectorAll('.titles a.post active');

 for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
 }

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}

const activeLinks = document.querySelectorAll('.titles a.active');

for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
}

  /* [IN PROGRESS] add class 'active' to the clicked link */

  /* [DONE] remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
    
const clickedElement = document.querySelectorAll('.titles a.active');

for (let activeLink of activeLinks) {
    activeLink.classList.add('active');
}

console.log('clickedElement:', clickedElement);

const articleSelector = document.querySelectorAll('.href');

const move = element.getElementById('articleSelector').getAttribute('.href');

console.log('articleSelector:', articleSelector);

const targetArticle = document.querySelector('href');

consol.log('targetArticle:', targetArticle);

for (let targetArticle of targetArticles) {
    activeLink.classList.add('active');
}
