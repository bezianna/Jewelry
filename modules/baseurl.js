let baseUrl = function() {
    let host = window.location;

    return host.protocol + "//" + host.host;
}

module.exports = baseUrl;