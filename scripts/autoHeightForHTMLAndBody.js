const setHTMLAndBodyHeight = ()=>
{
    let htmlElement = document.querySelector("html");
    let body = document.querySelector("body");
    let deepPointInPage = document.body.scrollHeight;
    htmlElement.style.height = deepPointInPage + "px";
    body.style.height = deepPointInPage + "px";
}

setHTMLAndBodyHeight();