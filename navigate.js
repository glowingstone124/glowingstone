var navstat = false
function navigate(){
    const navigatebtn = document.querySelector('.navigatebtn');
    const navigate = document.getElementById('navigation');
    if (navstat){
        navigate.classList.remove('display');
        navstat = false
    }
    else {
        navigate.classList.add('display');
        navstat = true
    }
}