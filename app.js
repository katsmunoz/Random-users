// JQUERY ANIMATION

$(document).ready(function() {
    const show = $("#show");
    const hide = $("#hide");
    const info = $("#info");
  
    show.click(function() {
      info.fadeIn(1000);
    });

    hide.click(function() {
        info.fadeOut(1000);
      });


  });

// DATA FROM URL

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
  
        for (const user of data.results) {
          response.innerHTML
                  += `<div class='cards'>
                      <img src=${user.picture.large} class="user-img">
                  <div class='info-cards'>
                      <p>Nombre: ${user.name.title} ${user.name.first} ${user.name.last}</p>
                      <p>Teléfono: ${user.phone}</p>
                      <p>Email: ${user.email}</p>
              </div>`;
        }
      }
    };
  };
  
  getInfo();