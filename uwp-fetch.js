function uwp_fetch(id){
    console.log(UWP_ENDPOINT+id)

    fetch(UWP_ENDPOINT+id)
    .then((response) => response.json())
    .then((data) => rnb_populate(data));
}

function rnb_populate(data){
    
    console.log(data)
   
    document.querySelector('.uwb-block .uwb-fullname').innerText = data.first_name + ' ' + data.last_name
    document.querySelector('.uwb-block .short_description').innerText =  data.first_name
    document.querySelector('.uwb-block .position_in_the_company').innerText =  data.first_name
    document.querySelector('.uwb-block .image_of_person').style.backgroundImage = 'url("'+data.image_of_person+'")'
    document.querySelector('.uwb-block .github').innerText = data.github
    document.querySelector('.uwb-block .linkedin').innerText = data.linkedin
    document.querySelector('.uwb-block .xing').innerText = data.xing
    document.querySelector('.uwb-block .facebook').innerText = data.facebook
}
