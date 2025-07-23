// logic.js


// When you click a slime image, it fetches a quote and plays a sound
// from a JSON file and logs the quote to the console.
document.getElementById("images").addEventListener("click", function(event) {
    let id = event.target.id;
    
    if(id) {
        document.querySelectorAll(".slime").forEach(slime => {
            if (slime.id !== id) {
                slime.style.display = "none"; // Hide other slimes
                }
            else{
                slime.classList.toggle("big"); // Toggle the big class for the clicked slime
            }
        });

        
        console.log("You clicked on a Slime!");
        fetch("../data/slimes.json")
            .then(response => response.json())
            .then(data => {
                let quote = data[id].quote;
                let sound = data[id].sound;
                console.log(quote);
                let audio = new Audio(sound);
                audio.play();

                const firstMessage = document.getElementById("firstMessage");
                firstMessage.style.display = "none"; // Hide the first message

                const quoteBox = document.getElementById("quoteBox");
                quoteBox.textContent = quote; // Display the quote in the h1 element

                // Create a return button
                const returnButton = document.createElement("button");
                returnButton.id = "bn11";
                returnButton.innerText = "Return";

                returnButton.addEventListener("click", function(event) {
                    history.go(0); // Reload the page
                });

                document.body.appendChild(returnButton); // Append the return button to the body

            })
            .catch(error => console.error("Error fetching data:", error))   
    }
});

