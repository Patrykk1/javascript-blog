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
    optArticleTagsSelector = '.post - tags.list';
    optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages() {
        document.getElementById('messages').innerHTML = '';
    }

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

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

function generateTags() {
    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    for (let article of articles) {

        /* find tags wrapper */

        const tagsList = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */

        var html = '';

        /* get tags from data-tags attribute */

        const articleId = article.getAttribute('data-tags');

        const articleTags = article.querySelector(optArticleTagsSelector);
      
        /* split tags into array */

        const articleTagsArray = articleTags.split(' ');

        /* START LOOP: for each tag */

        for (let tag of articleTagsArray) {

            /* generate HTML of the link */

            var html = '<li><a href="#tag-cat">cat</a></li>';

            /* add generated code to html variable */

            var htmlElement = document.querySelector(optArticleTagsSelector);
            linkHTMLElement.insertAdjacentHTML('afterend', '<li><a href="#tag-cat">cat</a></li>')
        }
        /* END LOOP: for each tag */

        /* insert HTML of all the links into the tags wrapper */

        /* END LOOP: for every article: */
    }

}

function tagClickHandler(event) {
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = event.currentTarget;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = document.querySelector(href);

    /* find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('.post-tags a.active');

    /* START LOOP: for each active tag link */

    for (let tag of activeTagLinks) {

        /* remove class active */

        activeTagLinks.classList.remove('active');

        /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* START LOOP: for each found tag link */

    for (let tag of activeTagLinks) {

        /* add class active */

        tag.classList.add('active');

        /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
}



function addClickListenersToTags() {
    /* find all links to tags */

    const linkTags = document.querySelectorAll(activeTagLinks);

    /* START LOOP: for each link */

    for (let linkTags of activeTagLinks) {

        /* add tagClickHandler as event listener for that link */

        linkTags.addEventListener('click', titleClickHandler);

        /* END LOOP: for each link */
    }
}

function generateAuthors() {

    const author = document.querySelectorAll(optArticleAuthorSelector);

    for (let author of authors) {

        const authorId = article.getAttribute('data-author');

    }
}

function addClickListenersToAuthors() {

}

function authorClickHandler() {

}
