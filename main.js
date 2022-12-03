// modal window
let connectWalletBtn = document.querySelector("#connect-button");
let modalWallet = document.querySelector(".modal-wallet-wrapper");
let closeBtn = document.querySelector("#closeBtn");
let headerButtons = document.querySelector(".header-block");
let editorsPick = document.querySelector("#editors-Pick");
connectWalletBtn.addEventListener("click", function () {
    modalWallet.style.display = "block"
    headerButtons.style.display = "none"
    editorsPick.style.display = "none"
});
closeBtn.addEventListener("click", function () {
    modalWallet.style.display = "none"
    headerButtons.style.display = "block"
    editorsPick.style.display = "block"
})

//like button
let heart = document.querySelectorAll(".heart");
for (let index of heart) {
    index.addEventListener("click", function () {
        index.classList.toggle("likedBtn");
    })
}

//view ranking
let creatorsSection = document.querySelector("#top-creators")
let creators = document.querySelector(".top-creators-column");
let viewCreators = document.querySelector(".Ranking");
let newCreators = creators.cloneNode(true);

let closeCreators = document.createElement("button");
closeCreators.classList.add("Ranking")
closeCreators.textContent = "Close Ranking";

creatorsSection.append(newCreators)
creatorsSection.append(closeCreators)
newCreators.style.display = "none"
closeCreators.style.display = "none"

viewCreators.addEventListener("click", function () {
    newCreators.style.display = "flex"
    closeCreators.style.display = "block"
    viewCreators.style.display = "none";

});

closeCreators.addEventListener("click", function () {
    newCreators.style.display = "none";
    closeCreators.style.display = "none";
    viewCreators.style.display = "block"
})

// place a bid btn
let BidModalWindow = document.querySelector(".place-a-bid-wrapper");
let closeBid = document.querySelector("#closeBidBtn");
let bidInput = document.querySelector("#bid-price");
let submitBid = document.querySelector("#submitPrice");
submitBid.addEventListener("click", function () {
    if (bidInput.value != "") {
        submitBid.value = "submited"
        submitBid.style.backgroundColor = "green";
        submitBid.style.transition = "2s"
    }
    else {
        alert("enter a number value")
    }
})


let placeABidBtn = document.querySelectorAll(".second-section-card footer button");
for (let index of placeABidBtn) {
    index.addEventListener("click", function () {
        BidModalWindow.style.display = "block"
        headerButtons.style.display = "none"
        editorsPick.style.display = "none"
    })
}
closeBid.addEventListener("click", function () {
    BidModalWindow.style.display = "none"
    headerButtons.style.display = "block"
    editorsPick.style.display = "block"
})

//timer
let seconds = document.querySelector(".timer p time");
let secondsCounter = 60;
setInterval(counterFunc, 1000)
function counterFunc() {
    seconds.innerHTML = secondsCounter + "s";
    if (secondsCounter != 0) {
        secondsCounter--;
        if(secondsCounter <10){
            seconds.innerHTML = "0" + secondsCounter + "s"
        }
    }
}


//follow Btn
let followBtn = document.querySelectorAll("#top-creators .top-creators-column .people-card button");
for (index of followBtn) {
    index.addEventListener("click", function () {
        index.classList.toggle("followedBtn")
    });
};
