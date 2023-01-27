function uwp_fetch(id, index){

    fetch(UWP_ENDPOINT+id)
    .then((response) => response.json())
    .then((data) => uwp_populate(data, index));
}

function uwp_populate(data, index){
    
    document.querySelectorAll('.uwb-block .uwb-fullname').item(index).innerText = data.first_name + ' ' + data.last_name
    document.querySelectorAll('.uwb-block .short_description').item(index).innerText =  data.short_description
    document.querySelectorAll('.uwb-block .position_in_the_company').item(index).innerText =  data.position_in_the_company
    document.querySelectorAll('.uwb-block .image_of_person').item(index).style.backgroundImage = 'url("'+data.image_of_person+'")'
    document.querySelectorAll('.uwb-block .github').item(index).innerText = data.github
    document.querySelectorAll('.uwb-block .linkedin').item(index).innerText = data.linkedin
    document.querySelectorAll('.uwb-block .xing').item(index).innerText = data.xing
    document.querySelectorAll('.uwb-block .facebook').item(index).innerText = data.facebook
}

//verify if widget has been added to page and populate
document.addEventListener('DOMContentLoaded', () => {

    let elements = document.querySelectorAll('.uwb-user-id');
    let i = 0;
    if(elements){
        elements.forEach(function(el){
            id = el.innerText
            uwp_fetch(id,i)
            i++
        })
    }
    
})