
function fetchWishlist(profileURL){
    const urlPrefix = 'https://store.steampowered.com/wishlist/';
    const urlSuffix = 'wishlistdata/';

    let url = urlPrefix + profileURL.slice(27, profileURL.length) + urlSuffix;

    fetch(url)
        .then(response => JSON.stringify(response))
        .then(data => console.log(data))
        .catch(error => console.log(error));
      
}