import {log} from "aftc-modules";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { NavigationHandler } from "./NavigationHandler";

export class Website {

    // var defs
    pages = {
        home: false,
        about: false,
        contact: false
    };

    navHandler = false;
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    constructor(){
        // log("Website()");
        this.pages.home = new Home();
        this.pages.about = new About();
        this.pages.contact = new Contact();

        this.navHandler = new NavigationHandler();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



}