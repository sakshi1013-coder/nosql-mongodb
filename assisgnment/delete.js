import { firebaseConfig } from "./config";

export function deletemessage(docID){
  try{
    firebase
    .firestore()
    .collection('jh-chat').doc(docID).delete();
  }catch (e){
    console.error("error message: "+e);
  }
}