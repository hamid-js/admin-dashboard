import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ReportIcon from "@mui/icons-material/Report";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <NavLink className="link " to="/">
              <li className="sidebarListItem ">
                <LineStyleIcon className="sidebarIcon" />
                خانه
              </li>
            </NavLink>

            <NavLink className="link" to="/products">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                محصولات
              </li>
            </NavLink>
            <NavLink className="link" to="/users">
              <li className="sidebarListItem ">
                <PermIdentityIcon className="sidebarIcon" />
                کاربران
              </li>
            </NavLink>
            <NavLink className="link" to="/newUser">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                کاربر جدید
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">منوی کوچک</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              تحلیل و برسی
            </li>

            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              فروش
            </li>

            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              درآمد
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              گزارشات
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">اعلان</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutlineIcon className="sidebarIcon" />
              ایمیل
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              نتایج
            </li>
            <li className="sidebarListItem">
              <MessageOutlinedIcon className="sidebarIcon" />
              پیام
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">ابزار</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccountsIcon className="sidebarIcon" />
              مدیریت
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              آمار
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              گزارش
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
