const button = document.getElementById('submit');
        button.addEventListener('click', async event => {
          
          // remove contents from div id plants
          document.getElementById('plants').innerHTML = "";
          
          // create new variable 'plant' and add content from form
          const plant = document.getElementById('plant').value;
          console.log(plant);
          
          // send form input to broad search endpoint
          const PLANT_ENDPOINT = '/get/' + plant;
          const response = await fetch(PLANT_ENDPOINT);
          const json = await response.json();
          console.log(json.data);
          
          for (i = 0; i < json.data.length; i++) {
            
            let div_plant = document.createElement('div');
            div_plant.className = 'plant';

            let div_plant_image = document.createElement('div');
            div_plant_image.className = 'plant-image';

            let img_src = document.createElement('img');
            img_src.src = json.data[i].image_url;
            img_src.className = 'plant-image';

            let div_plant_info = document.createElement('div');
            div_plant_info.className = 'plant-info';
            
            let plant_name = document.createElement('h2');
            let common_name = document.createTextNode(json.data[i].common_name);
            let plant_data = document.createElement('p');
            let line_break = document.createElement('br');
            let plant_family = document.createTextNode(json.data[i].family);
            let plant_genus = document.createTextNode(json.data[i].genus);

            let more_button = document.createElement('button');
            more_button.className = 'more-button';
            more_button.onclick = function() { plantDetail() };
            //more_button.textContent = 'More Info';
            more_button.textContent = json.data[i].links.self;
            more_info_link = json.data[i].links.self;      

            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_image).appendChild(img_src);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_name).appendChild(common_name);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(plant_family);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(line_break);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(plant_genus);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(more_button);
          } // end loop

        }); // end async function

// new function triggerd by onCLick to get item detail info

function plantDetail(){
  document.getElementById('plants').innerHTML = ""; // remove contents from div id plants
  console.log(more_info_link); // confirm it worked in the console

  /*

  ok, so dont forget to create a new call to a new endpoint and concatonate together a new URL and then build your DOM objects. 

  */

}