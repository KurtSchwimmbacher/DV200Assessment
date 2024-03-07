import { Pie } from 'react-chartjs-2';


function PieChart({ chartData,chartOpt }) {
  return (
    <>
        <div className='graph-con'>
            <Pie
            data={chartData}
            options={chartOpt}
            />
        </div>
    </>
  );
}

export default PieChart;
