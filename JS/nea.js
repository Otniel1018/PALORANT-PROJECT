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
            'Relay Bolt': 'Press [Q] and FIRE to throw an energy bolt that bounces once before discharging. On each impact, it releases a concussive burst that affects nearby enemies. Use it to disrupt enemy positions or safely check corners.',
            'High Gear': 'Press [E] to enter sprint mode, letting Nea move rapidly across the map. Press ALT FIRE (right-click) during sprint to slide in the direction she’s moving—slide resets on two kills. Great for repositioning, escaping danger, or chaining fast plays.',
            'Fast Lane': 'Press [C] and FIRE (left-click) to deploy two energy walls that extend forward in parallel lines. These walls block vision and damage any enemies who pass through them. Use it to cut off sightlines during entry or safely push into contested areas.',
            'Overdrive': 'Press [X] to activate Nea’s full power, allowing her to sprint at max speed and fire a high-precision lightning beam. Use FIRE to shoot the beam, which deals continuous damage and resets on each elimination. Ideal for aggressive flanks or clearing multiple targets quickly.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});