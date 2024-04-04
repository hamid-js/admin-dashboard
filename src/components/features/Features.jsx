import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function Features() {
    return (
        <div className="features">
            <div className="featuresItem">
                <span className="featuresTitle"> بازدهی </span>
            
            <div className="featureContainer">
                <span className="featureMoney">$1,540</span>
                <span className="featureRate">
                -11.4        <ArrowDownwardIcon className="featureIcon negative" /> 
                </span>
                </div>
                <span className="featureDescription"> مقایسه با آخرین ماه </span>
            </div>
            <div className="featuresItem">
                <span className="featuresTitle"> فروش </span>
            
            <div className="featureContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureRate">
                -1.4    <ArrowDownwardIcon className="featureIcon negative" /> 
                </span>
                </div>
                <span className="featureDescription"> مقایسه با آخرین ماه </span>
            </div>
            <div className="featuresItem">
                <span className="featuresTitle"> سود </span>
            
            <div className="featureContainer">
                <span className="featureMoney">$1,212</span>
                <span className="featureRate">
                +2.4     <ArrowUpwardIcon className="featureIcon " /> 
                </span>
                </div>
                <span className="featureDescription"> مقایسه با آخرین ماه </span>
            </div>
        </div>
    );
}
