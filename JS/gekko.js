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
            'Wingman': 'Press [Q] and FIRE to send Wingman forward—if it sees an enemy, it concusses them; if you’re holding the Spike and aiming at a site, it plants for you. You can also use ALT FIRE to defuse the Spike instead. Retrieve him after use to reuse the skill later.',
            'Dizzy': 'Press [E] to launch Dizzy into the air, who charges briefly then fires blinding blasts at any enemy in sight. After use, Dizzy turns into a glob you can retrieve to recharge the ability. Perfect for pushing into sites or forcing enemies out of position.',
            'Mosh Pit': 'Press [C] and FIRE to throw Mosh like a grenade—when it lands, it splits and explodes in a large radius. Great for clearing tight corners or punishing enemies holding space. Use it post-plant or to stop rushes in choke points.',
            'Thrash': 'Press [X] to deploy Thrash, then FIRE to take control of her and steer manually. Crash her into enemies to detain them temporarily, leaving them vulnerable. Ideal for clearing strongholds or initiating site takes safely.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});