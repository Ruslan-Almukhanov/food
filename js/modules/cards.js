function cards() {
    // Class
     const getData = async (url) => {
        const res = await fetch(url, {});
        
        if (!res.ok) {
            throw new Error('Could not fetch ${url}, status: ${resstatus}');
        }
        return await res.json();
    };

    getData('http://localhost:3000/menu')
    .then((posts) => {
        posts.forEach(({img, imgAlt, title, descr, price}) => {
            new Card(img, imgAlt, title, descr, price).render();
        });
    });
    
    class Card {
        constructor(img, alt, title, content, price) {
            this.img = img;
            this.alt = alt
            this.title = title;
            this.content = content;
            this.price = price;
        }

        render() {
            let element = document.createElement('div'),
                parentBlock = document.querySelector('.menu__item').parentElement;
            element.classList.add('menu__item');
            element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
                    <div class="menu__item-descr">${this.content}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
                `;
            parentBlock.append(element);
        }
    }
}

export default cards;