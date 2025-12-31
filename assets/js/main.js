const formHeadingEl = document.getElementById("formHeading");
const submitBtnEl = document.getElementById("submit");
const myFormEl = document.getElementById("myForm");

const mealContainerEl = document.getElementById("mealContainer");



const mealTableBodyEl = document.getElementById("mealTableBody");

// Hide container 
mealContainerEl.style.display = "none";




console.dir(formHeadingEl.innerText.toUpperCase());

//events

formHeadingEl.addEventListener("submit" , ()=> {
    console.log("you clicked the heading");
})


myFormEl.addEventListener("submit", (event) => {
  event.preventDefault(); 

  console.log(event);

  const studentnameEl = document.getElementById("studentName");
  const studentclassEl = document.getElementById("studentClass");
  const studentyearEl = document.getElementById("studentYear");
  const studentfoodEl = document.getElementById("studentFood");
  const snackscountEl = document.getElementById("snacksCount");
  const foodOptionsEl = document.getElementById("foodOptions");
  const alergictermsEl = document.getElementById("alergicTerms");

  
  const studentName = studentnameEl.value;
  const studentClass = studentclassEl.value;
  const studentYear = studentyearEl.value;
  const studentFood = studentfoodEl.value;
  const snacksCount = snackscountEl.value;
  const foodOptions = foodOptionsEl.value;
  const alergicTerms = alergictermsEl.value;

  


  //form validations 
 if (
   studentName.length > 0 &&
   studentClass.length > 0 &&
   studentYear.length > 0
 ) {
   // show meal data div to sgow details when user fil form once/ one by one in table format

   // mealDataEl.style.display = "block";
   // Show container
  mealContainerEl.style.display = "block";

   // table -row

  
   const row = document.createElement("tr");

   row.innerHTML = `
      <td class="border p-2">${studentName}</td>
      <td class="border p-2">${studentClass}</td>
      <td class="border p-2">${studentYear}</td>
      <td class="border p-2">${studentFood}</td>
      <td class="border p-2">${snacksCount}</td>
      <td class="border p-2">${foodOptions}</td>
      <td class="border p-2">${alergicTerms}</td>
    `;

   // Append new row to table
   mealTableBodyEl.appendChild(row);

   // Reset form for next entry
   myFormEl.reset();
 } else {
   // Validation failed
   alert("Please fill in Student Name, Class, and Year.");
 }
  
 
});







 //shwo data from console
//    console.log(
//      `You have selected ${studentName}, ${studentClass}, ${studentYear}, ${studentFood}, ${snacksCount}, ${foodOptions}, ${alergicTerms}`
//    );

//card data style

 // Create card
//    const card = document.createElement("div");
//    card.className =
//      "border  border-gray-300 rounded-md p-4 w-100 text-left shadow-md bg-gray-50";

//    card.innerHTML = `
//       <p class="text-blue-500" >Student Name: ${studentName}</p>
//       <p>Class: ${studentClass}</p>
//       <p>Year:${studentYear}</p>
//       <p>Preferred Food: ${studentFood}</p>
//       <p>Snacks per day: ${snacksCount}</p>
//       <p>Food Options: ${foodOptions}</p>
//       <p>Allergies: ${alergicTerms}</p>
//     `;