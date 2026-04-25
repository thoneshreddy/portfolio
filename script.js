let pageLoad = () => {
alert("Welcome to my portfolio! I hope you enjoy exploring my projects and learning more about me. Feel free to reach out if you have any questions or would like to connect!");
}
let message = (e)=>{
   
    e.preventDefault();
    let email = document.querySelector("input[type='email']");
    let messages = document.querySelector("textarea");
    let name = document.querySelector("input[type='text']");
    

 if(!email.value || !messages.value || !name.value  ){
        alert("Please fill in all fields before sending your message.");
        return;
    }
    else if(!email.value.includes("@") || !email.value.includes(".") )
        { 
            email.style.border = "2px solid red";
    alert("Please enter a valid email address.")
        }
    else
    alert ("Thank you for your message! I will get back to you as soon as possible.");
}