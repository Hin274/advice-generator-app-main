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
        displayQuote(data)
    })
    .catch((error) => console.error("Fetch Error:", error))

function displayQuote(data) {
    const adviceIDDiv = document.getElementById("adviceID")
    const id = data.slip.id
    const adviceID = document.createElement("p")
    adviceID.innerHTML = `ADVICE #${id}`
    adviceIDDiv.appendChild(adviceID)

    const adviceDiv = document.getElementById("advice")

    const advice = data.slip.advice
    const adviceText = document.createElement("p")
    adviceText.innerHTML = `"${advice}"`
    adviceDiv.appendChild(adviceText)



}



