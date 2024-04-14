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