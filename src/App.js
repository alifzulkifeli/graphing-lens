import React, { Fragment } from "react";

import "./App.css";
import Lens from "./component/Lens";
import Graphs from "./component/Graphs";

function App() {
	return (
		<Fragment>
			<div className="row">
				<div className="col-lg-6 col-sm-12">
					{" "}
					<Lens />
				</div>
				<div className="col-lg-6 col-sm-12">
					{" "}
					<Graphs />
				</div>
				<div id="exc">
					<embed src="https://sheet.new" />
				</div>
			</div>
		</Fragment>
	);
}

export default App;
