/**
 * Class that represents the application controller. The controller is responsible 
 * for accessing data from the model and displaying it on the view. The controller 
 * is used to intermediate between the view and the model. It monitors user interactions 
 * with the view and communicates any changes to the model. On the other hand, 
 * changes (if any) to the model are observed by the controller and subsequently 
 * reflected in the view.  
 * 
 * The controller contains the code that handles different types of events. The
 * controller's methods are event handlers.
 * 
 * BEWARE of the 'this' keyword. The 'this' keyword behaves a little differently
 * in JavaScript compared to other languages. In most cases, the value of 'this'
 * is determined by how a function is called (runtime binding). Inside a handler,
 * 'this' points to the UI element that triggered the event. Inside an arrow 
 * function, 'this' points to the object that owns/defines the arrow function.
 * Here, that's the AnimalController object.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * @author Fran Krsto Hrabric
 */
export class GuitarController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.guitarForm.addEventListener('submit', this.handleFormSubmit);
    }

    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        event.preventDefault();
        this.view.renderGuitar(this.model.body, this.model.color, this.model.head);
    }
}

