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
            'Paranoia': 'Press [Q] to cast a shadow in a straight line that nearsights and deafens any enemy it touches. Best for initiating or disrupting grouped enemies.',
            'Dark Cover': 'Press [E] and deploy a long-range smoke orb anywhere you can aim, with adjustable distance and height. Use to block angles or isolate duels.',
            'Shrouded Step': 'Press [C] and select a location in your line of sight and press FIRE to teleport there. Use for flanks, escapes, or confusing positioning.',
            'From the Shadows': 'Press [X] to Choose any spot on the map and teleport there after a brief delay. If killed mid-teleport, Shadow returns to his starting point. Excellent for risky flanks or info-gathering.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});