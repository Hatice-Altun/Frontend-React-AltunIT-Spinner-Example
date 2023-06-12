import React, {useState, useEffect} from "react";
import videoMakelaardij from "../assets/Applicatie.mp4";
import {ClipLoader} from "react-spinners";
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
                  <ClipLoader
                      color={"#black"}
                      loading={loading}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                  />
                  :
                  <video src={videoMakelaardij} autoPlay playsInline={true} loop muted typeof='mov'></video>
          }

      </div>
    );
}

export default Spinner;
