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
            'Slow Orb': 'Press [Q] and FIRE to throw an orb that shatters on the ground, creating a slowing field. Enemies inside the field move slower and make louder footsteps. Useful for controlling choke points and punishing aggressive pushes.',
            'Healing Orb': 'Press [E] and FIRE to heal an ally over time. Press ALT FIRE (right-click) to heal yourself instead. Great for sustaining fights or recovering after a tough duel.',
            'Barrier Orb': 'Press [C] and then FIRE (left-click) to place a solid wall that can be rotated before deployment. The wall can block paths, boost allies, or delay enemy pushes. Use it creatively to cut off vision or create unexpected angles.',
            'Resurrection': 'Press [X] to target a fallen teammate and FIRE to bring them back to life with full health. Revive must be used up close and takes a brief moment to complete. Best used when the area is clear or protected by teammates.'
        };
        
        return usages[skillName] || 'Deskripsi penggunaan skill tidak tersedia.';
    }
});