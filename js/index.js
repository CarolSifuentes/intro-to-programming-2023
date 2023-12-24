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