// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {

        const articlesArray = Object.entries(response.data.articles);

        for (let i = 0; i < articlesArray.length; i++) {
            let articleTopic = articlesArray[i][0]; // For Stretch

            for (let j = 0; j < articlesArray[i][1].length; j++) {
                let newCard = cardMaker(articlesArray[i][1][j]);
                newCard.setAttribute('data-tag', articleTopic); // For Stretch
                document.querySelector('.cards-container').appendChild(newCard);
                // console.log(articlesArray[i][1][j]);
            }
        }
    })
    .catch((error) => {
        console.log("Error:", error);
    })

function cardMaker(cardData) { // the cardData will be response.data.articles.(each-topic)[i]
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = cardData.headline;
    cardDiv.appendChild(headlineDiv);

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    authorDiv.appendChild(imgDiv);

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', cardData.authorPhoto);
    imgDiv.appendChild(imgElement);

    const authorNameSpan = document.createElement('span');
    authorNameSpan.textContent = cardData.authorName;
    authorDiv.appendChild(authorNameSpan);

    return cardDiv;
}
