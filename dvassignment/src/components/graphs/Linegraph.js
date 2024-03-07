import { Line } from 'react-chartjs-2';


function LineGraph({ chartData,chartOpt }) {
  return (
    <>
        <div className='graph-con'>
            <Line
            data={chartData}
            options={chartOpt}
            />
        </div>
    </>
  );
}

export default LineGraph;
