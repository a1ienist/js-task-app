const dealWrapper = document.getElementById('deal-wrapper');

const createImage = (imageUrl) => {
    const image = document.createElement('img');
    image.setAttribute('class', 'deal-image');
    image.src = imageUrl;
    return image;
};

const createDealContentWrapper = (deal) => {
    const wrapper = document.createElement('a');
    wrapper.setAttribute('class', 'deal-content');
    wrapper.href = "./deal.html?dealId=" + deal.id;
    return wrapper;
};

const createTitle = (text) => {
    const title = document.createElement('h1');
    title.innerHTML = text;
    return title;
};

const createPrice = (amount) => {
    const price = document.createElement('h4');
    price.innerHTML = amount;
    return price;
};

const getAllDeals = async () => {
    try {
        const response = await fetch(
            'https://64ec612af9b2b70f2bfa32ec.mockapi.io/deals'
        );
        const deals = await response.json();

        deals.sort((a, b) =>
            parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
        );

        deals.forEach((deal) => {
            const wrapper = createDealContentWrapper(deal);
            const image = createImage(deal.image_url);
            const title = createTitle(deal.title);
            const price = createPrice(deal.price);

            wrapper.appendChild(image);
            wrapper.appendChild(title);
            wrapper.appendChild(price);

            dealWrapper.appendChild(wrapper);
        });
    } catch (error) {
        console.error('Error during deal upload:', error);
    }
};

getAllDeals();