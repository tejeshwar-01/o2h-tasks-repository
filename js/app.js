const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const darkBtn =
document.getElementById("darkModeBtn");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
? "dark"
: "light"
);
});

const form =
document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

let valid=true;

const name=
document.getElementById("name").value.trim();

const email=
document.getElementById("email").value.trim();

const message=
document.getElementById("message").value.trim();

document.getElementById("nameError").innerText="";
document.getElementById("emailError").innerText="";
document.getElementById("messageError").innerText="";

if(name===""){
document.getElementById("nameError").innerText=
"Name is required";
valid=false;
}

const emailRegex=
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){
document.getElementById("emailError").innerText=
"Invalid Email";
valid=false;
}

if(message===""){
document.getElementById("messageError").innerText=
"Message is required";
valid=false;
}

if(valid){
alert("Form Submitted");
form.reset();
}
});

const blogContainer =
document.getElementById("blogContainer");

async function loadPosts(){

try{

blogContainer.innerHTML="<p>Loading...</p>";

const blogs = [
{
title:"How TaskFlow Improves Productivity",
body:"Learn how teams use TaskFlow to increase efficiency."
},
{
title:"Top 10 Project Management Tips",
body:"Best practices for managing projects successfully."
},
{
title:"Remote Team Collaboration",
body:"Strategies for effective communication and teamwork."
},
{
title:"Automating Daily Workflows",
body:"Save time by automating repetitive tasks."
},
{
title:"Scaling Your Startup",
body:"Tools and techniques for growing your business."
},
{
title:"Data-Driven Decision Making",
body:"Use analytics to improve business outcomes."
}
];

blogContainer.innerHTML="";

blogs.forEach(blog=>{

const div=document.createElement("div");

div.className="blog-card";

div.innerHTML=`
<h3>${blog.title}</h3>
<p>${blog.body}</p>
`;

blogContainer.appendChild(div);

});

}catch{

blogContainer.innerHTML=
"<p>Failed to load posts.</p>";

}
}

loadPosts();