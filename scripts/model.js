export default class Model {
    constructor({
        onTextUpChange,
        onTextDownChange, 
        onOptionsSet,
        onPutCurrentImg}) {
        this.mem = {
            textUp: '',
            textDown: '',
            memImg: '',
        };

        this.options = [];

        this.onTextUpChange = onTextUpChange;
        this.onTextDownChange = onTextDownChange;
        this.onOptionsSet = onOptionsSet;
        this.putCurrentImg = onPutCurrentImg
    }

    setTextUp(text) {
        this.mem.textUp = text;
        this.onTextUpChange(this.mem.textUp);
    }

    setTextDown(text) {
        this.mem.textDown = text;
        this.onTextDownChange(this.mem.textDown);
    }

    setMemImgs(memes) {
        memes.forEach(item => {
            this.options.push(item);
        });
        this.onOptionsSet(this.options);
    }

    setCurrentImg(value) {
        this.options.forEach(option => {
            if (option.id == value) {
                this.putCurrentImg(option.url);
            }
        });
    }
}