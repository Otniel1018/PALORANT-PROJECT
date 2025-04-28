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
            'Cyber Cage': 'Press [Q] to throw a cage that can be manually activated to create a smoke field that also slows enemies. Pair with trapwires or delay pushes.',
            'Spycam': 'Press [E] to place a camera on a surface and switch to its view. From the cam, FIRE to shoot a tracking dart that reveals enemies. Great for early info and safe scouting.',
            'Trapwire': 'Press [C] and FIRE to place a tripwire between two surfaces. Enemies who break or trip it are revealed and briefly tethered. Use in chokepoints or flanks for maximum value.',
            'Neural Theft': 'Press [X] to Use on a dead enemy to ping all remaining enemies locations twice. Best after winning a duel or in mid-round clutch moments.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});