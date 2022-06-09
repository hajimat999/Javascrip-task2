if(confirm('Do You Want To See The Website')===true){
    alert('WELCOME!')
}
else{
    alert('Try To Find An Another Website')
    document.body.style.display='none'
}
var age = prompt('Please, Enter Your Age')
if(age <= 18){  
    document.getElementById("h").innerHTML = 'You Are Too Young.'
}
else{
    document.getElementById("h").innerHTML = 'WELCOME TO OUR WEBSITE'
}
function Mode(){
    var bodyColor = document.getElementById('body');
    var icon = document.getElementById('icon')
    if(bodyColor.style.backgroundColor ==='black'){
        bodyColor.style.backgroundColor = 'white'
        bodyColor.style.color ='black'
        icon.className="fa-solid fa-moon"
        
    }
    else{
        bodyColor.style.backgroundColor = 'black'
        bodyColor.style.color ='white'
        icon.className = 'fa-solid fa-lightbulb'
    }
}
function AddUser(){
    var groupName = document.getElementById("input").value;
    var span = document.getElementById('groupname')
      
    if(groupName.trim().length == 4 && Number.isInteger(Number(groupName.trim().slice(1))) && typeof(groupName.trim().charAt(0)) === 'string'){

         span.innerHTML = groupName;
         if(groupName.trim().slice(-3, -2) === '1')
         {
            span.style.color='yellow'  
         }
         else if(groupName.trim().slice(-3, -2) === '2')
         {
            span.style.color='red' 

         }
         else if(groupName.trim().slice(-3, -2) === '3')
         {
            span.style.color='black' 
         }
         else{
            span.innerHTML ="Group was not found"
            span.style.color='red'
         }
    }
    else{
       span.innerHTML = 'Group was not found ....';
       span.style.color='red'
    }
    
    

}