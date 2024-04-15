const moveHireMeButton = ()=>
{
    let hireMeButton = window.document.querySelector("header button");
    hireMeButton.classList.add("top-0");
    hireMeButton.classList.add("opacity-1")
}

const moveNavLinks = ()=>
{
    let linksList = window.document.querySelector("header ul");
    linksList.classList.add("left-0");
}

const setClassToPageHeader = (className)=>
{
    let header = window.document.querySelector("header");
    header.classList.remove("disappear-header");
    header.classList.remove("appear-header");
    header.classList.add(className); 
}

// Global Run:
moveHireMeButton();
moveNavLinks();

let lastKnownYPosition = window.scrollY;
document.addEventListener("scroll", ()=>
{
    let newYPositon = window.scrollY;
    if((lastKnownYPosition - newYPositon) < -150)
    {
        setClassToPageHeader("disappear-header");
        lastKnownYPosition = newYPositon;
    }
    else if((lastKnownYPosition - newYPositon) > 150)
    {
        setClassToPageHeader("appear-header");
        lastKnownYPosition = newYPositon;
    }
    
})