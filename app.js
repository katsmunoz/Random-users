const getInfo = () => {
 
    const url = 'https://randomuser.me/api/?results=20';
  
    const xhttp = new XMLHttpRequest();
    xhttp.open('get', url, true);
    xhttp.send();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        console.log(data.results);
  
        const response = document.getElementById('info');
        response.innerHTML = '';
  
        for (const person of data.results) {
          response.innerHTML
                  += `<div class='cards'>
                      <img src=${person.picture.large} class="person-img">
                  <div class='info-cards'>
                      <p>Nombre: ${person.name.title} ${person.name.first} ${person.name.last}</p>
                      <p>Teléfono: ${person.phone}</p>
                      <p>Email: ${person.email}</p>
              </div>`;
        }
      }
    };
  };
  
  getInfo();