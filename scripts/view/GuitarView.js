/**
 * Class that represents the application view. The view displays information 
 * contained in the model: type & color. The view does not obtain the information 
 * directly from the model, it uses the controller as a mediator which instructs 
 * it when and what to display. 
 * 
 * The view holds references to all UI elements with which the user interacts with
 * AND for which the event-handling mechanism needs to be implemented.
 */
export class GuitarView {
    constructor() {
        this.guitarForm = document.getElementById("form-guitar");
        this.guitarDiv = document.getElementById("div-guitar");
    }

    /**
     * Renders the image based on the model data.
     */
    renderGuitar(o1, o2, o3) {
        //let imgSrc = `./images/sg-mahogony-acdc.png`;
        // let imgSrc = `./images/3dmodels/1-1-1.glb`;
        console.log(o1, o2, o3);
        let imgSrc = `./images/3dmodels/${o1}-${o2}-${o3}.glb`;
        //let imgSrc = `./images/${body}-${color}-${head}.png`;
        this.guitarDiv.innerHTML = `<model-viewer src='${imgSrc}' camera-controls auto-rotate loading="eager" alt='A guitar model'></model-viewer>`;
        
        
    }
}