const dealWrapper = document.getElementById('deal-wrapper');

const getAllDeals = async () => {
    try {
        const response = await fetch(
            'https://64ec612af9b2b70f2bfa32ec.mockapi.io/deals'
        );
        const deals = await response.json();

        deals.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));  //price low to high

        deals.forEach((deal) => {
            const image = document.createElement('img'); //image
            image.setAttribute('class', 'deal-image');
            image.src = deal.image_url;


            const wrapper = document.createElement('div'); //wrapper
            wrapper.setAttribute('class', 'deal-content');


            const title = document.createElement('h1'); //title
            title.innerHTML = deal.title;


            const price = document.createElement('h4'); //price
            price.innerHTML = deal.price;


            wrapper.appendChild(image);
            wrapper.appendChild(title);
            wrapper.appendChild(price);

            dealWrapper.appendChild(wrapper);
        });
    } catch (error) {
        console.error('Error fetching deals:', error);
    }
};

getAllDeals();