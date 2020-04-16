document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    let view1 = document.querySelectorAll('.geo-button')[0],
        view2 = document.querySelectorAll('.geo-button')[1],
        view3 = document.querySelectorAll('.geo-button')[2],
        map1 = document.querySelectorAll('.map-main')[0],
        map2 = document.querySelectorAll('.map-main')[1],
        map3 = document.querySelectorAll('.map-main')[2],
        city = document.querySelectorAll('.geo-city')[3],
        title = document.querySelectorAll('.geo-title')[3],
        item = document.querySelector('.icon-pos');

        
    try {
        view1.addEventListener('click', ()=> {
            map1.style.display = 'block';
            map2.style.display = 'none';
            map3.style.display = 'none';
            city.textContent = 'london';
            title.textContent = '180-182 Regent Street, London, W1B 5BT';
            item.textContent = '180-182 Regent Street, London, W1B 5BT';
        });
    
        view2.addEventListener('click', ()=> {
            map1.style.display = 'none';
            map2.style.display = 'block';
            map3.style.display = 'none';
            city.textContent = 'new york';
            title.textContent = '109 Columbus Circle, New York, NY 10023';
            item.textContent = '109 Columbus Circle, New York, NY 10023';
        });
    
        view3.addEventListener('click', ()=> {
            map1.style.display = 'none';
            map2.style.display = 'none';
            map3.style.display = 'block';
            city.textContent = 'paris';
            title.textContent = '2133 Rue Saint-Honoré, 75001 Paris';
            item.textContent = '2133 Rue Saint-Honoré, 75001 Paris';
        });
    } catch {}

	let hamburger = document.querySelector('.hamburger'),
        header = document.querySelector('nav'),
        bodyBackground = document.querySelector('.body-background');
        


	hamburger.addEventListener('click', ()=> {
		hamburger.classList.toggle('active');

		if(hamburger.classList.contains('active')) {
			document.body.style.overflow = 'hidden';
            header.style.display = 'flex';
            bodyBackground.style.display = 'block';
		} else {
			document.body.style.overflow = 'visible';
            header.style.display = 'none';
            bodyBackground.style.display = 'none';
		}
	});

	if (window.innerWidth > 767) {
        hamburger.style.display = 'none';
	} else {
        hamburger.style.display = 'block';
	}

	window.addEventListener('resize', ()=> {

		if (window.innerWidth <= 767) {
			hamburger.style.display = 'block';
			if (hamburger.classList.contains('active') === false) {
                header.style.display = 'none';
                bodyBackground.style.display = 'none';
			} else {
				header.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                bodyBackground.style.display = 'block';
			}
		} else if (window.innerWidth > 767) {
			hamburger.style.display = 'none';
			document.body.style.overflow = 'visible';
            header.style.display = 'flex';
            bodyBackground.style.display = 'none';
		}
	});
});