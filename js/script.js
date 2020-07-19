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

console.log('targetArticle:', targetArticle);

for (let targetArticle of targetArticles) {
    activeLink.classList.add('active');
}

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {

    /* remove contents of titleList */

    const titleList = document.querySelector('optTitleListSelector');

    function clearMessages() {
        document.getElementById('messages').innerHTML = 'optTitleListSelector';
    }

    /* for each article */

    const articles = document.querySelectorAll('optArticleSelector');

    for (let articles of optArticleSelector) {
        consol.log('articles:', articles);
    }

    /* get the article id */

    const articleId = document.querySelector('id');

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */


    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    console.log('link.HTML:', linkHTML);

    /* insert link into titleList */

    var d1 = document.getElementById('linkHTML');
    d1.insertAdjacentHTML('afterend', '<li><a href="#' + articleId + '"><span>')

}

generateTitleLinks();


