import Model from "./model.js";
import View from "./view.js";
import API from "./api.js";


export default class Controller {
    constructor() {
        this.model = new Model({
            onTextUpChange: this.handleModelTextUp,
            onTextDownChange: this.handleModelTextDown,
            onOptionsSet: this.handleSetOptionsInSelect,
            onPutCurrentImg: this.handlePutCurrentImg,
        });
        this.view = new View({
            onTextUpChange: this.handleViewTextUp,
            onTextDownChange: this.handleViewTextDown,
            onSetImg: this.handleViewGetImg,
        });
        this.api = new API();
    }

    init() {
        this.api.setSelect()
            .then(res => {
                this.model.setMemImgs(res.data.memes);
            })
    }

    handlePutCurrentImg = (url) => {
        this.view.setImgUrl(url);
    }

    handleViewGetImg = (value) => {
        this.model.setCurrentImg(value);
    }

    handleSetOptionsInSelect = (options) => {
        this.view.setOptions(options);
    }

    handleViewTextUp = (text) => {
        this.model.setTextUp(text);
    }

    handleViewTextDown = (text) => {
        this.model.setTextDown(text);
    }

    handleModelTextUp = (text) => {
        this.view.setTextUp(text);
    }

    handleModelTextDown = (text) => {
        this.view.setTextDown(text);
    }
}