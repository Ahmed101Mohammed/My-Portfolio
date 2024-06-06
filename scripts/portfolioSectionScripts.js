// AutoMate the generation of drop-down filter options.
const autoSkillsOptionsGeneratorForFilter = ()=>
{
    const dropDownBody = document.querySelector("section#portfolio div.body ul");
    for(skill of skills)
    {
        let liHTMLcode = `<li>${skill.name}</li>`;
        dropDownBody.insertAdjacentHTML('beforeend', liHTMLcode);
    }
}
autoSkillsOptionsGeneratorForFilter();
// -------
const setHightOfThePortfolioSectionToAuto = ()=>
{
    let dvh = window.innerHeight;
    let portfolioSection = document.querySelector("section#portfolio");
    let portfolioSectionHeight = portfolioSection.clientHeight;
    if(portfolioSectionHeight > dvh)
    {
        portfolioSection.style.height = "auto";
    }
}

const CreateProjectCard = (photo, photoDiscription, gitHubRepoUrl, name, discription, skills, projectLivePageUrl)=>
{

    return{
        photo,
        photoDiscription,
        gitHubRepoUrl,
        name,
        discription,
        skills,
        projectLivePageUrl,
        getHTMLCodeOfTheCard()
        {
            const htmlCode = 
            `
                <a class="project-live-demo" target="_blank" href="${this.projectLivePageUrl}">
                    <div class="project-card">
                        <div class="photo">
                            <img src="${this.photo}" alt="${this.photoDiscription}"> 
                        </div>

                        <div class="info">
                            <a class="repo" href="${this.gitHubRepoUrl}" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a>

                            <div class="discritpion">
                                <p class="name">${this.name}</p>
                                <p class="discription">${this.discription}</p>
                            </div>

                            <ul class="skills-tags">
                                ${this.createListItemsForEachSkill(this.skills)}
                            </ul>
                        </div>
                    </div>
                </a>
            `;
            return htmlCode;
        },
        createListItemsForEachSkill(skills)
        {
            let htmlCode = "";
            for(let skill of skills)
            {
                htmlCode += `<li>${skill}</li>
                            `;
            }

            return htmlCode;
        },
        addTheCardToTheProjectsContainer()
        {
            let projectsContainer = document.querySelector("div.projects");
            projectsContainer.insertAdjacentHTML('beforeend', this.getHTMLCodeOfTheCard());
        }
    }
};

const myPortfolio = CreateProjectCard("./images/portfolio-project-photo.png",
    "Project photo: containt image for the main page of the project, and it contain header, and nav bar, with personal photo.",
    "https://github.com/Ahmed101Mohammed/My-Portfolio", "My-Portfolio", "My main portfolio projoct, as a software developer.",
    ["HTML", "CSS", "JS", "Git"], "https://my-portfolio-7jkt.onrender.com/");

const lunchSite = CreateProjectCard("./images/LunchSite.png", 
    "Project photo: containt image for the main page of the project, and it contain white header, And Rocket logo, And the project is made with puple theme.",
        "https://github.com/Ahmed101Mohammed/product-landing-page", "LunchSite", "Product-landing-page project for building site service.",
        ["HTML", "CSS", "Git"], "https://ahmed101mohammed.github.io/product-landing-page/");


const techDocumentation = CreateProjectCard("./images/tech-documentation.png", 
    "Project photo: containt image for the introduction part of the documentation, it's look basic with side navigation bar.",
    "https://github.com/Ahmed101Mohammed/technical-documentation-page", "Technical Documentation Page.",
    "Technical documentaion page to learn fundamentals of programming with JS.", ["HTML", "CSS", "Git"], 
    "https://ahmed101mohammed.github.io/technical-documentation-page/");

const myTasks = CreateProjectCard("./images/to-do-app.png",
    "Project photo: contain image for the single page to-do app, and it's contain a header and side bar with plus sign to add new to-do list, and in the body of the project page, you can see number of default lists that already created by the me.",
    "https://github.com/Ahmed101Mohammed/to-do-Llst-dynamic", "My Tasks",
    "Basic dynamic to-do list app.",
    ["HTML", "CSS", "JS", "Git"], "https://ahmed101mohammed.github.io/to-do-Llst-dynamic/");

const trackAchievements = CreateProjectCard("./images/track_achievements.png",
    "It's just image for the projecr repository in GitHub.", 
    "https://github.com/Ahmed101Mohammed/track-achievements", "Track Achievements", 
    "Track your daily achievements to know your real productivity and progress. Here where you will see the real value of your habits.",
    ["Java", "SQLite", "Git"], "#");


const VegStore = CreateProjectCard("./images/VegStore.png", "It's just image for the projecr repository in GitHub.",
    "https://github.com/Ahmed101Mohammed/VegStore", "VegStore",
    "Application for a vegetable store with a static known number of Items to make a selling process with recording and give a receipt for the client.",
    ["Java", "SQLite", "Git"], "#");

const progressTracker = CreateProjectCard("./images/progress_tracker.png", "It's just image for the projecr repository in GitHub.",
    "https://github.com/Ahmed101Mohammed/progress-tracker", "Progress Tracker", "Progress-tracker application. to follow your goals progress.",
    ["Python", "SQLite", "Git"], "#");

const projects = [myPortfolio, lunchSite, techDocumentation, myTasks, trackAchievements, VegStore, progressTracker];

const isProjectsContainerisOverFlow = ()=>
{
    let projectsContainer = document.querySelector("section#portfolio div.projects");
    let projectsContainerHeight = projectsContainer.clientHeight;
    let projectsContainerContentHeight = projectsContainer.scrollHeight;
    return (projectsContainerHeight < projectsContainerContentHeight);
}

const removeLastProjectsFromProjectsContainer = ()=>
{
    let projectsContainer = document.querySelector("section#portfolio div.projects");
    let allProjectsCardsAnchors = projectsContainer.querySelectorAll("a.project-live-demo");
    let allProjectsCards = projectsContainer.querySelectorAll("div.project-card");
    let lastProjectCardAnchor = allProjectsCardsAnchors[allProjectsCardsAnchors.length-1];
    let lastProjectCard = allProjectsCards[allProjectsCards.length -1];

    console.log(lastProjectCardAnchor, lastProjectCard);
    lastProjectCard.remove();
    lastProjectCardAnchor.remove();
    
}

const seeMoreProjects = (projects)=>
{
    let portfolioSection = document.querySelector("section#portfolio");
    let portfolioSectionHight = portfolioSection.clientHeight;
    console.log({portfolioSectionHight})

    let projectsContainer = document.querySelector("section#portfolio div.projects");
    projectsContainer.remove();

    let projectsContainerElement = document.createElement("div");
    projectsContainerElement.setAttribute("class", "projects");

    let portfolio = document.querySelector("section#portfolio");
    portfolio.insertAdjacentElement('beforeend', projectsContainerElement);

    let dvh = window.innerHeight;
    console.log({dvh})
    portfolioSection.style.height = (portfolioSectionHight + dvh) + "px";
    addProjectsToTheDom(projects);
    setHTMLAndBodyHeight();
}

const addMoreButtonToProjectsContainer = (projects)=> // --------------------[More]--------------------
{
    let moreButtonHTMLText = `<button class="more-button more-projects">more projects</button>`;

    let projectsContainer = document.querySelector("section#portfolio div.projects");
    projectsContainer.insertAdjacentHTML("beforeend" ,moreButtonHTMLText);

    let moreButton = document.querySelector("button.more-projects");
    moreButton.addEventListener('click', ()=> seeMoreProjects(projects));
}

const addProjectsToTheDom = (projectsList)=>
{
    let index = 0;
    let projects = projectsList;
    while(!isProjectsContainerisOverFlow() && (index < projects.length))
    {
        projects[index].addTheCardToTheProjectsContainer();
        index++;
    }

    if(isProjectsContainerisOverFlow())
    {
        console.log("There is overFlow")
        removeLastProjectsFromProjectsContainer();
        addMoreButtonToProjectsContainer(projects);
    }
    else
    {
        setHightOfThePortfolioSectionToAuto();
    }
}

addProjectsToTheDom(projects);

// Working with filter part of the portfolio:
const repleaceTheFilterTitleToChoosenSkill = (target)=>
{
    if(target.nodeName == "LI" || target.nodeName == "P")
    {
        const textContent = target.textContent;
        let filterHead = document.querySelector("section#portfolio div.filter div.head p");
        filterHead.textContent = textContent;
    }
}

const appearTheProjectsBuiltOnTheSkill = (target)=>
{
    if(target.nodeName == "LI" || target.nodeName == "P")
    {
        const projectsContainer = document.querySelector("section#portfolio div.projects");
        projectsContainer.remove();
        let porftolioSection = document.querySelector("section#portfolio");
        const newProjectsContainer = `<div class="projects"> </div>`;
        porftolioSection.insertAdjacentHTML('beforeend', newProjectsContainer);
        let textContent = target.textContent.trim();
        console.log("skillTextContent:", textContent)
        const newProjects = textContent === "All"? 
            projects : 
            projects.filter((i)=> {return (i.skills.indexOf(textContent) !== -1)});
        console.log(newProjects);
        addProjectsToTheDom(newProjects);
    }
}

let fileterElements = document.querySelector("section#portfolio div.filter ul");
fileterElements.addEventListener('click', (evn)=>
{
    let evnTarget = evn.target;
    repleaceTheFilterTitleToChoosenSkill(evnTarget);
    appearTheProjectsBuiltOnTheSkill(evnTarget);
})