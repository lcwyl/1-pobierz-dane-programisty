$(function () {

    let btn = $("<button>Pobierz dane</button>");
    $('body').append(btn)
    let div = $("<div id='dane-programisty'></div>");
    $(btn).after(div)
    $(btn).on("click", function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done((data) => {
                //div.html(`${data}`)
                div.html(`${data.imie}<br>  ${data.nazwisko}<br>  ${data.zawod} <br> ${data.firma}`)
            })
            .fail((error) => {
                console.error(error)
            });
    });
})