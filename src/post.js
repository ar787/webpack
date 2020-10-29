export default class Post {
    constructor(title, data) {
        this.title = title
        this.data = data 
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            data:this.data
        })
    }
}