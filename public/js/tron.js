const button = document.getElementById('submit');
        button.addEventListener('click', async event => {
          document.getElementById('plants').innerHTML = "";
          const plant = document.getElementById('plant').value;
          console.log(plant);
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

            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_image).appendChild(img_src);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_name).appendChild(common_name);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(plant_family);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(line_break);
            document.getElementById('plants').appendChild(div_plant).appendChild(div_plant_info).appendChild(plant_data).appendChild(plant_genus);
          }          

        });