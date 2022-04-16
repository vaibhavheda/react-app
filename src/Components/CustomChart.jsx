import CreateBar from "./CreateBar";
import { CHART_HEIGHT, CHART_WIDTH } from "../ChartConfig";

const CreateChart = (dataSet) => {
	const x0 = 100;
	const xAxisLength = CHART_WIDTH - x0 * 2;

	const y0 = 100;
	const yAxisLength = CHART_HEIGHT - y0 * 2;

	const xAxisY = y0 + yAxisLength;

	const dataYMax = dataSet !== null ? Math.max(...Object.values(dataSet)) : 0;
	const dataYMin = 0;

	const dataYRange = dataYMax - dataYMin;

	const barWidth =
		dataSet !== null ? xAxisLength / Object.keys(dataSet).length : 10;

	const generateAxis = () => {
		return (
			<>
				{/* {x axis} */}
				<line
					x1={x0}
					y1={xAxisY}
					x2={x0 + xAxisLength}
					y2={xAxisY}
					stroke="grey"
				/>
				<text x={x0 + xAxisLength + 5} y={xAxisY + 4}>
					Subject
				</text>

				{/* y axis */}
				<line
					x1={x0}
					y1={y0}
					x2={x0}
					y2={y0 + yAxisLength}
					stroke="grey"
				/>

				<text x={x0} y={y0 - 8} textAnchor="middle">
					Number
				</text>
			</>
		);
	};

	const generateData = () => {
		return (
			<>
				{dataSet !== null &&
					Object.entries(dataSet).map((val, index) => {
						const x = x0 + index * barWidth;
						const yRatio = (val[1] - dataYMin) / dataYRange;

						const y = y0 + (1 - yRatio) * yAxisLength;
						const height = yRatio * yAxisLength;

						const padding = 50;

						return CreateBar(
							index,
							x,
							barWidth,
							val,
							y,
							y0,
							yAxisLength,
							padding,
							height,
							xAxisY
						);
					})}
			</>
		);
	};

	return (
		<svg width={CHART_WIDTH} height={CHART_HEIGHT}>
			{generateAxis()}
			{generateData()}
		</svg>
	);
};

export default CreateChart;
