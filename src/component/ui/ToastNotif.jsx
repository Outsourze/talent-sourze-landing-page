 import { toast } from 'react-toastify';

const toastNotif = ({ text }) => {
    return (
    toast(text, {
        style: {
          background: "#0077B6",
          color: "#fff",
        },
        icon: "✅", // you can keep or change the icon
      })
    )
}

export default toastNotif;