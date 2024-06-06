const openMenu = ()=>
{
    const ulMenu = document.querySelector("header nav ul");
    ulMenu.style.display = "block";
}

const closeMenu = ()=>
{
    const ulMenu = document.querySelector("header nav ul");
    ulMenu.style.display = "none";
}

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

let divMenuButton = document.querySelector("header nav div.menu");
divMenuButton.addEventListener("click", openMenu);

let closeMenuButton = document.querySelector("header nav ul span");
closeMenuButton.addEventListener("click", closeMenu);

window.addEventListener("resize", ()=>{
    if(document.documentElement.clientWidth > 375)
    {
        const ulMenu = document.querySelector("header nav ul");
        ulMenu.style.removeProperty("display");
    }

})