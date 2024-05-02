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

// const messageForm = document.querySelector("[name="leave_message"]");
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', event => {
    event.preventDefault();

    // Callback for username
    const username = event.target.usersName.value;
    // Callback for usersEmail
    const email = event.target.usersEmail.value;
    // Callback for usersMessage
    const message = event.target.usersMessage.value;

    console.log("Name:", username);
    console.log("Email:", email);
    console.log("Message:", message);

    const messageSection = document.querySelector('section#Messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHtml = '<a href="mailto: ${usersEmail}">${usersName}</a> <span> ${usersMessage} </span>';

    const removeButton = document.createElement('button');
    removeButton.innertHtml = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', event => {
        const entry = removeButton.parentNode;

        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});



body.appendChild(footerSect);

