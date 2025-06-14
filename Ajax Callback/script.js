function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            displayData(this);
        }
    };
    xhttp.open("GET", "data.xml", true);
    xhttp.send();
}

function displayData(xml) {
    var table = "<table id='dataTable' border='1' style='margin: auto; border-collapse: collapse;'>";
    table += "<tr><th style='padding: 10px; background-color: #6200ea; color: white;'>Name</th><th style='padding: 10px; background-color: #6200ea; color: white;'>Age</th><th style='padding: 10px; background-color: #6200ea; color: white;'>City</th></tr>";

    var xmlDoc = xml.responseXML;
    var persons = xmlDoc.getElementsByTagName("person");

    for (var i = 0; i < persons.length; i++) {
        var name = persons[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var age = persons[i].getElementsByTagName("age")[0].childNodes[0].nodeValue;
        var city = persons[i].getElementsByTagName("city")[0].childNodes[0].nodeValue;

        table += `<tr><td style='padding: 10px;'>${name}</td><td style='padding: 10px;'>${age}</td><td style='padding: 10px;'>${city}</td></tr>`;
    }

    table += "</table>";
    document.getElementById("data").innerHTML = table;

    // Show the Remove Data button after loading data
    document.getElementById("removeBtn").style.display = "inline-block";
}

// Function to remove the table and hide the button
function removeData() {
    document.getElementById("data").innerHTML = "";
    document.getElementById("removeBtn").style.display = "none";
}