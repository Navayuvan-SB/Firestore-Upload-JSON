var admin = require("firebase-admin");
const data = require("./data.json");

// Follow the link mentioned and replace the below block of code with your firebase project credentials and give correct path to serviceAccountKey.json

/*=============================
        Block Starts
=============================== */
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dummy-site.firebaseio.com",
});
/*=============================
        Block Ends
=============================== */

// NOTE: DON'T ALTER THE BELOW CODE

// name of the collection
const collectionKey = "articles";

// firestore instance
const firestore = admin.firestore();

const settings = { timestampsInSnapshots: true };

firestore.settings(settings);

if (data && typeof data === "object") {
  Object.keys(data).forEach((docKey) => {
    firestore
      .collection(collectionKey)
      .doc(docKey)
      .set(data[docKey])
      .then((res) => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
}
