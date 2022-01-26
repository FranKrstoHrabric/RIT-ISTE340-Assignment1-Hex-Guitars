/**
 * Class that represents the application view. The view displays information 
 * contained in the model: type & color. The view does not obtain the information 
 * directly from the model, it uses the controller as a mediator which instructs 
 * it when and what to display. 
 * 
 * The view holds references to all UI elements with which the user interacts with
 * AND for which the event-handling mechanism needs to be implemented.
 */
class GuitarView {
    constructor() {
        this.guitarForm = document.getElementById("form-guitar");
        this.guitarDiv = document.getElementById("div-guitar");
    }

    /**
     * Renders the image based on the model data.
     */
    renderGuitar(body, color, head) {
        //let imgSrc = `./images/sg-mahogony-acdc.png`;
        let imgSrc = `./images/${body}-${color}-${head}.png`;
        this.guitarDiv.innerHTML = `<img src='${imgSrc}' alt='guitar'>`;
    }
}