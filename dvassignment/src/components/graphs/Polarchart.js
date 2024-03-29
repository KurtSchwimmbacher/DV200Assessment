import { PolarArea } from 'react-chartjs-2';


function PolarChart({ chartData,chartOpt }) {
  return (
    <>
        <div className='graph-con'>
            <PolarArea
            data={chartData}
            options={chartOpt}
            />
        </div>
    </>
  );
}

export default PolarChart;
