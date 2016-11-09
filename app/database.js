import React from 'react';
import ReactDOM from 'react-dom';

var initialData = {
"users": {
"1": {
  "_id": 1,
  "fullName": "Someone",
  "feed": 1
},
"2": {
  "_id": 2,
  "fullName": "Someone Else",
  "feed": 2
},
"3": {
  "_id": 3,
  "fullName": "Another Person",
  "feed": 3
},

"4": {
  "_id": 4,
  "fullName": "John Vilk",
  "feed": 4
}
},
"feedItems": {
  "1": {
    "_id": 1,
"likeCounter": [2, 3],
"type": "statusUpdate",
"contents": {
"author": 1,
"postDate": 1453668480000,
"location": "Austin, TX",
"contents": "ugh."
},
"comments": [
{
"author": 2,
"contents": "hope everything is ok!",
"postDate": 1453690800000,
"likeCounter": [2, 3]
},
{
  "author": 3,
  "contents": "sending hugs your way",
  "postDate": 1453690800000,
  "likeCounter": [2]
}
]
}
},
"feeds": {
  "4": {
    "_id": 4,
"contents": [1]
},
"3": {
  "_id": 3,
  "contents": []
},
"2": {
  "_id": 2,
  "contents": []
},
"1": {
  "_id": 1,
      "contents": []
    }
  }
};

var data = JSON.parse(localStorage.getItem('facebook_data'));
if (data === null) {
  data = JSONClone(initialData);
}

function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function readDocument(collection, id) {
  return JSONClone(data[collection][id]);
}

export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  data[collection][id] = JSONClone(changedDocument);
  localStorage.setItem('facebook_data', JSON.stringify(data));
}

export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

export function resetDatabase() {
  localStorage.setItem('facebook_data', JSON.stringify(initialData));
  data = JSONClone(initialData);
}

class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('fb-db-reset')
);
