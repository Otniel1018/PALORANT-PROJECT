document.addEventListener("DOMContentLoaded", function() {
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

    document.querySelectorAll('.card-skil').forEach(card => {
        card.addEventListener('click', function() {
            const skillName = this.querySelector('.skil-name').textContent;
            const skillImgElement = this.querySelector('img');
            
            const imgPath = skillImgElement.src;
            const imgName = imgPath.split('/').pop().split('.')[0];
            
            document.querySelector('.skil-display-name').textContent = skillName.toUpperCase();
            document.querySelector('.skil-display-touse').textContent = getSkillUsage(skillName);
            
            const activationImgPath = imgPath.replace(imgName, imgName + '_Activation');
            document.querySelector('.skil-display img').src = activationImgPath;
        });
    });

    function getSkillUsage(skillName) {
        const usages = {
            'Stealth Drone': 'Press [C] then FIRE (left click) to throw the drone forward and immediately control it. Aim the drone at an enemy, then press FIRE again to activate the Suppress pulse and reveal them. Great for scouting and distraction before the team enters the site.',
            'Guided Salvo': 'Press [E] to enter targeting mode and FIRE to select up to two target locations. Once a location is set, press ALT FIRE to launch an automatic missile at it. Great for zoning enemies or limiting movement during retakes/pushes.',
            'Special Delivery': 'Press [Q] then FIRE to launch a sticky grenade that explodes and causes Concuss. The grenade will stick to the first surface it hits. Press ALT FIRE to throw with a single bounce, ideal for reaching closed corners.',
            'Armageddon': 'Press [X] to open the tactical map and FIRE to select the starting point of the attack. Then, FIRE again to determine the end point and start the blast wave attack. Use ALT FIRE (right click) while targeting if you want to cancel the starting point.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});