const CreateBar = (
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
) => {
	return (
		<g key={index}>
			{/* value */}
			<text
				x={x + barWidth / 2}
				y={val[1] > 0 ? y - 5 : y0 + yAxisLength - 5}
				textAnchor="middle"
			>
				{val[1]}
			</text>
			{/* Bar */}
			{val[1] > 0 && (
				<rect
					x={x + padding / 2}
					y={y}
					width={barWidth - padding}
					height={height}
					fill={"orange"}
				/>
			)}
			{/* X -axis label */}
			<text x={x + barWidth / 2} y={xAxisY + 16} textAnchor="middle">
				{val[0]}
			</text>
		</g>
	);
};

export default CreateBar;
