window.onload = function() {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() =>{
            document.getElementById("loader").style.display ="none";
            let content = document.getElementById("content");
            Content.style.display="block";
            setTimeout(()=>{
            content.style.opacity = "1";
          }, 100); //small delay for smooth fade-in
      }, 700); // Wait for fade-out animation
    }, 3000);// Loader duration
   };























   let slideIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slideIndex = index;
    slides.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % 3;
    showSlide(slideIndex);
}

dots[0].classList.add("active");
setInterval(nextSlide, 3000);













document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");
    const savedContactsList = document.createElement("ul"); 
    document.body.appendChild(savedContactsList); 
  
    // Load saved contacts when the page loads
    loadSavedContacts();
  
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
  
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
  
        if (name && email && message) {
            saveContact(name, email, message);
  
            responseMessage.innerText = "Your message has been saved!";
            responseMessage.style.color = "green";
            form.reset(); 
  
            loadSavedContacts(); 
        } else {
            responseMessage.innerText = "Please fill all fields.";
            responseMessage.style.color = "red";
        }
    });
  
    function saveContact(name, email, message) {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push({ name, email, message });
        localStorage.setItem("contacts", JSON.stringify(contacts));
  
        console.log("Saved contacts:", contacts); 
    }
  
    function loadSavedContacts() {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        savedContactsList.innerHTML = "";
  
        contacts.forEach((contact, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${contact.name}</strong> - ${contact.email} <br> ${contact.message}
                <button class="delete-btn" data-index="${index}">❌</button>`;
            savedContactsList.appendChild(listItem);
        });
  
        // Attach delete event to buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                deleteContact(index);
            });
        });
  
        console.log("Loaded contacts:", contacts); 
    }
  
    // Function to delete a contact
    function deleteContact(index) {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        loadSavedContacts(); 
    }
  });
  
