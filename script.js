function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

displayQuote = (data) => {
    const adviceIDDiv = document.getElementById("adviceID")
    const id = data.slip.id
    const adviceDiv = document.getElementById("advice")

    createQuote = () => {
        const adviceID = document.createElement("p")
        adviceID.innerHTML = `ADVICE #${id}`
        adviceIDDiv.appendChild(adviceID)
        const advice = data.slip.advice
        const adviceText = document.createElement("p")
        adviceText.innerHTML = `"${advice}"`
        adviceDiv.appendChild(adviceText)
    }
    if (adviceIDDiv.hasChildNodes() & adviceDiv.hasChildNodes()) {
        adviceIDDiv.removeChild(adviceIDDiv.firstElementChild)
        adviceDiv.removeChild(adviceDiv.firstElementChild)
        createQuote()
    } else {
        createQuote()
    }

}

getQuote = () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error("Network response error")
            }
        })
        .then(data => {
            console.log(data)
            hideloader()
            displayQuote(data)
        })
        .catch((error) => console.error("Fetch Error:", error))
}

getQuote()
