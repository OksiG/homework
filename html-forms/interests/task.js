const checkBox = document.querySelectorAll('.interests_main > ul > li');
const parentBox = [];
const childrenBox = [];

for (let i = 0; i < checkBox.length; i++) {
    parentBox.push(checkBox[i].querySelector('.interest__check'));
}

for (let i = 0; i < checkBox.length; i++) {
    childrenBox.push(checkBox[i].querySelectorAll('ul.interests > li'));
}

for (let i = 0; i < childrenBox; i++) {
    childrenBox[i].checked = parentBox[i].checked;
    });
}