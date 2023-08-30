const dealFormButton = document.getElementById("button-post");

dealFormButton.addEventListener('click', async () => {
    const dealTitle = document.getElementById('deal-title').value;
    const dealInfo = document.getElementById('deal-info').value;
    const dealPrice = document.getElementById('deal-price').value;
    const dealImage = document.getElementById('image_url').value;
    const dealLocation = document.getElementById('deal-location').value;

    const isValidTitle = /^[A-ZА-Я][a-zа-я]*$/.test(dealTitle);
    const isValidLocation = /^[A-ZА-Я][a-zа-я]*$/.test(dealLocation);
    const isValidLink = /^https?:\/\/\S+$/.test(dealImage);
    const isValidPrice = /^\d+$/.test(dealPrice);

    let errorMessage = "";

    if (!isValidTitle) {
        errorMessage += "Please use a capital letter at the beginning of the title. <br>";
    }

    if (!isValidLocation) {
        errorMessage += "Please use a capital letter at the beginning of the location. <br>";
    }

    if (!isValidLink) {
        errorMessage += "Please enter a valid link. <br>";
    }

    if (!isValidPrice) {
        errorMessage += "Please enter a valid price (use digits only). <br>";
    }

    if (errorMessage) {
        const messageWrapper = document.getElementById("post-message");
        messageWrapper.innerHTML = errorMessage;
        return;
    }

    const confirmed = window.confirm("Are you sure you want to submit the data?");

    const deal = {
        title: dealTitle,
        price: dealPrice,
        image_url: dealImage,
        info: dealInfo,
        location: dealLocation,
    };

    try {
        const response = await fetch('https://64ec612af9b2b70f2bfa32ec.mockapi.io/deals', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deal)
        });

        const data = await response.json();

        if (data) {
            alert('Position was inserted');
            if (window.confirm('Data inserted successfully. Click OK to go to another page.')) {
                window.location.replace('./index.html');
            }
        }
    } catch (err) {
        console.log('err', err);
        const messageWrapper = document.getElementById("post-message");
        messageWrapper.innerHTML = "Deal was NOT inserted, ERROR";
    }
});
