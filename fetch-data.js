async function fetchUserData(){
    const apiUrl='https://jsonplaceholder.typicode.com/users';
    let dataContainer=document.getElementById('api-data');
    const userList=document.getElementById('user');
    try{

        const response=await fetch(apiUrl);

        if(!response.ok){
            throw new Error('Network response was not ok');
        }
       const users = await response.json();
       dataContainer.innerHTML='';

    const userList=document.createElement('ul');
    users.array.forEach(user => {
        const listItem = document.createElement('li'); 
        userList.appendChild(listItem);


    }); 
    dataContainer.appendChild(userList);
    }catch (error){
        dataContainer.innerHTML='Failed to load user data';

    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    fetchuserData();
})