import dbServices from "./dbServices.js";

const services = {
	db: null,
	init: async () => {
		services.db = await dbServices.init();
	}
}

export default services
