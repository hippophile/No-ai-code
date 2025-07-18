document.getElementById("images").addEventListener("click", function(event) {
    let id = event.target.id;
    
    if(id) {
        console.log("You clicked on a Slime!");
        fetch("../data/slimes.json")
            .then(response => response.json())
            .then(data => {
                let quote = data[id].quote;
                let sound = data[id].sound;
                console.log(quote);
                let audio = new Audio(sound);
                audio.play();
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    
    





    //let audio = new Audio("../data/audio/beat.mp3");
    //audio.play();
});