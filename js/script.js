'use strict';
const titleClickHandler = function (event) {
    event.preventDefault();
    
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    
    const clickedElement = event.currentTarget;

    clickedElement.classList.add('active')
    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */

    const href = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */

    const article = document.querySelector(href);

    /* add class 'active' to the correct article */

    article.classList.add('active');
}


  

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks() {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages() {
        document.getElementById('messages').innerHTML = '';
    }

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
        /* get the article id */

        const articleId = article.getAttribute('id');

        console.log('articles:', articles);

        /* find the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* get the title from the title element */


        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        console.log('link.HTML:', linkHTML);

        /* insert link into titleList */

        var linkHTMLElement = document.querySelector(optTitleListSelector);
        linkHTMLElement.insertAdjacentHTML('afterend', '<li><a href="#' + articleId + '"><span>')

    }


    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }

    console.log(links);

}

generateTitleLinks();
