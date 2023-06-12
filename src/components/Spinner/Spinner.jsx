import React, {useState, useEffect} from "react";
import videoMakelaardij from "../../assets/Applicatie.mp4";
import {BarLoader, ClipLoader, DotLoader, FadeLoader, PropagateLoader, PulseLoader, RingLoader} from "react-spinners";
import "./Spinner.css";

// npm install --save react-spinners

function Spinner() {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    },[])

    return (
      <div className="spinner">
          {
              loading?

                  // <ClipLoader
                  //     color={"#black"}
                  //     loading={loading}
                  //     size={50}
                  //     aria-label="Loading Spinner"
                  //     data-testid="loader"
                  // />

                  // <PropagateLoader loading={loading}  size={15}/>

                  // <RingLoader loading={loading} size={105}/>

                  // <PulseLoader loading={loading} size={15}/>

                  <FadeLoader loading={loading} size={35}/>

                  // <DotLoader loading={loading} size={75}/>

                  // <FadeLoader loading={loading} size={55}/>

                  :
                  <video src={videoMakelaardij} autoPlay playsInline={true} loop muted typeof='mov'></video>
          }

      </div>
    );
}

export default Spinner;
