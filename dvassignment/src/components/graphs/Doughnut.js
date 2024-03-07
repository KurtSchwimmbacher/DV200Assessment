import { Doughnut } from 'react-chartjs-2';


function Bargraph({ chartData,chartOpt }) {
  return (
    <>
        <div className='graph-con'>
            <Doughnut
            data={chartData}
            options={chartOpt}
            />
        </div>
    </>
  );
}

export default Bargraph;
