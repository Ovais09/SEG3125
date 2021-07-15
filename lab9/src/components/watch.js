import ReactStopwatch from 'react-stopwatch';
import React from "react"





const Stopwatch = () => (
    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
    //   limit="00:00:10"
      onChange={({ hours, minutes, seconds }) => {
        // do something
      }}
      onCallback={() => console.log('Finish')}
      render={({hours, minutes, seconds }) => {
        return (
          <div>
            <p>
              Hours: { hours }
            </p>
            <p>
              Minutes: { minutes }
            </p>
            <p>
              Seconds: { seconds }
            </p>
          </div>
        );
      }}
     />
  );
   
  export default Stopwatch;