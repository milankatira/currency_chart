import { Bar, Line, Pie } from "react-chartjs-2";

function Chart({ chartData, chartType, options }) {
  return (
    <>
      {chartType === "bar" && <Bar data={chartData} options={options} />}
      {chartType === "line" && <Line data={chartData} options={options} />}
      {chartType === "pie" && <Pie data={chartData} options={options} />}
    </>
  );
}

export default Chart;
