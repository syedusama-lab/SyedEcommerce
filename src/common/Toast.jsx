import { useEffect } from "react";
import { toast } from "react-toastify";

const Toast = (props) => {
  debugger;
  const { message, type, position } = props;

  const notify = () => toast("asdasd");

  useEffect(() => {
    notify();
  });
};

export default Toast;
