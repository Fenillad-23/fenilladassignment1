export const callAPI = async (method, url, body) => {
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`http://localhost:5001/${url}`, options);
    const data = await response.json();
    return data;
}