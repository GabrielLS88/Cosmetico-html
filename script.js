const myHeaders = new Headers();
myHeaders.append("Authorization", "Key Y29zbWV0aWNhZmFybWFjaWE6N0ZaZTZDazJOdkxGRG9PZWNyU3o=");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "__cf_bm=Qt4TVb34fQwIfMk3Hp.supp39_vYJGsqF1bm9X5fC60-1751920363-1.0.1.1-0bU7xCwOe2OGrmg2TKKh05qE9pallRsO5jgCXBBvD1ZuShiwMOgpqd85Iz6xl9TdrnwO9nXf1HJP.gQvZd4QGj2Mguw_N82cfOCsySJVJGs");

const raw = JSON.stringify({
    "id": "d3baae1c-3217-4c83-9c1c-37c6c54f5cd9",
    "method": "get",
    "uri": "/threads/5534997801829@wa.gw.msging.net"
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

const response = fetch("https://cosmetica.http.msging.net/commands", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


const paramsUrl = new URLSearchParams(window.location.search);
const phoneUser = paramsUrl.get('phone');
const nameUser = paramsUrl.get('name');


function decodeBase64(input) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 === 1) {
        throw new Error('"decodeBase64" failed: The string is not correctly encoded.');
    }

    for (let bc = 0, bs = 0, buffer, i = 0;
        (buffer = str.charAt(i++));
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        buffer = chars.indexOf(buffer);
    }

    return output;
}

