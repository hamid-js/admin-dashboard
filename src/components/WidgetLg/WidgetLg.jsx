import React from "react";
import "./WidgetLg.css";
import { transActions } from "../../Data";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">آخرین تراکنشها</h3>
      <table className="widgetLgTabl">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">مشتری</th>
          <th className="widgetLgTh">تاریخ</th>
          <th className="widgetLgTh">مبلغ</th>
          <th className="widgetLgTh">وضعیت</th>
        </tr>

        {transActions.map((transAction) => (
          <tr key={transAction.id} className="widgetLgTr">
            <td className="widgetLgUser">
              <img className="widgetLgImg" src={transAction.image} alt="" />
              <span className="widgetLgName">{transAction.customer}</span>
            </td>
            <td className="widgetLgDate">{transAction.date}</td>
            <td className="widgetLgAmount">${transAction.amount}</td>
            <td className="widgetLgSta">
              <Button type={transAction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
