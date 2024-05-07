const body = document.querySelector('body');

const footerSect = document.createElement('footer');
footerSect.setAttribute('id', 'Footer');

// Create an h2 for "Let's connect!"
// const h2Footer = document.createElement('h2');
// h2Footer.setAttribute('id', 'connect-btn');
// h2Footer.textContent = "Let's Connect!";
// footerSect.appendChild(h2Footer);

// Get current year
const today = new Date ();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer#footerSect');

const copyright = document.createElement('p');
copyright.innerHTML = '©Stephanie L. Tjiong ' + thisYear;

footerSect.appendChild(copyright);

const skills = ["SQL", "Tableau", "Power BI", "HTML", "CSS", "Javascript", "GitHub"];
const skillsSection = document.querySelector('section#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    // create a list item for each skill
    const skill = document.createElement('ul');
    // set each item from skills to the current skill (baca reverse)
    skill.textContent = skills[i];
    //append skill element to skillList
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', event => {

    event.preventDefault();

    const username = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log("Name: ", username);
    console.log("Email: ", email);
    console.log("Message: ", message);

    

    const messageSection = document.querySelector('#Messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href="mailto: ${email}">${username}</a>
    <span>${message}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', event => {
        
        // Find the button's parent element using DOM Traversal
        const entry = event.target.parentNode;

        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    messageForm.reset();
});

body.appendChild(footerSect);

fetch('https://api.github.com/users/stephanielaurentjiong/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status); //This error will throw if the url fetch is wrong;  It only handles errors related to the HTTP response status codes.
        } 
        return response.json();
    })
    .then(data => {
        // Handle JSON data
        let repositories = data;
        console.log(repositories);

        // Display repositories array in list
        const projectSection = document.querySelector('section#Projects');
        const projectList = projectSection.querySelector('ul');

        // Looping over each repository in the 'repositories' array
        for (let i = 0;  i < repositories.length; i++) {
            // Creating a new list item (li) element
            let project = document.createElement('li');
    
            // Set project var's innerText to the current array element's with name property
            // Setting the text content of the list item to the name of the current repository
            project.innerText = repositories[i].name;
    
            projectList.appendChild(project);
        }
    })
    .catch(error => console.log('Error'))


 