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
            'Updraft': 'Press the [Q] button to jump high into the air. Can be used to climb to high positions or surprise enemies from above. Good combined with smoke so your jump is invisible.',
            'Tailwind': 'Press the [E] button to do a quick dash in the desired direction. Useful for dodging attacks or performing surprise attacks. Can be directed with the movement buttons.',
            'Cloudburst': 'Press the [C] button to throw a smoke cloud that obscures vision. The smoke will expand after a few seconds. Use it to block enemy sight lines or cover team movements.',
            'Blade Storm': 'Press the [X] key to activate the flying knives. Left click the mouse to throw the knives, or right click to throw all the knives at once. The knives will return after killing an enemy.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});