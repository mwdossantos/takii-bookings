export class WebRequest {
    constructor(url, data, callback, files = []) {
        this.url = url;
        this.data = data;
        this.callback = callback;
        this.files = files;
        this.send()
    }

    send() {
        var expReq = this;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (typeof this.responseText == 'undefined') return false;

            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                expReq.callback(response);
            }

        };

        xhttp.open("POST", this.url, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(this.data));
    }
}

export class GetRequest {

    constructor(url, data, callback = []) {
        this.url = url;
        this.data = data;
        this.callback = callback;
    }

    get() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.responseText);
                expReq.callback(response);
            }
        };
        xhttp.open("GET", this.url, true);
        xhttp.send(JSON.stringify(this.data));
    }

}