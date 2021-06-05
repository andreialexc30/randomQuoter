let lifeQuotes = [
    '\“The best way to get started is to quit talking and begin doing.\” – Walt Disney',
    '\“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.\” – Winston Churchill',
    '\“Don\’t let yesterday take up too much of today.\” – Will Rogers',
    '\“You learn more from failure than from success. Don\’t let it stop you. Failure builds character.\” – Unknown',
    '\“It\’s not whether you get knocked down, it\’s whether you get up.\” – Inspirational Quote by Vince Lombardi',
    '\“If you are working on something that you really care about, you don\’t have to be pushed. The vision pulls you.\” – Steve Jobs',
    '\“People who are crazy enough to think they can change the world, are the ones who do.\” – Rob Siltanen',
    '\“Failure will never overtake me if my determination to succeed is strong enough.\” – Og Mandino',
    '\“Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That\’s the classic entrepreneur.\” – Mohnish Pabrai',
    '\“We may encounter many defeats but we must not be defeated.\” – Maya Angelou'
]

let gamingQuotes = [
    '"We all make choices in life, but in the end our choices make us." – Andrew Ryan, Bioshock',
    '"What is better? To be born good or to overcome your evil nature through great effort?" – Paarthurnax, Elder Scrolls V: Skyrim',
    '"The right man in the wrong place can make all the difference in the world." – G-Man, Half-Life 2',
    '"Even in dark times, we cannot relinquish the things that make us human." – Khan, Metro 2033',
    '"Thank you Mario! But our Princess is in another castle!" – Toad, Super Mario Bros.',
    '"I raised you, and loved you, I\'ve given you weapons, taught you techniques, endowed you with knowledge. There\'s nothing more for me to give you. All that\'s left for you to take is my life." – The Boss, Metal Gear Solid 3',
    '"War is where the young and stupid are tricked by the old and bitter into killing each other." – Niko Bellic, GTA IV',
    '"A hero need not speak. When he is gone, the world will speak for him." – Halo',
    '"Do you wish to feel the teachings born of the Mandalorian Wars, of all wars, of all tragedies that scream across the galaxy? Let me show you, you, who have forever seen the galaxy through the Force. See it through the eyes of the Exile." – Kreia, Star Wars Knights of the Old Republic II: The Sith Lords',
    '"Hatred and prejudice will never be eradicated. And the witch hunts will never be about witches. To have a scapegoat, that\'s the key." – Geralt of Rivia, The Witcher 3: Wild Hunt'
]

let movieQuotes = [
    '"I\'m gonna make him an offer he can\'t refuse." – The Godfather(1972)',
    '"May the Force be with you." – Star Wars(1977)',
    '"Here\'s Johnny!" – The Shining(1980)',
    '"Take your stinking paws off me, you damned dirty ape." – Planet of the Apes(1968)',
    '"Say "hello" to my little friend!" – Scarface(1983)',
    '"Gentlemen, you can\'t fight in here! This is the War Room!" – Dr. Strangelove or: How I learned to stop worrying and love the bomb(1964)',
    '"A martini. Shaken, not stirred." – Goldfinger(1964)',
    '"Carpe diem. Seize the day, boys. Make your lives extraordinary." – Dead Poets Society(1989)',
    '"I\'ll be back." – The Terminator(1984)',
    '"My mama always said life was like a box of chocolates. You never know what you\'re gonna get." – Forrest Gump(1994)'
]

let display = document.getElementById('quoteDisplay')
let author = document.getElementById('author')
const genBtn = document.getElementById('genBtn')
const quoteBtn = document.getElementById('genBtn')
const spinner = document.getElementById('js-spinner')
const endpoint = 'https://free-quotes-api.herokuapp.com/'
genBtn.addEventListener('click', getQuote)

async function getQuote() {
    quoteBtn.disabled = true

    fetch(endpoint).then(response => {
        if(response.status !== 200) {
            return null
        } else {
            return response.json()
        }
    }).then(data => {
        displayQuote(data.quote)
    }).catch(err => {
        console.error(err)
    })

    quoteBtn.disabled = false
}

function displayQuote(quote) {
    display.textContent = quote
}

function lifeQuote() {
    let randomNumber = Math.floor(Math.random() * (lifeQuotes.length))
    display.innerHTML = lifeQuotes[randomNumber]
}

function gamingQuote() {
    let randomNumber = Math.floor(Math.random() * (gamingQuotes.length))
    display.innerHTML = gamingQuotes[randomNumber]
}

function movieQuote() {
    let randomNumber = Math.floor(Math.random() * (movieQuotes.length))
    display.innerHTML = movieQuotes[randomNumber]
}