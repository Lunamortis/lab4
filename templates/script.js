function addCard() {
    const template = document.getElementById('card-template').content.cloneNode(true);
    template.querySelector('.card-title').innerText = 'My Card Title';
    template.querySelector('.card-img-top').src = 'https://source.unsplash.com/random/800x800/?img=4';
    template.querySelector('.card-text').innerText = 'lorem ipsum ba nope yawn';
    document.querySelector('#card-list').appendChild(template);
}

addCard();

const data = [{ name: "bob", age: 23, }, { name: "alice", age: 39 }, { name: "joe", age: 45 }];


function copyCard(data) {
    const template = document.getElementById('card-template').content.cloneNode(true);
    template.querySelector('.card-title').innerText = data.name;
    template.querySelector('.card-img-top').src = 'https://source.unsplash.com/random/800x800/?img=4';
    template.querySelector('.card-text').innerText = data.age;
    document.querySelector('#card-list').appendChild(template);
}

function loadCards(data) {
    data.forEach(copyCard);
}

loadCards(data);


