export default class Resource {

    constructor(name, label, url, description) {
        this.name = name;
        this.label = label;
        this.url = url;
        this.description = description;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getLabel() {
        return this.label;
    }
    setLabel(label) {
        this.label = label;
    }

    getUrl() {
        return this.url;
    }
    setUrl(url) {
        this.url = url;
    }

    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
}