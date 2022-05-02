$(document).ready(() => {

    var rand;

    var load = function () {
        // first div
        rand = Math.ceil(Math.random() * 88);
        $.get(`https://akabab.github.io/starwars-api/api/id/${rand}.json`, function (data) {
            $("#firstp").text(
                `The name of this character is ${data['name']}, and gender is ${data['gender']}. Homeworld is ${data['homeworld']}, and is a ${data['species']}. \n
        Hair colour is ${data['hairColor']}, eye colour is ${data['eyeColor']} and weight is ${data['mass']} kg.
        `
            );

            $("#first > img")
                .attr("src", data['image'])
                .attr("alt", `${data['name']} image`);
        });

        rand = Math.ceil(Math.random() * 88);

        $.get(`https://akabab.github.io/starwars-api/api/id/${rand}.json`, function (data) {
            $("#second > p").text(
                `The name of this character is ${data['name']}, and gender is ${data['gender']}. Homeworld is ${data['homeworld']}, and is a ${data['species']}. \n
        Hair colour is ${data['hairColor']}, eye colour is ${data['eyeColor']} and weight is ${data['mass']} kg.
        `
            );

            $("#second > img")
                .attr("src", data['image'])
                .attr("alt", `${data['name']} image`);
        });

        rand = Math.ceil(Math.random() * 88);

        $.get(`https://akabab.github.io/starwars-api/api/id/${rand}.json`, function (data) {
            $("#third > p").text(
                `The name of this character is ${data['name']}, and gender is ${data['gender']}. Homeworld is ${data['homeworld']}, and is a ${data['species']}. \n
        Hair colour is ${data['hairColor']}, eye colour is ${data['eyeColor']} and weight is ${data['mass']} kg.
        `
            );

            $("#third > img")
                .attr("src", data['image'])
                .attr("alt", `${data['name']} image`);
        });
    }


    load();
    $("button").on("click", () => {
        load();
    });
});