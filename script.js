document.getElementById("fetch-button").addEventListener('click', fetchRandomUser);

function fetchRandomUser(){
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        let user = data.results[0];
        document.getElementById("user-img").src=user.picture.large;
        document.getElementById("username").textContent= `${user.name.first} ${user.name.last}`;
        document.getElementById("user-email").textContent= user.email;
    })

    .catch(error => {
        console.error("Error fetching user:", error)
        alert("Failed to load user data. Try again!")
    })

}
