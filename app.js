document.getElementById("get").addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';

            //if response method => Describe the Successfulness and define array types its optional  => 
            //it show error on console  op like  => {type: "success", value: Array(2)}


             if(response.type === 'success'){ 
            response.value.forEach(joke => {
                output += `<li>${joke.joke}</li><br>`

            });

              }else{
                 output += '<li>something went wrong</li>';
             } 
            document.getElementById('jokes').innerHTML = output;

        }
    }
    xhr.send();
    e.preventDefault();
}


