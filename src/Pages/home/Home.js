import React from "react";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { xAxisData } from "../../Data";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import './Home.css'
export default function Home() {
    return (
        <div className="home">
            <Features />
            <Chart grid title="فروش ماهانه" data={xAxisData} dataKey="فروش" />
            <div className="homeWidgets">
                <WidgetLg />
                <WidgetSm />
            </div>
        </div>
    );
}
