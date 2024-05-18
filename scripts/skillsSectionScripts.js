const setHightOfTheSkillsSectionToAuto = ()=>
{
    let dvh = window.innerHeight;
    let skillsSection = document.querySelector("section#skills");
    let skillsSectionHeight = skillsSection.clientHeight;
    if(skillsSectionHeight > dvh)
    {
        skillsSection.style.height = "auto";
    }
}

const CreateSkill = (name, projectsQunatity, icon, iconColor)=>
{
    return {
        name,
        projectsQunatity,
        icon,
        iconColor,
        generateHTMLSkillCard()
        {
            let htmlCode = `
                <div class="skill-card">
                    <div class="skill-info">
                    <div class="skill-info-text-container">
                            <p class="name">
                                ${this.name}
                            </p>
                            <p class="projects-num">
                                ${this.projectsQunatity > 1 ? this.projectsQunatity + " Projects" : this.projectsQunatity + " Project"}
                            </p>
                    </div>
                    </div>
                    <div class="skill-photo ${this.iconColor}">
                        ${this.icon}
                    </div>
                </div>
            `;

            return htmlCode;
        },

        addSkillCardToSkillSection()
        {
            let skillSection = document.querySelector("section#skills");
            skillSection.insertAdjacentHTML("beforeend", this.generateHTMLSkillCard());
        }
    };
}

let html = CreateSkill("HTML", 4, `<i class="fa-brands fa-html5"></i>`, "html-color");
let css = CreateSkill("CSS", 4, `<i class="fa-brands fa-css3-alt"></i>`, "css-color");
let js = CreateSkill("JS", 2, `<i class="fa-brands fa-js"></i>`, "js-color");
let java = CreateSkill("Java", 2, `<i class="fa-brands fa-java"></i>`, 'java-color');
let python = CreateSkill("Python", 1, `<i class="fa-brands fa-python"></i>`, "python-color");
let git = CreateSkill("Git", 7, `<i class="fa-brands fa-git-alt"></i>`, "git-color");
let sqlite = CreateSkill("SQLite", 
                        3, 
                        `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 512 228" id="sqlite">` +
                        `<defs><linearGradient id="a" x1="57.662%" x2="57.662%" y1="2.046%" y2="94.439%"><stop offset="0%" stop-color="#97D9F6"></stop><stop offset="92.024%" stop-color="#0F80CC"></stop><stop offset="100%" stop-color="#0F80CC"></stop></linearGradient>`+
                        `</defs><path fill="#003B57" d="M194.52 112.044c-6.821 0-12.368 2.02-16.62 6.055-4.251 4.04-6.408 9.335-6.408 15.824 0 3.362.535 6.428 1.59 9.237 1.056 2.815 2.699 5.423 4.907 7.78 2.208 2.358 6.628 5.561 13.215 9.635 8.084 4.934 13.373 8.939 15.912 12.066 2.54 3.124 3.801 6.398 3.801 9.812 0 4.57-1.504 8.219-4.597 10.961-3.097 2.744-7.24 4.11-12.375 4.11-5.417 0-10.136-1.909-14.188-5.7-4.052-3.798-6.098-8.821-6.144-15.117h-2.52v22.851h2.52c.77-2.164 1.834-3.27 3.227-3.27.67 0 2.24.461 4.685 1.325 5.949 2.117 10.834 3.138 14.674 3.138 6.617 0 12.266-2.317 16.972-7.027 4.7-4.708 7.072-10.387 7.072-17.017 0-5.14-1.566-9.715-4.64-13.701-3.075-3.992-9.054-8.635-17.99-13.967-7.689-4.62-12.68-8.382-14.983-11.315-2.307-2.929-3.492-6.169-3.492-9.724 0-3.845 1.413-6.934 4.199-9.238 2.786-2.305 `+
                        `6.437-3.447 11.006-3.447 5.14 0 9.426 1.526 12.817 4.597 3.388 3.076 5.347 7.339 5.923 12.817h2.52v-19.8h-2.343c-.287 1.009-.552 1.654-.796 1.944-.237.288-.693.442-1.37.442-.815 0-2.268-.343-4.332-1.017-4.42-1.488-8.495-2.254-12.243-2.254zm82.342 0c-8.311 0-15.857 1.96-22.674 5.879-6.828 3.912-12.233 9.345-16.221 16.265-3.987 6.92-5.967 14.268-5.967 22.1 0 10.52 3.444 19.894 10.387 28.11 6.946 8.21 15.27 13.326 24.928 15.293 2.208 1.15 5.367 4.12 9.503 8.928 4.66 5.425 8.603 9.338 11.845 11.668a35.592 35.592 0 0 0 10.43 5.172c3.7 1.126 7.699 1.68 12.023 1.68 5.237 0 9.925-.911 14.055-2.785l-.928-2.299c-2.397.865-4.954 1.282-7.646 1.282-3.655 0-7.348-1.205-11.05-3.624-3.697-2.426-8.32-7.053-13.834-13.879-2.592-3.27-4.381-5.334-5.393-6.143 10.568-2.064 19.257-7.185 26.034-15.382 6.774-8.192 10.165-17.542 10.165-28.022 0-12.442-4.427-22.9-13.215-31.425-8.796-8.527-19.612-12.818-32.442-12.818zm51.403 0l.133 2.696c5.533 0 8.633 1.63 9.326 4.906.258 1.173.376 3.337.397`+
                        ` 6.453l-.044 59.625c-.046 4.453-.68 7.296-1.9 8.53-1.222 1.225-3.287 1.993-6.276 2.298l-.133 2.697h55.16l1.415-13.525h-2.52c-.72 3.684-2.369 6.324-4.994 7.823-2.633 1.51-7.288 2.254-14.011 2.254h-5.216c-6.05 0-9.55-2.187-10.475-6.586-.19-.87-.256-1.803-.265-2.828l.22-60.288c0-4.446.561-7.425 1.725-8.884 1.175-1.453 3.295-2.266 6.364-2.475l-.132-2.696h-28.774zm-50.52 3.27c9.375 0 17.028 3.693 22.94 11.139 5.91 7.449 8.84 17.658 8.84 30.586 0 12.25-2.972 22.058-8.928 29.436-5.957 7.376-13.884 11.05-23.735 11.05-9.464 0-17.139-3.789-23.028-11.403-5.884-7.615-8.795-17.501-8.795-29.658 0-12.492 2.947-22.492 8.884-29.967 5.933-7.466 13.878-11.182 23.823-11.182zm126.852 12.819c-1.346 0-2.371.454-3.138 1.37-.785.912-1.026 2.017-.752 3.359.265 1.302 1 2.442 2.166 3.403 1.16.96 2.411 1.459 3.757 1.459 1.301 0 2.293-.499 3.005-1.459.713-.96.93-2.101.663-3.403-.274-1.342-.983-2.447-2.077-3.36-1.107-.915-2.323-1.37-3.624-1.37zm36.375 9.149c-2.286 8.794-7.241 13.553-14.85 14.32l.088 2.52h8.884l-.177 29.79c.014 5.093.17 8.484.53 10.21.876 4.131 3.574 6.232 8.089 6.232 6.533 0 13.385-3.98 20.552-11.934l-2.165-1.856c-5.175 5.238-9.75 7.867-13.746 7.867-2.456 0-3.978-1.412-4.5`+
                        `53-4.199-.157-.677-.22-1.468-.22-2.387l.088-33.723h13.569l-.133-4.023h-13.392v-12.817h-2.564zm52.464 11.226c-7.59 0-13.763 3.685-18.563 11.006-4.775 7.333-6.253 15.458-4.376 24.398 1.105 5.236 3.306 9.294 6.674 12.154 3.363 2.86 7.629 4.288 12.73 4.288 4.748 0 11.36-1.203 14.143-3.625 2.79-2.42 5.36-6.342 7.735-11.712l-1.9-1.99c-3.788 6.968-11.43 10.476-17.194 10.476-7.924 0-12.777-4.348-14.586-12.995a31.614 31.614 0 0 1-.53-3.536c9.427-1.492 16.571-4.135 21.392-7.955 4.818-3.823 9.655-7.875 8.752-12.155-.538-2.544-1.858-4.544-3.89-6.055-2.058-1.511-7.4-2.299-10.387-2.299zm-82.96.31l-16.354 3.757v2.917l5.657-.707c2.74 0 4.353 1.24 4.862 3.712.171.827.28 1.99.31 3.448l-.178 26.74c-.045 3.7-.456 5.851-1.281 6.497-.833.647-3.029.973-6.586.973l-.088 2.519h25.944l-.044-2.52c-3.605 0-5.942-.284-6.983-.84-1.024-.55-1.73-1.555-2.033-3.093-.235-1.108-.338-3.018-.354-5.657l.089-37.746h-2.962zm78.806 4.95c1.579 0 3.104.61 4.64 1.812 1.516 1.198 2.439 2.53 2.741 3.978 1.48 7.11-4.823 12.024-19.006 14.762-.404-5.183.494-9.89 2.785-14.143 2.274-4.25 5.235-6.409 8.84-6.409z"></path><path fill="#0F80CC" d="M157.888 9.952H17.15C7.717 9.952 0 17.67 0 27.102V182.31c0 9.432 7.717 17.15 17.15 17.15h92.693c-1.052-46.122 14.698-135.63 48.045-189.508z"></path><path fill="url(#a)" d="M152.775 14.955H17.15c-6.698 0-12.148 5.449-12.148 12.148v143.883c30.716-11.788 76.817-21.96 108.693-21.498 6.406-33.494 25.232-99.134 39.08-134.533z"></path><path fill="#003B57" d="M190.715 4.872c-9.639-8.595-21.31-5.143-32.827 5.08-1.71 1.518-3.416 3.203-5.113 5.003-19.704 20.903-37.994 59.62-43.676 89.19 2.214 4.489 3.943 10.217 5.081 14.593.292 1.122.555 2.176.766 3.072.5 2.122.769 3.497.769 3.497s-.177-.668-.902-2.77c-.138-.403-.292-.843-.474-1.361a15.78 15.78 0 0 0-.304-.752c-1.285-2.988-4.84-9.294-6.405-12.04a300.723 300.723 0 0 0-3.511 10.983c4.517 8.265 7.27 22.429 7.27 22.429s-.239-.918-1.374-4.122c-1.008-2.833-6.027-11.628-7.216-13.684-2`+
                        `.034 7.509-2.842 12.578-2.113 13.812 1.415 2.391 2.762 6.518 3.946 11.081 2.673 10.28 4.53 22.796 4.53 22.796s.06.83.162 2.106c-.372 8.633-.149 17.584.52 25.674.885 10.71 2.552 19.91 4.677 24.834l1.443-.786c-3.12-9.701-4.388-22.414-3.833-37.076.84-22.41 5.997-49.437 15.526-77.606 16.1-42.523 38.436-76.641 58.879-92.935-18.633 16.828-43.851 71.297-51.4 91.467-8.453 22.588-14.443 43.784-18.053 64.092 6.229-19.039 26.368-27.222 26.368-27.222s9.877-12.182 21.42-29.586c-6.914 1.577-18.268 4.277-22.071 5.875-5.61 2.353-7.121 3.156-7.121 3.156s18.17-11.066 33.76-16.076c21.44-33.768 44.799-81.74 21.276-102.724"></path></svg>`
                        , 
                        "");

let skills = [html, css, js, java, python, git, sqlite];

const isSkillsSectionOverFlow = ()=>
{
    let skillsSection = document.querySelector("section#skills");
    let skillsSectionHeight = skillsSection.clientHeight;
    let skillsSectionContentHeight = skillsSection.scrollHeight;
    return (skillsSectionHeight < skillsSectionContentHeight);
}

const removeLastSkillFromSkillsSection = ()=>
{
    let skillsSection = document.querySelector("section#skills");
    let allSkillCards = skillsSection.querySelectorAll("div.skill-card");
    let lastSkillCard = allSkillCards[allSkillCards.length-1];
    console.log(lastSkillCard);
    lastSkillCard.remove();
    
}

const seeMore = ()=>
{
    let skillsSection = document.querySelector("section#skills");
    let skillsSectionHight = skillsSection.clientHeight;
    console.log({skillsSectionHight})
    skillsSection.remove();

    let skillsSectionElement = document.createElement("section");
    skillsSectionElement.setAttribute("id", "skills");
    skillsSectionElement.addEventListener("click", (evn)=> filteringProjectsFromSkillsSection(evn));
    let homeSection = document.querySelector("section#home");
    homeSection.insertAdjacentElement('afterend', skillsSectionElement);

    let dvh = window.innerHeight;
    console.log({dvh})
    skillsSectionElement.style.height = (skillsSectionHight + dvh) + "px";
    addSkillsToTheDOM();
    setHTMLAndBodyHeight();
}

const addMoreButtonToSkillsSection = ()=> // --------------------[More]--------------------
{
    let moreButtonHTMLText = `<button class="more-button more-skills">more skills</button>`;

    let skillsSection = document.querySelector("section#skills");
    skillsSection.insertAdjacentHTML("beforeend" ,moreButtonHTMLText);

    let moreButton = document.querySelector("button.more-skills");
    moreButton.addEventListener('click', seeMore);
}

const addSkillsToTheDOM = ()=>
{
    let index = 0;
    while(!isSkillsSectionOverFlow() && (index < skills.length))
    {
        skills[index].addSkillCardToSkillSection();
        index++;
    }

    if(isSkillsSectionOverFlow())
    {
        removeLastSkillFromSkillsSection();
        addMoreButtonToSkillsSection();
    }
    else
    {
        setHightOfTheSkillsSectionToAuto();
    }
}

addSkillsToTheDOM();

window.addEventListener("resize", ()=>
{
    location.reload();
})

// Working with skills Section click functionality for each skill

const getTheParagraphNameOfSkill = (target)=>
{
    let newTarget = target;
    if(target.nodeName == "SECTION"){return};
    if(target.nodeName == "P")
    {
        newTarget = target.parentElement; 
    }

    let skillParagraphName = newTarget.querySelector("p.name");
    return skillParagraphName;
}

const moveToPortfolioSection = ()=>
{
    window.location.href = "index.html#portfolio";
}

const filteringProjectsFromSkillsSection = (evn)=>
{
    let evnTarget = getTheParagraphNameOfSkill(evn.target);
    if(!evnTarget){return}
    repleaceTheFilterTitleToChoosenSkill(evnTarget);
    appearTheProjectsBuiltOnTheSkill(evnTarget);
    moveToPortfolioSection();
}

let skillsSection = document.querySelector("section#skills");
skillsSection.addEventListener("click", (evn)=> filteringProjectsFromSkillsSection(evn))