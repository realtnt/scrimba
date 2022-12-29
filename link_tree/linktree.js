
const youtubeEl = document.getElementById("youtube")
const twitterEl = document.getElementById("twitter")
const youtubecloseEl = document.getElementById("youtube-close")
const twittercloseEl = document.getElementById("twitter-close")
const twitterlinkEl = document.getElementById("twitter-link")
let twitterOpen = false
let youtubeOpen = false

youtubeEl.addEventListener("click", () => {
    if (youtubeOpen === false) {
        youtubecloseEl.setAttribute("class", "remove-style")
        youtubeEl.setAttribute("class", "remove-press")
        youtubeEl.innerHTML =
            `<span class="player">
                <iframe frameborder="0" allowfullscreen="1" 
                title="YouTube video player" 
                src="https://www.youtube.com/embed/9eDkxRL2yvc">
                </iframe>
            </span>
        `
        youtubeOpen = true
    }
})

youtubecloseEl.addEventListener("click", () => {
    youtubecloseEl.setAttribute("class", "hidden")
    youtubeEl.innerHTML =
        `<span>
            YouTube
        </span>
    `
    youtubeOpen = false
})

twitterEl.addEventListener("click", () => {
    if (twitterOpen === false) {
        twittercloseEl.setAttribute("class", "remove-style")
        twitterEl.setAttribute("class", "remove-press")
        twitterEl.innerHTML =
            `<span id="twitter-link">
                Twitter
            </span>
            <div id="tweet">
            </div>
            <a id="view-tweet-btn" href="https://twitter.com/scrimba/status/1492453432304685059" target="_blank">
                View Tweet &nbsp;&nbsp;>
            </a>
        `
        twttr.widgets.createTweet('1492453432304685059',
            document.getElementById("tweet"),
            {
                theme: 'light',
                conversation: 'none'
            }
        );
        twitterOpen = true
    } else {
        twittercloseEl.setAttribute("class", "hidden")
        twitterEl.setAttribute("class", "")
        twitterEl.innerHTML =
            `<span id="twitter-link">
                Twitter
            </span>
        `
        twitterOpen = false
    }
})

twittercloseEl.addEventListener("click", () => {
    twittercloseEl.setAttribute("class", "hidden")
    twitterEl.innerHTML =
        `<span id="twitter-link">
            Twitter
        </span>`
    twitterOpen = false
})