/**
 * Represents the application model. The model contains the data, the information 
 * regarding the animal such as: type and color. The model can obtain data either 
 * from a database or files, which could be located locally or externally. The 
 * model does not talk directly to a view, instead is made available to a controller 
 * which accesses it when needed. 
 */
 export class GuitarModel{

    
    constructor(body, color, head) {
        this._body = body;
        this._head = head;
        this._color = color;
    }

    //A C C E R S O R S
    get body() {
        return this._body;
    }

    get head() {
        return this._head;
    }

    get color() {
        return this._color
    }

    //M U T A T O R S
    set body(body) {
        this._body = body;
    }

    set head(head) {
        this._head = head;
    }

    set color(color){
        this._color = color;
    }
}