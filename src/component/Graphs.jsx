import React, { useState } from "react";

const Graphs = () => {
	const [data, setData] = useState({
		u1: 0,
		u2: 0,
		u3: 0,
		u4: 0,
		u5: 0,
		v1: 0,
		v2: 0,
		v3: 0,
		v4: 0,
		v5: 0,
	});

	const data2 = {
		u1: Math.round((1 / data.u1 + Number.EPSILON) * 1000) / 1000,
		u2: Math.round((1 / data.u2 + Number.EPSILON) * 1000) / 1000,
		u3: Math.round((1 / data.u3 + Number.EPSILON) * 1000) / 1000,
		u4: Math.round((1 / data.u4 + Number.EPSILON) * 1000) / 1000,
		u5: Math.round((1 / data.u5 + Number.EPSILON) * 1000) / 1000,
		v1: Math.round((1 / data.v1 + Number.EPSILON) * 1000) / 1000,
		v2: Math.round((1 / data.v2 + Number.EPSILON) * 1000) / 1000,
		v3: Math.round((1 / data.v3 + Number.EPSILON) * 1000) / 1000,
		v4: Math.round((1 / data.v4 + Number.EPSILON) * 1000) / 1000,
		v5: Math.round((1 / data.v5 + Number.EPSILON) * 1000) / 1000,
	};

	const handleChange = (input) => (event) => {
		setData({ ...data, [input]: event.target.value });
	};

	return (
		<div className="container">
			<h2>Table 1</h2>

			<table class="table">
				<thead>
					<tr>
						<th>u(cm)</th>
						<th>v(cm)</th>
						<th>1/u</th>
						<th>1/v</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input
								value={this}
								name="u1"
								type="number"
								onChange={handleChange("u1")}
								value={data.u1}
								className="form-controls"
							/>
						</td>
						<td>
							{" "}
							<input
								value={this}
								name="v1"
								type="number"
								onChange={handleChange("v1")}
								value={data.v1}
								className="form-controls"
							/>
						</td>
						<td>{data2.u1}</td>
						<td>{data2.v1}</td>
					</tr>

					<tr>
						<td>
							<input
								value={this}
								name="u2"
								type="number"
								onChange={handleChange("u2")}
								value={data.u2}
								className="form-controls"
							/>
						</td>
						<td>
							{" "}
							<input
								value={this}
								name="v2"
								type="number"
								onChange={handleChange("v2")}
								value={data.v2}
								className="form-controls"
							/>
						</td>
						<td>{data2.u2}</td>
						<td>{data2.v2}</td>
					</tr>

					<tr>
						<td>
							<input
								value={this}
								name="u3"
								type="number"
								onChange={handleChange("u3")}
								value={data.u3}
								className="form-controls"
							/>
						</td>
						<td>
							{" "}
							<input
								value={this}
								name="v3"
								type="number"
								onChange={handleChange("v3")}
								value={data.v3}
								className="form-controls"
							/>
						</td>
						<td>{data2.u3}</td>
						<td>{data2.v3}</td>
					</tr>

					<tr>
						<td>
							<input
								value={this}
								name="u4"
								type="number"
								onChange={handleChange("u4")}
								value={data.u4}
								className="form-controls"
							/>
						</td>
						<td>
							{" "}
							<input
								value={this}
								name="v4"
								type="number"
								onChange={handleChange("v4")}
								value={data.v4}
								className="form-controls"
							/>
						</td>
						<td>{data2.u4}</td>
						<td>{data2.v4}</td>
					</tr>

					<tr>
						<td>
							<input
								value={this}
								name="u5"
								type="number"
								onChange={handleChange("u5")}
								value={data.u5}
								className="form-controls"
							/>
						</td>
						<td>
							{" "}
							<input
								value={this}
								name="v5"
								type="number"
								onChange={handleChange("v5")}
								value={data.v5}
								className="form-controls"
							/>
						</td>
						<td>{data2.u5}</td>
						<td>{data2.v5}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Graphs;
