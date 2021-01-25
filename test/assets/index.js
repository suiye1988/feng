function main() {
    var imagesCommon = [
        {
            tagName: "img",
            attrs: {
                src: "./images/img.png",
                onclick: "window.location.href='https://wwww.example.com'",
                style: "height: 100%; width: 100%"
            }
        },
        {
            tagName: "img",
            attrs: {
                src: "./images/img_1.png",
                onclick: "window.location.href='https://wwww.example.com'",
                style: "height: 100%; width: 100%"

            }
        },
        {
            tagName: "img",
            attrs: {
                src: "./images/img_2.png",
                onclick: "window.location.href='https://wwww.example.com'",
                style: "height: 100%; width: 100%"

            }
        }
    ];

    //var imagesCommon = ["./images/img.png", "./images/img_1.png", "./images/img_2.png"];


    var root = document.getElementById("root");

    function appendContainer(text) {
        var container = document.createElement("div");
        container.className = "container";

        root.appendChild(container);

        if (text) {
            var introduce = document.createElement("div");
            introduce.className = "introduce";
            var textNode = document.createTextNode(text);
            introduce.appendChild(textNode);
            container.appendChild(introduce);
        }
        return container;
    }

    var fns = [
        function () {
            var text = "";
            var container = appendContainer(text);
            var awesomeSlider = new AwesomeSlider(imagesCommon, container, {
                ratio: 2.36,
            });
        }
    ];

    for (var i = 0; i < fns.length; i++) {
        fns[i]();
    }
}

function indicator() {
    var text = "";
    var wrap = null;
    return {
        style: function () {
            text = this.options.initIndex + 1 + " / " + this.realLen;
            wrap = document.createElement("div");
            wrap.className = "custom-indicator-wrap";
            var textNode = document.createTextNode(text);
            wrap.appendChild(textNode);
            this.eleCollections.listWrap.appendChild(wrap);
        },

        active: function () {
            text = this.current + " / " + this.realLen;
            wrap.innerText = text;
        }
    };
}

function manual() {
    var previous = document.createElement("div");
    previous.className = "manual-btn manual-previous";

    var next = document.createElement("div");
    next.className = "manual-btn manual-next";

    return {
        previous: previous,
        next: next
    };
}

function imageDownloading() {
    var ele = document.createElement("div");
    ele.className = "image-downloading";
    var text = document.createTextNode("loading...");
    ele.appendChild(text);
    return ele;
}

function imagePlaceholder() {
    var ele = document.createElement("div");
    ele.className = "image-placeholder";
    var text = document.createTextNode("error");
    ele.appendChild(text);
    return ele;
}

function readyGo(func) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", func);
    } else {
        func();
    }
}

readyGo(main);
