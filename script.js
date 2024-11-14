function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


var typed= new Typed(".text",{
    strings: ["Frontend Developer.","Web Developer.","Full Stack Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", function
    (event) {
    let circle = document.querySelectorAll('.circle');
    circle.forEach(function (progress) {
        let degree = 0;
        var targetDegree = parseInt(progress.getAttribute
            ('data-degree'));
        let color = progress.getAttribute('data-color');
        let number = progress.querySelector('.number');
        var interval = setInterval(function () {
            degree += 1;
            if (degree > targetDegree) {
                clearInterval(interval);
                return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + '<span>%</span>';
            number.style.color = color;
        }, 50)
    })
});



