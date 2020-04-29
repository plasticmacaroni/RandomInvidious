browser.pageAction.onClicked.addListener((tab) => {
    browser.tabs.sendMessage(tab.id, {
        message: "randVideo"
    }).then(response => {
        browser.tabs.update({url: response.message});
    }).catch((errorMessage) => {
        console.error(errorMessage)
    });
});