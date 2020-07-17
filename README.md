# JSON push to Firestore
This Node script is to push the JSON data to Cloud Firestore

## Steps to follow
- Visit this [link](https://medium.com/@devesu/how-to-upload-data-to-firebase-firestore-cloud-database-63543d7b34c5) and follow the steps untill private key generation (`serviceAccountKey`).

- Clone this repo.

- Rename the serviceAccountKey which you've downloaded to `serviceAccountKey.json`.

- Move the renamed file to the cloned directory.

- Replace the database URL of your firebase project in the place of `<<database url>>` (you can find this URL during generation of Private Account Key).

- Save and Run the file using `node index.js`.