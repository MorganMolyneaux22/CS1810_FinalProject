window.addEventListener('load', (event) => {
    document.getElementById("submit").addEventListener("click", userVerification);
    function userVerification() {
        fetch("userName.txt")
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                let test = Array.from(text);
                console.log(test);
                console.log(text);
                document.getElementById("username");

            });
    }

});




 // function userVerification() {
    //     file.readFile('Input.txt', 'utf-8', (err, data) => {
    //         if (err) throw err;

    //         // Converting Raw Buffer to text
    //         // data using tostring function.
    //         console.log(data);
    //         alert(data);
    //     })}});