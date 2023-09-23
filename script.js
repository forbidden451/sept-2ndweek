let arr=[];
document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON data from your server or an API
    fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json")
        .then(response => response.json())
        .then(data => {
            // Reference to the table body
            arr=data;
            renderData();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

});

function renderData() {
    const tbody = document.querySelector("#studentTable tbody");

    tbody.innerHTML="";
    // data.sort((a, b) => a.class - b.class);
    // Loop through the JSON data and create table rows
    arr.forEach(student => {
        const row = document.createElement("tr");

        const id = document.createElement("td");
        id.textContent = student.id;

        // Create table cells and populate them with data
        const nameCell = document.createElement("td");
        nameCell.textContent = student.first_name + " " +student.last_name;

        const gender = document.createElement("td");
        gender.textContent = student.gender;

        const classs = document.createElement("td");
        classs.textContent = student.class; 

        const marks = document.createElement("td");
        marks.textContent = student.marks;  

        const passing = document.createElement("td");
        passing.textContent = student.passing;  

        const email = document.createElement("td");
        email.textContent = student.email;     

        // Append cells to the row
        row.appendChild(id);
        row.appendChild(nameCell);
        row.appendChild(gender);
        row.appendChild(classs);
        row.appendChild(marks);
        row.appendChild(passing);
        row.appendChild(email);

        // Append the row to the table body
        tbody.appendChild(row);
    });
}


document.getElementById("sortGender").addEventListener("click", function () {
    function renderDatabyGender() {

        // const thead = document.querySelector("#studentTable thead");

        var thead = document.createElement("#genderTable thead");

        // Create a row for column headers
        var headerRow = document.createElement("tr");

        // Define the column headers
        var headers = ["ID","Name", "Gender", "Class","Marks","Passing","Email"];

        // Create th elements for each header
        headers.forEach(function (headerText) {
            var th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Append the header row to the thead
        thead.appendChild(headerRow);

        // Get the table by its ID
        var table = document.getElementById("studentTable");

        // Append the thead to the table
        table.insertBefore(thead, table.firstChild);
    }
});


document.getElementById("sortButton").addEventListener("click", function () {
   
    arr.sort((a, b) => a.marks - b.marks);

    // Re-render the sorted data
    renderData();
});


document.getElementById("sortbyAtoZ").addEventListener("click",function(){
    function compareByName(a, b) {
        const nameA = a.first_name.toLowerCase();
        const nameB = b.first_name.toLowerCase();
    
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    }
    
    // Sort the jsonArray alphabetically by name
    arr.sort(compareByName);
    renderData();
});


document.getElementById("sortbyZtoA").addEventListener("click",function(){
    function compareByName(a, b) {
        let aname=a.first_name+a.last_name;
        let bname=b.first_name+b.last_name;
        const nameA = aname.toLowerCase();
        const nameB = bname.toLowerCase();
    
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
    }
    
    // Sort the jsonArray alphabetically by name
    arr.sort(compareByName);
    renderData();
});


document.getElementById("passing").addEventListener("click",function(){
    const tbody = document.querySelector("#studentTable tbody");

    tbody.innerHTML="";

    var passingStudents = arr.filter(student => student.passing === true);

    passingStudents.forEach(student => {
        const row = document.createElement("tr");

        const id = document.createElement("td");
        id.textContent = student.id;

        // Create table cells and populate them with data
        const nameCell = document.createElement("td");
        nameCell.textContent = student.first_name + " " +student.last_name;

        const gender = document.createElement("td");
        gender.textContent = student.gender;

        const classs = document.createElement("td");
        classs.textContent = student.class; 

        const marks = document.createElement("td");
        marks.textContent = student.marks;  

        const passing = document.createElement("td");
        passing.textContent = student.passing;  

        const email = document.createElement("td");
        email.textContent = student.email;     

        // Append cells to the row
        row.appendChild(id);
        row.appendChild(nameCell);
        row.appendChild(gender);
        row.appendChild(classs);
        row.appendChild(marks);
        row.appendChild(passing);
        row.appendChild(email);

        // Append the row to the table body
        tbody.appendChild(row);
    });

});


document.getElementById("byClass").addEventListener("click", function () {
   
    arr.sort((a, b) => a.class - b.class);

    // Re-render the sorted data
    renderData();
});


// document.getElementById("byGender").addEventListener("click", function () {
   
//     tbody.innerHTML=""
// });