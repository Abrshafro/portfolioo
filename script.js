// Header toggle

let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect


const inputs = ['CS Student!', 'Photographer!' ,'Photo Editor!', 'Tutor!'];
let changingElement = document.querySelector('.auto-input');
let charIndex = 0; 
const change_input = (i) => {
    changingElement.innerHTML = inputs[i] 
}


setInterval(() => {
    let index = Math.floor(Date.now() / 1000) % inputs.length;
    change_input(index);
}, 1200); 

//Active Link state on scroll

//Get All Links
let navlinks=document.querySelectorAll('nav ul li a')
//Get All sections
let sections=document.querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrollpos = window.scrollY + 20
    sections.forEach(section=>{
        if(scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});