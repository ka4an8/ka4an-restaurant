  document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menuContainer');

    const menuItems = [
        { image: './img/borshch.jpg', title: 'Борщ', price: '60 грн' },
        { image: './img/varenyky.jpg', title: 'Вареники з картоплею', price: '40 грн' },
        { image: './img/holubtsi.jpg', title: 'Голубці', price: '50 грн' },
        { image: './img/salo.jpg', title: 'Сало', price: '35 грн' },
        { image: './img/kotlety.jpg', title: 'Котлети по-київськи', price: '70 грн' },
        { image: './img/deruny.jpg', title: 'Деруни', price: '45 грн' },
        { image: './img/pampushky.jpg', title: 'Пампушки', price: '25 грн' },
        { image: './img/uzvar.jpg', title: 'Узвар', price: '30 грн' },
        { image: './img/syrniki.jpg', title: 'Сирники', price: '55 грн' },
        { image: './img/kompot.jpg', title: 'Компот', price: '20 грн' },
        { image: './img/ukrainian_salad.jpg', title: 'Салат "Осінній"', price: '65 грн' },
        { image: './img/pampushky-sweet.jpg', title: 'Пампушки з часником', price: '30 грн' },
        { image: './img/kasha.jpg', title: 'Каша гречана з медом', price: '40 грн' },
      ];

    menuItems.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col');
      card.innerHTML = `
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Ціна: ${item.price}</p>
          </div>
        </div>
      `;
      menuContainer.appendChild(card);
    });
  });