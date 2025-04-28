document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-link');
    const backdrop = document.createElement('div');
    backdrop.classList.add('menu-backdrop');
    document.body.appendChild(backdrop);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        backdrop.classList.toggle('active');
        
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    backdrop.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
    });

    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    const form = document.getElementById("form-report");
console.log(form);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("fname").value;
    const email = document.getElementById("femail").value;
    const server = document.getElementById("fserver").value;
    const bug = document.getElementById("fdetailbug").value;
    const checkbox = document.getElementById("fcheckbox");

    if(name == "" || email == "" || bug == "" || !checkbox.checked || server == ""){
        alert("Please fill all the field");
        return;
    }

    if(!email.endsWith("@gmail.com")){
        alert("Email must be end with @gmail.com");
        return;
    }

    alert("Bug reported successfully!");
    this.reset();
});
});
