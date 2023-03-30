function change_text() {
    let _name = document.getElementsByClassName("input-fields-input")[0].value;
    console.log(_name);
    document.getElementById("signup-title").innerHTML = "Welcome, " + _name;
}