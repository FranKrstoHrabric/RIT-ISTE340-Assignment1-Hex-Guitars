/**
 * This is pplication's entry point based on the MVC architectural pattern.
 * The controller that represents the brains of the application is being 
 * initialized and connects the model and the view. 
 * 
 * The controller is used to intermediate between the view and the model. 
 * The controller monitors user interaction with the view and communicates 
 * any changes to the model.
 */
import {GuitarController} from './controller/GuitarController.js';
import {GuitarView} from './view/GuitarView.js';
import {GuitarModel} from './model/GuitarModel.js';



const app = new GuitarController(new GuitarModel('1', '1', '1'), new GuitarView());

