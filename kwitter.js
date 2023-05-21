function login(){
 var uname=  document.getElementById('user').value;
 localStorage.setItem('username', uname);
 window.location='kwitter_room.html';
}