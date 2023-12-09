import {initializeApp} from "firebase/app";
import auth from "firebase/auth";

const app = initializeApp({
    apiKey: process.env.React_App_Api_Key,
  authDomain: process.env.React_App_AuthDomain,
  projectId: process.env.React_App_ProjectId,
  storageBucket: process.env.React_App_StorageBucket,
  messagingSenderId: process.env.React_APP_MessagingSenderId,
  appId: process.env.React_APP_AppId
});
app.auth()
export a
export default app;