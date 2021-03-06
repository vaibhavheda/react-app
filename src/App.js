import { memo, useState } from "react";
import "./App.css";
import CreateChart from "./Components/CustomChart";
import { labels } from "./ChartConfig";

const App = () => {
	const [dataSet, setDataSet] = useState(
		Object.fromEntries(labels.map((label) => [label, ""]))
	);
	const [dataSetChart, setDataSetChart] = useState(null);

	const isPositiveAndNonZero = (val) => {
		return val === "" || (val !== "" && parseInt(val) >= 0);
	};
	const validateDataSet = (data) => {
		return (
			data !== null &&
			Object.entries(data).every((element) =>
				isPositiveAndNonZero(element[1])
			)
		);
	};

	const handleChange = (evt) => {
		let value = evt.target.value.replace(/\+|-/gi, "");

		setDataSet({
			...dataSet,
			[evt.target.name]: value,
		});
	};

	const generateFieldsForm = () => {
		return (
			<div className={"FieldsSection"}>
				{labels.map((eachLabel) => (
					<div key={eachLabel} className={"InputGroup"}>
						<label className="InputLabel" htmlFor={eachLabel}>
							{eachLabel}
						</label>
						<br />
						<input
							className="InputField"
							type="number"
							name={eachLabel}
							value={dataSet[eachLabel]}
							min={0}
							// pattern="[0-9]"
							placeholder={"Enter a number"}
							onChange={(e) => {
								handleChange(e);
							}}
						/>
					</div>
				))}

				<br />
				<div className="SubmitButton">
					<button
						onClick={() => {
							if (validateDataSet(dataSet)) {
								// data.map((label) => [label, 0])

								const data = Object.fromEntries(
									Object.entries(dataSet).map((obj) => [
										obj[0],
										obj[1] === "" ? 0 : parseInt(obj[1]),
									])
								);
								setDataSetChart(data);
							}
						}}
					>
						Submit
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className="MainScreen">
			{generateFieldsForm()}
			<div className={"ChartSection"}>{CreateChart(dataSetChart)}</div>
		</div>
	);
};

export default memo(App);
