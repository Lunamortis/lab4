function Numgen() {
    var num = Math.floor(Math.random() * 100);
    return num;
}


function getnewcard() {
    let randompost = Numgen();
    //fetch('https://jsonplaceholder.typicode.com/posts/' + randompost)
    fetch('https://api.quotable.io/random') //to display a really random quote you could use this API instead
        .then((response) => response.json())
        .then(function (json) {
            console.log(json);

            //the data this one returns is structured differently, so this is to make sure addCard can still access the required info
            let quote = {"title": json.author, "body": json.content} 
            addCard(quote);

        });
}
function addCard(post) {
    const template = document.getElementById('card-template').content.cloneNode(true);
    template.querySelector('.card-title').innerText = post.title;
    template.querySelector('.card-img-top').src = 'https://source.unsplash.com/random/800x800/?img=4&unique='+Numgen(); //this makes sure each image is unique
    template.querySelector('.card-text').innerText = post.body;
    document.querySelector('#card-list').appendChild(template);
}

// custom scrollbar
//this relies on jquery which wasn't included?
//$(document).ready(function () {
//    if (!$.browser.webkit) {
//        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
//    }
//});
















