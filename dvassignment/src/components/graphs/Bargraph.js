import { Bar } from 'react-chartjs-2';


function Bargraph({ chartData,chartOpt }) {
  return (
    <>
        <div className='graph-con'>
            <Bar
            data={chartData}
            options={chartOpt}
            />
        </div>
    </>
  );
}

export default Bargraph;
