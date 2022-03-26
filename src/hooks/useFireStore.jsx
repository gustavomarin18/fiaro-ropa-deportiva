import { collection, addDoc } from "firebase/firestore";

import db from "../service/firebase";
import swal from "sweetalert";

const useFireStore = () => {
  const generateOrder = async ({ datos }) => {
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, datos);
      swal({
        title: "tu orden de compra es:" + order.id,
        icon: "success",
        button: "aceptar",
      });
    
    } catch (error) {
      console.log(error);
    }
 
  };

  return {
    generateOrder,
  };
};

export default useFireStore;
