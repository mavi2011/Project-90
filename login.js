function addUser(){
    player1_id = document.getElementById("player1_id_input").value;
    player2_id = document.getElementById("player2_id_input").value;

localStorage.setItem("player1_id",player1_id);
localStorage.setItem("player2_id",player2_id);
window.location.replace("game.html");
}