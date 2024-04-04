import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMember } from "../../Data";
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">کاربران تازه وارد</span>
            <ul className="widgetSmList">

            {newMember.map(user => (



                <li key={user.id} className="widgetSmListItem">
                    <img className="widgetSmImg" src={user.img} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">{user.userName}</span>
                        <span className="widgetSmUserTitle">{user.title}</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                    </button>
                </li>
            ))}
                
            </ul>
        </div>
    );
}
