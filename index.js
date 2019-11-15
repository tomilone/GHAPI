function getRepo(user) {
    const options = {
        headers: new Headers({
            "Accept": "application/vnd.github.v3+json"
        })
    };

    fetch(`https://api.github.com/users/${user}/repos`)
        .then(response => {

            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson =>
            displayResults(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });

}

function displayResults(responseJson) {
    
    $('.results').append(
        `<p>${responseJson.full_name[0]} ${responseJson.html_Url}${responseJson.message}</p>`
    )
    }

    function watchForm() {
        $('form').submit(event => {
            event.preventDefault();
            let x = $(`input[class = "user"`).val();

            console.log(x)

            getRepo(x);


        });
    }


    function hold() {

        $(watchForm);
    }

    $(hold);

