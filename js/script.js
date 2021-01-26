window.onload = () => {

    let headerImg = document.querySelector('.header-content');

    // console.log(window.getComputedStyle(headerImg, null).getPropertyValue('background-image'));


    //header carousel code....
    let rBtn = document.querySelector('#right-btn');//right button by id
    let lBtn = document.querySelector('#left-btn');//left button by id
    let li = document.querySelectorAll('.header-content-shape ul li');//all li in header-content-shape div
    let count = 0;//start position of our count index
    li[count].classList.add("shape-activ");//set class to first li element

    //right button listening
    rBtn.addEventListener('click', (elem) => {
        elem.preventDefault();//remove default behavior of a-link
        count++; //plus count after new click event
        if (count > li.length - 1) {
            count = 0;
        }
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("shape-activ");
        }
        li[count].classList.add("shape-activ");
    });
    //left button listening
    lBtn.addEventListener('click', (elem) => {
        elem.preventDefault();//remove default behavior of a-link
        count--;//minus count after new click event
        if (count < 0) {
            count = li.length - 1;
        }
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("shape-activ");
        }
        li[count].classList.add("shape-activ");
    });

    //end of header carousel code....

    // start of portfolio slider

    let portfolioLeftBtn = document.querySelector('#porfolio-btn-left');//left button of portfolio
    let portfolioRightBtn = document.querySelector('#porfolio-btn-right');//right button of portfolio
    let portfolioCounter = 0;//counter set 0
    let portfolioCards = document.querySelectorAll('.portfolio-cards a');//get all of portfolio cards
    let offsetCard = 0;//offset of card set 0

    //get portfolio cards wrapper width
    let portfolioCardsViewWidth = document.querySelector('.portfolio-cards');
    portfolioCardsViewWidth = getComputedStyle(portfolioCardsViewWidth).getPropertyValue('width');//get width of portfolio cards div width
    let marginAllCardsSum = portfolioCards.length * 240 + 'px';// get all length of cards with margin
    let lastPosition = marginAllCardsSum.replace(/[^-0-9]/gim, '') - portfolioCardsViewWidth.replace(/[^-0-9]/gim, '') - 20;//set last position to mrgin
    lastPosition = "-" + lastPosition + "px";

    portfolioLeftBtn.style.pointerEvents = "none";//disable to left click when starting programm

    //listening to click ivent of left button
    portfolioLeftBtn.addEventListener('click', elem => {
        elem.preventDefault();                                                  //disable default behavior of button link 
        portfolioCounter--;                                                     //after each click counter --
        portfolioCards[0].style.marginLeft = "-" + portfolioCounter * 240 + "px"; //after each click first element move to left side
        offsetCard = portfolioCards[0].style.marginLeft;                        //checking to margin left of first card
        if (offsetCard === "0px") {
            portfolioLeftBtn.style.pointerEvents = "none";
        } else {
            portfolioRightBtn.style.pointerEvents = "auto";
        }
    });//end of left btn listening

    //Listening to click of rigth button
    portfolioRightBtn.addEventListener('click', elem => {
        elem.preventDefault();                                                  //disable default behavior of button link
        portfolioCounter++;                                                     //after each click counter ++
        portfolioCards[0].style.marginLeft = "-" + portfolioCounter * 240 + "px";
        offsetCard = portfolioCards[0].style.marginLeft;
        if (offsetCard === lastPosition) {
            portfolioRightBtn.style.pointerEvents = "none";
        } else {
            portfolioLeftBtn.style.pointerEvents = "auto";
        }
    });//end of right btn listening

    // end of portfolio slider

    //start of hidden menu show
    let showBtn = document.querySelector('.menu-show-hidden');//get the button of menu
    let hiddenMenu = document.querySelector('.menu-hidden-vertical');//get the hidden vertical menu
    let subHiddenMenu = document.querySelector('.menu-show-horisontal');//get the button hidden submenu
    let hiddenMenuHor = document.querySelector('.menu-hidden-horisontal');//get the hidden horisonatal menu

    showBtn.addEventListener('mouseover', () => {
        if (hiddenMenu.style.display = "none") {
            hiddenMenu.style.display = "block";
        }

        
        showBtn.addEventListener('mouseout', () => {
            if (hiddenMenu.style.display = "block") {
                hiddenMenu.style.display = "none";
            }
        });
    }, false);//end of btn events listening

    subHiddenMenu.addEventListener('mouseover', () => {
        if (hiddenMenuHor.style.display = "none") {
            hiddenMenuHor.style.display = "block";
        }

        subHiddenMenu.addEventListener('mouseout', () => {
            if (hiddenMenuHor.style.display = "block") {
                hiddenMenuHor.style.display = "none";
            }
        });
    });

    //end of hidden menu show




    // start of visibility modal message FORM
    let modalVisibility = document.querySelector('.send-modal');
    let form = document.getElementById("contact-form");
    // let formModal = document.createElement('div');
    // formModal.classList.add("send-modal-n");
    // document.body.appendChild(formModal);
    // formModal.insertAdjacentHTML("afterbegin", `<p>Hello world</p>`);

    let closeOperation = () => {
        modalVisibility.style.opacity = 0;
        modalVisibility.style.visibility = "hidden";
    };

    let buttonInput = document.querySelector("input[type=button]").addEventListener('click', elem => {
        elem.preventDefault();
        modalVisibility.style.visibility = "visible";
        modalVisibility.style.opacity = 1;
        setTimeout(closeOperation, 4000);
        if (getComputedStyle(modalVisibility).getPropertyValue("visibility") === "visible") {
            let closeBtn = document.querySelector(".modal-header>span").addEventListener("click", () => {
                modalVisibility.style.opacity = 0;
                modalVisibility.style.visibility = "hidden";
            });
        }
    });
    // end of visibility modal message FORM
    



};// end of onload function