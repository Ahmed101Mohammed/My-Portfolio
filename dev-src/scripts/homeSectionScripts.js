const setHomeSectionPostion = ()=>
{
    let y = window.scrollY;
    if(y >= 1000)
    {
        let home = document.querySelector("section#home");
        home.style.position = "relative";
        home.style.top = "1000px";
    }
}

setHomeSectionPostion()

const moveSlider = ()=>
{
    const moveSlider = document.querySelector("#home div.slider");
    moveSlider.style.left = "0px";
    moveSlider.style.opacity = "1";
}
moveSlider();

const resizeview = ()=>
{
    const homeSection = document.querySelector("section#home");
    let view = document.querySelector("#home div.view");
    let allImagesInView = view.querySelectorAll("img");

    const viewWidth = view.getBoundingClientRect().width;
    const viewHeight = view.getBoundingClientRect().height;
    const homeSectionHeight = homeSection.getBoundingClientRect().height;
    let viewNewHeight = (viewWidth*737)/507;
    let viewNewWidth = (viewHeight*507)/737;

    homeSection.style.removeProperty("grid-template-columns");
    if(viewNewHeight < homeSectionHeight)
    {
        view.style.height = viewNewHeight + "px";
        allImagesInView.forEach((node)=> node.style.height = viewNewHeight + "px");
    }
    else
    {
        view.style.width = viewNewWidth + "px";
        homeSection.style.gridTemplateColumns = "auto " + viewNewWidth +"px";
    }
    const viewNowWidth = view.getBoundingClientRect().width;
    allImagesInView.forEach((node)=> node.style.width = viewNowWidth + "px");

    const imgWidth = allImagesInView[0].getBoundingClientRect().width;
    const imgHeight = allImagesInView[0].getBoundingClientRect().height;
}

resizeview();

window.addEventListener("resize", resizeview);
const viewWidth = document.querySelector("#home .view").getBoundingClientRect().width;
let viewElement = document.querySelector("#home div.view");
const imgs = [{path:"./images/ahmed1.jpg", alt: "Photo for me with a blue cute, and I setdown on the garder of pediatric hospital."}, 
                {path:"./images/ahmed3.jpg", alt: "Photo for one side of me accourding I move box of food to help people."}, 
                {path:"./images/ahmed2.jpg", alt: "Phot for me with a blue cute, and in the time I look at the camera, in the same pediatric hospital garden."}
            ];
let viewImgIndex = 0;
let oldestImg;
setInterval(()=>{
    viewImgIndex = (viewImgIndex+1)%3;
    let  allImges = document.querySelectorAll("#home .view img");
    let currentImg = allImges[allImges.length-1];
    let newImg = document.createElement("img");
    newImg.src = imgs[viewImgIndex].path;
    newImg.alt = imgs[viewImgIndex].alt;
    newImg.style.left = viewWidth +"px";
    newImg.style.width = viewWidth +"px";
    viewElement.appendChild(newImg);
    setTimeout(()=>{
        currentImg.style.left = "-" + viewWidth + "px";
        newImg.style.left = "0px";
    },500)
    
    if(viewElement.childNodes.length > 2)
    {
        viewElement.childNodes[2].remove();
    }

},8000)

addEventListener("scroll",()=>
{
    if(window.scrollY > 1000)
    {
        document.querySelector("section#home").style.top = "1000px";
        document.querySelector("section#home").style.position = "relative";
    }
    if(window.scrollY < 1000)
    {
        document.querySelector("section#home").style.top = "0px";
        document.querySelector("section#home").style.position = "sticky";
    }
})

// Green Screen Animated pehevior with scrolling.
const greenScreenRandomStatus = ()=>
{
    let greenScreen = document.querySelector("#home div.introduction");
    let scrollDown = document.querySelector("#home div.introduction div.scroll-down");
    let information = document.querySelector("#home div.introduction div.information");

    if(window.scrollY > 0 && window.scrollY < 300 && !(((window.scrollY/300)*100)<20))
    {
        information.style.removeProperty("display");
        scrollDown.style.removeProperty("display");
        greenScreen.style.width = `${(window.scrollY/300)*100}%`;
        greenScreen.style.height = `${(window.scrollY/300) * 100}%`;
        scrollDown.style.opacity = `${1-(window.scrollY/300)}`;
    }
    else if (window.scrollY >= 300)
    {
        
        greenScreen.style.width = `100%`;
        greenScreen.style.height = `100%`;
        scrollDown.style.display = "none";
        information.style.display = "block";
    }
    else
    {
        greenScreen.style.removeProperty("width");
        greenScreen.style.removeProperty("height");
        // greenScreen.style.removeProperty("opacity");
        scrollDown.style.removeProperty("display");
        information.style.removeProperty("display");
    }
}
addEventListener("scroll", greenScreenRandomStatus);
greenScreenRandomStatus();

// Information behavior with scrolling:
const myInfo = ["My name is Ahmed Al-3adl", 
                    "I'm a software developer | Fullstack dev.", 
                    "Some one who interested in many aspects in programming field.",
                    "Some of this aspects are: Web development, Low level programming and Console Apps",
                    "Enjoy in my portfolio."];

let lastAddedCharOrder = 0;
const createInformativeParagraph = ()=>
{
    let informativeParagraph = document.createElement("p");
    informativeParagraph.classList.add("informative-paragraph");
    return informativeParagraph;
}

const addParagraphToGreenScreen = (paragraphElement)=>
{
    let informationArea = document.querySelector("#home div.introduction div.information");
    informationArea.appendChild(paragraphElement);
}

const getLastParagraphInGreenScreen = ()=>
{
    let informationAreaParagraphs = document.querySelectorAll("#home div.introduction div.information p");
    return informationAreaParagraphs.length>0 ? informationAreaParagraphs.item(informationAreaParagraphs.length-1) : false;
}

const removeLastParagraphFromGreenScreen = ()=>
{
    let lastParagraph = getLastParagraphInGreenScreen();
    lastParagraph.remove();
}

const getChar = (charOrder)=>
{
    let counter = charOrder;
    for(let string of myInfo)
    {
        if(string.length < counter)
        {
            counter -= string.length;
            continue;
        }

        let fixedCounter = counter;
        for(let i = 0; i < fixedCounter; i++)
        {
            if(fixedCounter === 1)
            {
                return [string[i], true];
            }
            else if(counter === 1)
            {
                return [string[i], false];
            }
            counter--;
        }
    }
}

const addCharToTheInformativeArea = (charOrder)=>
{
    const char = getChar(charOrder);
    if(char[1])
    {
        let newParagraph = createInformativeParagraph();
        addParagraphToGreenScreen(newParagraph);
        newParagraph.textContent += char[0];
    }
    else 
    {
        let lastParagraphInGreenScreen = getLastParagraphInGreenScreen();
        lastParagraphInGreenScreen.textContent += char[0];
    }
}

const removeLastCharFromInformativeArea = ()=>
{
    let lastParagraph = getLastParagraphInGreenScreen();
    let paragraphContent = lastParagraph.textContent;
    let paragraphWithoutLastChar = paragraphContent.substr(0, paragraphContent.length -1);
    lastParagraph.textContent = paragraphWithoutLastChar;
    if(lastParagraph.textContent.length === 0)
    {
        removeLastParagraphFromGreenScreen();
    }
}
let setNighnty = 0;
let ms = 8;
const addMultiChars = (startCharOrder, lastCharOrder)=>
{
    for(let i = startCharOrder; i <= lastCharOrder; i++)
    {
        setNighnty += ms;
        setTimeout(()=>{
            addCharToTheInformativeArea(i);
            if(setNighnty !== 0)
            {
                setNighnty-= ms;
            } 
        }, setNighnty);
    }
}

const removeMultiChars = (numberOfChars)=>
{
    
    for(let i = 0; i < numberOfChars; i++)
    {
        setNighnty += ms;
        setTimeout(()=>{
            removeLastCharFromInformativeArea();
            if(setNighnty !== 0)
            {
                setNighnty-= ms;
            } 
        }, setNighnty);
    }
}

const getMessagesFullLength = ()=>
{
    let length = 0;
    for(let str of myInfo)
    {
        length += str.length;
    }
    return length;
}

const printMyInfo = (numberOfChars)=>
{
    if(numberOfChars > lastAddedCharOrder)
    {
        let start = lastAddedCharOrder + 1;
        let end = numberOfChars;
        lastAddedCharOrder = numberOfChars;
        addMultiChars(start, end);
    }
    else if(numberOfChars < lastAddedCharOrder)
    {
        let numberOfNeededRemoveChars = lastAddedCharOrder - numberOfChars;
        lastAddedCharOrder = numberOfChars;
        removeMultiChars(numberOfNeededRemoveChars);
    }
}

const informationProgress = ()=>
{
    if(window.scrollY > 300 & window.scrollY <= 850)
    {
        let numberOfWontedChars = ((scrollY - 300)/550) * getMessagesFullLength();
        numberOfWontedChars = Math.trunc(numberOfWontedChars);
        printMyInfo(numberOfWontedChars);        
    }
    else if(window.scrollY > 850)
    {
        printMyInfo(getMessagesFullLength());
    }
}
document.addEventListener("scroll", informationProgress);
informationProgress();

// Social pannel appearance
const socialPannelPosition = ()=>
{
    let socialPannel = document.querySelector("#home div.introduction div.social");
    if(window.scrollY <= 850)
    {
        socialPannel.style.removeProperty("display");
    }
    else if(window.scrollY > 850 && window.scrollY < 1000)
    {
        socialPannel.style.display = "flex";
        let leftPosition = -(((1000-window.scrollY)/150)*100);
        socialPannel.style.left = leftPosition+"%";
    }
    else if(window.scrollY > 1000)
    {
        socialPannel.style.display = "flex";
        socialPannel.style.left = "0%";
    }
}

document.addEventListener("scroll", socialPannelPosition);
// Introduction initial position:
const introductionPosition = ()=>
{
    let introduction = document.querySelector("#home div.introduction");
    introduction.style.opacity = "1";
}
introductionPosition()