browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message == "randVideo") {
        return Promise.resolve({
            message: getLink()
        });
    }
});

function getLink() {
    let max = Math.floor(Math.random() * document.querySelectorAll("a").length);
    tabURL = (document.querySelectorAll("a")[max].href);
    console.log(tabURL);
    if (!tabURL || !tabURL.includes("watch?v")) {
        tabURL = getLink();
    }
    // console.log(tabURL, tabURL.includes("watch?v"));
    // Is this goofy? There may be a better way to see if it includes a video link or not.
    return tabURL;
}