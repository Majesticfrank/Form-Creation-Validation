document.addEventListener('DOMContentLoaded', function(){

    const form =document.getElementById('registration-form');
    const feedbackDiv=document.getElementById('form-feedback');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const username=document.getElementById('username').value.trim();
        const Email=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim();

        let isValid=true;
        let messages=[];
        if(username.length < 3){
           return isValid=false;
            messages=['username too short'];
               }

               if(!Email.includes('@') && Email.includes('.')){
                return isValid=false;
                messages.push("Email must contain '@' and '.'");

               }
               if(password.length>=8){
                return isValid=true;
               }else{
                isValid=false;
                messages=('password too short, password must be greater than 8 characters');
               }
           feedbackDiv.style.display="block";
           if(isValid=true){
            feedbackDiv.innerHTML="Registration successful!";
            feedbackDiv.style.color="#28a745";
           } else{
            feedbackDiv.innerHTML=messages.join('<br>');
            feedbackDiv.style.color="#dc3545";
           }  
    })

});