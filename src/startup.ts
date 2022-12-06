import Application from "./app";
import express from "express";

class Startup {
	public static async main(): Promise<void> {
		const application = new Application(express());
		const expressApp = application.start();
		expressApp.listen(expressApp.get("port"), () => {
			console.log(`Server on port ${expressApp.get("port")}`);
		});
	}
}

Startup.main();
