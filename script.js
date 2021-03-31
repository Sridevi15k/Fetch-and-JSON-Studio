// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        let x;
        response.json().then(function(json) {
            const container = document.getElementById("container");
            json.sort(function(obj1, obj2) {
                return parseInt(obj1.hoursInSpace) - parseInt(obj2.hoursInSpace);
            });
            container.innerHTML = `<h3> No. of Astronauts: ${json.length}</h3>`;
            for (let i = 0; i < json.length; i++) {
                if(json[i]) {
                    x = json[i];
                    //console.log(x.active);
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${x.firstName} ${x.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${x.hoursInSpace}</li>
                                <li class=${x.active ? "green" : "red"}>Active: ${x.active}</li>
                                <li>Skills: ${x.skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${x.picture}>
                    </div>`;
                }
            }
        });
    });
});