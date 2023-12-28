var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector('footer');

var copyright = document.createElement('p');

copyright.innerHTML = 'Carol' + thisYear;

footer.appendChild(copyright);

var skills = ['HTML', 'Spanish', 'English', 'Javascript', 'flute'];
var skillsSection = document.getElementById('skills');
var skillsList = skillsSection.querySelector('ul');

for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}


var messageForm = document.forms['leave_message'];


messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var usersName = event.target.usersName.value;
    var usersEmail = event.target.usersEmail.value;
    var usersMessage = event.target.usersMessage.value;

    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);


    messageForm.reset();


    var messageSection = document.getElementById('messages');
    var messageList = messageSection.querySelector('ul');
    var newMessage = document.createElement('li');


    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a>' +
        '<span>' + usersMessage + '</span>';


    var removeButton = document.createElement('button');


    removeButton.type = 'button';
    removeButton.innerText = 'remove';


    removeButton.addEventListener('click', function () {
        var entry = removeButton.parentNode;
        entry.remove();

    });


    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});


