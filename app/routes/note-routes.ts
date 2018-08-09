import { IRouteProvider } from "./IRouteProvider";

// every route class should have one static register method
export class NoteRoutes implements IRouteProvider {
    constructor(private app, private db) {

    }

    private createRoutes() {
        this.app.get("/notes", (req, res) => {
            res.send("Hi from notes")
        })
    }

    static register(app, db): IRouteProvider {
        const instance = new NoteRoutes(app, db);
        instance.createRoutes();
        return instance;
    }
}