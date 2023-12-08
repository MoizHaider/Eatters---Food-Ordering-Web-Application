import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.REACT_APP_Api_Key,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId
});

export const auth = getAuth(app);
export default app;