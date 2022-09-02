import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function Notification(type, message) { 
  switch (type) {
    case "info":
      NotificationManager.info(message);
      break;
    case "warning":
      NotificationManager.warning(message);
      break;
    case "error":
      NotificationManager.error(message);
      break;
    case "success":
      NotificationManager.success(message);
      break;
  }
}

export default Notification;
