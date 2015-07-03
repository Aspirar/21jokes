/*global JOKES*/

(function () {
    'use strict';
    
    window.addEventListener('load', function () {
        var homePageOuter = document.getElementById('home-page-outer'),
            goButton = document.getElementById('go-button'),
            navPage = document.getElementById('nav-page'),
            navPageOuter = document.getElementById('nav-page-outer'),
            navItems,
            jokePagesOuter = document.getElementsByClassName('joke-page-outer'),
            jokeNumbers = document.getElementsByClassName('joke-number-2'),
            jokeTitles = document.getElementsByClassName('joke-title-2'),
            jokeContents = document.getElementsByClassName('joke-content'),
            doneButtons = document.getElementsByClassName('done-button'),
            navItemNode,
            jokeNumberNode,
            jokeTitleNode,
            i;
        
        for (i = 0; i < JOKES.length; i += 1) {
            navItemNode = document.createElement('section');
            navItemNode.classList.add('nav-item');
            jokeNumberNode = document.createElement('section');
            jokeNumberNode.classList.add('joke-number');
            jokeTitleNode = document.createElement('section');
            jokeTitleNode.classList.add('joke-title');
            jokeNumberNode.innerHTML = i + 1;
            jokeTitleNode.innerHTML = JOKES[i].title;
            navItemNode.appendChild(jokeNumberNode);
            navItemNode.appendChild(jokeTitleNode);
            navPage.appendChild(navItemNode);
            
            jokeNumbers[i].innerHTML = i + 1;
            jokeTitles[i].innerHTML = JOKES[i].title;
            jokeContents[i].innerHTML = JOKES[i].content;
        }
        navItems = document.getElementsByClassName('nav-item');
        
        function navItemsHandlers(i) {
            navItems[i].addEventListener('click', function () {
                navPageOuter.classList.add('outer-page-hidden');
                jokePagesOuter[i].classList.remove('outer-page-hidden');
            });
        }
        
        function doneButtonHandlers(i) {
            doneButtons[i].addEventListener('click', function () {
                jokePagesOuter[i].classList.add('outer-page-hidden');
                navPageOuter.classList.remove('outer-page-hidden');
            });
        }
        
        goButton.addEventListener('click', function (event) {
            homePageOuter.classList.add('outer-page-hidden');
            navPageOuter.classList.remove('outer-page-hidden');
        });

        for (i = 0; i < navItems.length; i += 1) {
            navItemsHandlers(i);
        }
        for (i = 0; i < doneButtons.length; i += 1) {
            doneButtonHandlers(i);
        }
        
        goButton.classList.add('go-button-visible');
    });
}());
