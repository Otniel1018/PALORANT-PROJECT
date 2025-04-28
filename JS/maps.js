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

    const mapsData = {
        icebox: {
            name: "ICEBOX",
            desc: "Map bertema salju dan laboratorium riset yang dipenuhi kontainer es dan struktur vertikal. Dikenal dengan medan pertempuran yang kompleks dan banyak jalur vertikal, Icebox menuntut pemain untuk menguasai pergerakan, posisi tinggi, dan strategi planting yang fleksibel. Dengan dua site yang terbuka dan dinamis, map ini mendorong gameplay cepat dan agresif, cocok untuk duel dan permainan taktis.",
            image: "../ASSET/image/MAPS/icebox_map.webp",
            minimap: "../ASSET/image/MAPS/icebox_minimap.webp"
        },
        ascent: {
            name: "ASCENT",
            desc: "Map klasik dengan nuansa kota Italia, Ascent punya mid control yang sangat penting. Mid terbuka memungkinkan berbagai strategi rotasi dan serangan cepat ke dua site. Pintu besi yang bisa ditutup jadi elemen taktis yang unik, menambah variasi permainan.",
            image: "../ASSET/image/MAPS/ascent_map.webp",
            minimap: "../ASSET/image/MAPS/ascent_minimap.webp"
        },
        bind: {
            name: "BIND",
            desc: "Bind terkenal tanpa area mid dan memiliki dua teleporter satu arah yang ikonik. Map ini mendorong strategi rotasi cepat dan permainan tak terduga. Dua site yang terpisah sepenuhnya membuat kontrol peta jadi krusial untuk menang.",
            image: "../ASSET/image/MAPS/bind_map.webp",
            minimap: "../ASSET/image/MAPS/bind_minimap.webp"
        },
        haven: {
            name: "HAVEN",
            desc: "Satu-satunya map dengan tiga bombsite: A, B, dan C. Haven menantang tim untuk menjaga lebih banyak area sekaligus. Permainan di map ini penuh rotasi dan butuh komunikasi tim yang solid untuk mempertahankan atau menyerang dengan efektif.",
            image: "../ASSET/image/MAPS/haven_map.webp",
            minimap: "../ASSET/image/MAPS/haven_minimap.webp"
        },
        split: {
            name: "SPLIT",
            desc: "Map vertikal dengan ruang sempit dan choke point yang padat. Split menonjolkan kontrol mid dan penggunaan utility yang presisi. Posisi high-ground jadi kunci, bikin duel makin intens dan tak terduga.",
            image: "../ASSET/image/MAPS/split_map.webp",
            minimap: "../ASSET/image/MAPS/split_minimap.webp"
        }
    };

    const mapImage = document.getElementById('map-image');
    const mapName = document.querySelector('.map-display-name');
    const mapDesc = document.querySelector('.map-display-desc');
    let isMinimap = false;
    let currentMap = "icebox";

    function changeMap(mapId) {
        const map = mapsData[mapId];
        if (!map) return;
        
        currentMap = mapId;
        mapImage.src = isMinimap ? map.minimap : map.image;
        mapImage.alt = map.name;
        mapName.textContent = map.name;
        mapDesc.textContent = map.desc;
    }

    document.querySelectorAll('.map-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const mapId = this.dataset.map;
            changeMap(mapId);
        });
    });

    mapImage.addEventListener('click', function() {
        isMinimap = !isMinimap;
        changeMap(currentMap);
    });
});