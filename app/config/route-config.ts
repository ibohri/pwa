import { NoteRoutes } from "../routes/note-routes"
import { IRouteProvider } from "../routes/IRouteProvider";

export class RouteConfig {
	routeProviders: IRouteProvider[] = [];

	constructor(private app, private db) {

	}

	registerRoutes() {
		this.routeProviders.push(...[
			// add routes here
			NoteRoutes.register(this.app, this.db)
		])
	}
}