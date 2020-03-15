import { log } from "aftc-modules";

export class NavigationHandler {

    // var defs
    dom = {
        home: false,
        about: false,
        contact: false,
        nav: false
    }

    siteName = "PureJS SPA";

    siteDomain = "dev1.com";
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    constructor() {
        this.dom.home = document.getElementById("home");
        this.dom.about = document.getElementById("about");
        this.dom.contact = document.getElementById("contact");
        this.dom.nav = document.getElementById("nav");

        let navItems = this.dom.nav.getElementsByTagName("a");

        for (let i = 0; i < navItems.length; i++) {
            let navItem = navItems[i];
            navItem.addEventListener("click", (e) => {
                // Prevent browser from redirecting on link click
                e.preventDefault();
                this.navigateTo(e.target.href);
            });
        }

        // Prevent browser from reloading on history -1 +1
        window.onpopstate = (e) => {
            e.preventDefault();
            log(e);
        }

        // Load browsers route - start page choice
        let route = this.getRoute();
        this.showPage(route);

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    navigateTo(link) {
        let route = this.getRoute(link);

        this.showPage(route);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    showPage(route) {
        // Set browser title via history push state (same as old flash days programming js)
        let title = "";

        if (route == "") {
            title = this.siteName;
        } else {
            title = this.siteName + " - " + route;
        }

        let state = {
            "pageTitle": title
        }

        history.pushState(state, title, route)
        document.title = title;

        // show appropriate page
        // Your simple router
        switch (route) {
            case "":
                this.dom.home.style.display = "block";
                this.dom.about.style.display = "none";
                this.dom.contact.style.display = "none";
                break;
            case "about":
                this.dom.home.style.display = "none";
                this.dom.about.style.display = "block";
                this.dom.contact.style.display = "none";
                break;
            case "contact":
                this.dom.home.style.display = "none";
                this.dom.about.style.display = "none";
                this.dom.contact.style.display = "block";
                break;

        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    getRoute(link) {
        if (link == "" || !link || link == undefined) {
            link = self.location.href;
        }

        let route = "";
        route = link.replace("http://", "");
        route = route.replace("https://", "");
        route = route.replace("www", "");
        route = route.replace(this.siteDomain + "/", "");

        // log("route = " + route);

        return route;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




}