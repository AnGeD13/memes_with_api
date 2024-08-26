export default class API {
    constructor() {
    }

    setSelect() {
        return fetch("https://api.imgflip.com/get_memes")
                .then(data => data.json())
    }
}