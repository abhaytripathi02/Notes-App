// const inputBox = document.querySelector('.input-box');
const button = document.querySelector(".btn");
const deleteNote = document.querySelector('.delete'); 
const notescontainer = document.querySelector(".notes-container");


 button.addEventListener('click', ()=>{
   let inputBox = document.createElement("p");
   let img = document.createElement("img");
   inputBox.className = "input-box";      // insert class = "input-box"
   inputBox.setAttribute("contenteditable", "true");
   img.setAttribute("class", "delete");
   img.src = "images/delete.png";
   notescontainer.appendChild(inputBox).appendChild(img);
 })

 // Using Local Storage to Save Data
  function showData(){
    notescontainer.innerHTML = localStorage.getItem("data")
  }
  showData();
  
  function updateStorage(){
      localStorage.setItem("data", notescontainer.innerHTML);
  }

    //Approach -01
    notescontainer.addEventListener('click', (e)=>{
        if(e.target.tagName === "IMG"){
           e.target.parentElement.remove();   
           updateStorage();         
        }
        else if(e.target.tagName === "P"){
             notes = document.querySelectorAll(".input-box");
             notes.forEach(element => {
                element.onkeyup = function (){
                    updateStorage();
                }
             })
        }
       });
       
       // Used for line break in input-box 
       document.addEventListener("keydown", (event)=>{
        if(event.key === 'Enter'){
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
       })

 //Approach-02:
 // deleteNote.addEventListener('click', ()=>{
 //     inputBox.style.display = "none";
 // })




