
/* HARD CODED ============================================================== */
/* Create <div class="service-item"> -----------------------------  */
/* function createServiceItem() {
    // console.log('createService'); 
    const servicesList = document.querySelector('.services-list');

    // create <div class="service-item"> 
    const serviceItemContainer = document.createElement('div');
    serviceItemContainer.classList.add('service-item');
    servicesList.append(serviceItemContainer);

    // create <img src="./images/services/service1.png" alt=""> 
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', './images/services/service1.png');
    serviceItemContainer.append(imageElement);

    // create <h3>Web Design</h3> 
    const titleElement = document.createElement('h3');
    titleElement.textContent = 'Web Design'; 
    serviceItemContainer.append(titleElement);

    // create <p>...</p> 
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus'; 
    serviceItemContainer.append(paragraph);

    // create <a href="">Learn More</a>
    const link = document.createElement('a');
    link.textContent = 'Learn More'; 
    link.setAttribute('href', '/');
    serviceItemContainer.append(link);

    // servicesList.append(serviceItemContainer); 
} */

// Ejecutar la función después de que el DOM esté cargado
//document.addEventListener('DOMContentLoaded', createServiceItem);



/* API================================================================================== */
async function getServices() {
    const url = "http://localhost:3000/services";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const services = await response.json(); /* response to json */
        //console.log(services);

        services.map((service) => createServiceItem (
            service.image,
            service.title,
            service.description,
            "Learn More",
            service.link
        ));

    } catch (error) {
        console.error(error.message);
    }
}

async function getTestimonials() {
    const url = "http://localhost:3000/testimonials";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const testimonials = await response.json(); 

        testimonials.map((testimonial) => createTestimonialItem (
            testimonial.author,
            testimonial.image,
            testimonial.area,
            testimonial.testimonial
        ));

    } catch (error) {
        console.error(error.message);
    }
}

async function getFAQs() {
    const url = "http://localhost:3000/faqs";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const faqs = await response.json(); 

        faqs.map((item) => createFAQItem (
            item.question,
            item.answer
        ));

    } catch (error) {
        console.error(error.message);
    }
}

async function getProjects() {
    const url = "http://localhost:3000/projects";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const projects = await response.json(); 

        projects.map((item) => createProjectItem (
            item.image,
            item.title,
            item.category
        ));

    } catch (error) {
        console.error(error.message);
    }
}

async function getTeam() {
    const url = "http://localhost:3000/team";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const team = await response.json(); 

        team.map((item) => createTeamItem (
            item.image,
            item.name,
            item.area,
            item.slogan
        ));

    } catch (error) {
        console.error(error.message);
    }
}

async function getStrategyCards() {
    const url = "http://localhost:3000/strategyCards";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const strategyCards = await response.json(); 

        strategyCards.map((item) => createStrategyCardItem (
            item.id,
            item.title,
            item.description
        ));

    } catch (error) {
        console.error(error.message);
    }
}


getServices();
getTestimonials();
getFAQs();
getProjects();
getTeam();
getStrategyCards();



/* DYNAMICALLY-CODED ================================================================ */
function createServiceItem(imageURL, title, description, linkText, linkHref) {
    // console.log('createService'); 
    const servicesList = document.querySelector('.services-list');

    // create <div class="service-item"> 
    const serviceItemContainer = document.createElement('div');
    serviceItemContainer.classList.add('service-item');
    servicesList.append(serviceItemContainer);

    // create <img src="./images/services/service1.png" alt=""> 
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageURL);
    serviceItemContainer.append(imageElement);

    // create <h3>Web Design</h3> 
    const titleElement = document.createElement('h3');
    titleElement.textContent = title; 
    serviceItemContainer.append(titleElement);

    // create <p>...</p> 
    const paragraph = document.createElement('p');
    paragraph.textContent = description; 
    serviceItemContainer.append(paragraph);

    // create <a href="">Learn More</a>
    const link = document.createElement('a');
    link.textContent = linkText; 
    link.setAttribute('href', linkHref);
    serviceItemContainer.append(link);
}
//document.addEventListener('DOMContentLoaded', createServiceItem);


function createTestimonialItem(author, image, area, testimonial) {
    // console.log('createService'); 
    const testimonialList = document.querySelector('.testimonials-list');

    // create <div class="testimonials-item"> 
    const testimonialItemContainer = document.createElement('div');
    testimonialItemContainer.classList.add('testimonials-item');
    
    testimonialList.append(testimonialItemContainer);

    // create p
    const paragraph = document.createElement('p');
    paragraph.textContent = testimonial; 

    // create <div class="testimonials-author">
    const testimonialAuthorContainer = document.createElement('div');
    testimonialAuthorContainer.classList.add('testimonials-author');
        //create <div class="image">
        const testimonialImageContainer = document.createElement('div');
        testimonialImageContainer.classList.add('image');
            // create <img src="./images/team/te1.jpg" alt="">
            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', image);
            testimonialImageContainer.append(imageElement);

        //create <div class="bio">
        const testimonialBioContainer = document.createElement('div');
        testimonialBioContainer.classList.add('bio');
            // create <h3>
            const authorElement = document.createElement('h3');
            authorElement.textContent = author; 
            testimonialBioContainer.append(authorElement);
            // create <p>
            const areaElement = document.createElement('p');
            areaElement.textContent = area; 
            testimonialBioContainer.append(areaElement);

    testimonialAuthorContainer.append(testimonialImageContainer, testimonialBioContainer);

    testimonialItemContainer.append(paragraph,testimonialAuthorContainer)

    /* testimonialList.append(testimonialItemContainer); */

}

function createFAQItem(question, answer) {
    const faqsList = document.querySelector(".faqs-list");
    
        const faqItemContainer = document.createElement("div");
        faqItemContainer.classList.add("faqs-item");
    
            const faqContainer = document.createElement("details");

                const faqQuestion = document.createElement("summary");
                faqQuestion.textContent = question;
                
                const faqAnswer = document.createElement("p");
                faqAnswer.textContent = answer;
    
            faqContainer.append(faqQuestion, faqAnswer);

        faqItemContainer.append(faqContainer);
    
    faqsList.append(faqItemContainer);
}


function createProjectItem(image, title, category) {
    const projectsList = document.querySelector(".projects-container");

    const projectItemContainer = document.createElement("div");
    projectItemContainer.classList.add("project");
  
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    projectItemContainer.append(imageElement);
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    projectItemContainer.append(titleElement);
  
    const paragraph = document.createElement("p");
    paragraph.textContent = category;
    projectItemContainer.append(paragraph);
  
    projectsList.append(projectItemContainer);
}


  function createTeamItem(image, name, area, slogan) {
    const teamList = document.querySelector(".team-list");
    const teamItemContainer = document.createElement("div");
    teamItemContainer.classList.add("team-item");
  
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    teamItemContainer.append(imageElement);
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = name;
    teamItemContainer.append(titleElement);
  
    const paragraph = document.createElement("p");
    paragraph.textContent = area;
    teamItemContainer.append(paragraph);
  
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = slogan;
    teamItemContainer.append(paragraph2);
  
    teamList.append(teamItemContainer);
}


function createStrategyCardItem(id, title, description) {
    const strategyCardsList = document.querySelector(".strategy-cards-container");
    const strategyCardItem = document.createElement("div");
    strategyCardItem.classList.add("strategy-card");
  
    const orderItem = document.createElement("div");
    orderItem.classList.add("order");
    /* orderItem.textContent = `0${id}`; */
    orderItem.textContent = `0${id}`;
    strategyCardItem.append(orderItem);
  
    const infoItem = document.createElement("div");
    infoItem.classList.add("info");
    const infoTitle = document.createElement("h3");
    infoTitle.textContent = title;
    const infoDescription = document.createElement("p");
    infoDescription.textContent = description;
    infoItem.append(infoTitle, infoDescription);
  
    strategyCardItem.append(infoItem);
  
    strategyCardsList.append(strategyCardItem);
  }



/* MENU======================================================================== */
/* function toggleMenu() {
    const navButton = document.querySelector("#btn-menu");
    const navMenu = document.querySelector("nav ul");

    navButton.addEventListener("click", function () {
        console.log("open");
        navMenu.classList.add("active");
    });

    const navCloseButton = document.querySelector("#btn-close");

    navCloseButton.addEventListener("click", function() {
        console.log("close");
        navMenu.classList.toggle("active");
    })
} */

function toggleMenu() {
    const navButtons = document.querySelectorAll(".btn-nav");
    const navMenu = document.querySelector("nav ul");
    
    navButtons.forEach((element) => {
        element.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        });
    });
    }

//toggleMenu();
document.addEventListener('DOMContentLoaded', toggleMenu);