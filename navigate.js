var navstat = false
function navigate(){
    const navigatebtn = document.querySelector('.navigatebtn');
    const navigate = document.getElementById('navigation');
    if (navstat){
        navigate.style.display = 'none'
        navstat = false
    }
    else {
        navigate.style.display = 'block'
        navstat = true
    }
}