export default class View {
    constructor({ onTextUpChange, onTextDownChange, onSetImg}) {
        this.textUpNode = document.getElementById('text_up');
        this.textDownNode = document.getElementById('text_down');
        this.memTextUpNode = document.querySelector('.mem__textUp');
        this.memTextDownNode = document.querySelector('.mem__textDown');
        this.selectNode = document.getElementById('mem');
        this.memImgNode = document.querySelector('.mem_img');

        this.onTextUpChange = onTextUpChange;
        this.onTextDownChange = onTextDownChange;
        this.onSetImg = onSetImg;

        this.textUpNode.addEventListener('input', () => {
            const textUp = this.textUpNode.value;
            this.onTextUpChange(textUp);
        })

        this.textDownNode.addEventListener('input', () => {
            const textDown = this.textDownNode.value;
            this.onTextDownChange(textDown);
        })

        this.selectNode.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            this.onSetImg(selectedValue);
        })
    }

    setTextUp = (text) => {
        this.memTextUpNode.innerText = text;
    }

    setTextDown = (text) => {
        this.memTextDownNode.innerText = text;
    }

    setOptions = (options) => {
        options.forEach((item, key) => {
            this.selectNode[key] = new Option(item.name, item.id);
        });
    }

    setImgUrl(url) {
        this.memImgNode.style.background = `url(${url})`;
    }
}