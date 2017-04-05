import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const docs = [
  {
    id: "1",
    Name: "Sudipto",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    Address: "Michael Nagar Kolkata 700133",
     Phonenumber:"9874348764",
    State: "West Bengal",
    category: "Surgeon"
  },
  {
     id: "2",
    Name: "Soumadipto",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    Address: "Michael Nagar Kolkata 700133",
     Phonenumber:"9874723764",
    State: "West Bengal",
    category: "Surgeon"
  },
  {
     id: "3",
    Name: "Sujoy",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    Address: "Michael Nagar Kolkata 700133",
     Phonenumber:"9234788764",
    State: "West Bengal",
    category: "Surgeon"
  },
  {
     id: "4",
    Name: "Sumit",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    Address: "Michael Nagar Kolkata 700133",
     Phonenumber:"9874457676",
    State: "West Bengal",
    category: "Dentist"
  },
  {
    id: "5",
    Name: "Swapan",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    Address: "Michael Nagar Kolkata 700131",
    Phonenumber:"9123388764",
    State: "West Bengal",
    category: "Neurosurgeon"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (doc) => {
  return replaceAll(doc.Phonenumber, ' ', '-');
};

class DocApi {
  static getAllDocList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], docs));
      }, delay);
      
    });
  }

  static saveDoc(doc) {
    doc = Object.assign({}, doc); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minDocPhoneNumberLength = 10;
        if (doc.Phonenumber.length < minDocPhoneNumberLength) {
          reject(`PhoneNumber must be at least ${minDocPhoneNumberLength} characters.`);
        }

        if (doc.id) {
          const existingDocIndex = docs.findIndex(a => a.id == doc.id);
          docs.splice(existingDocIndex, 1, doc);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          doc.id = generateId(doc);
          doc.watchHref = `http://www.pluralsight.com/courses/${doc.id}`;
          docs.push(doc);
        }

        resolve(doc);
      }, delay);
    });
  }

  static deleteDoc(docId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDocToDelete = docs.findIndex(doc => {
          doc.docId == docId;
        });
        docs.splice(indexOfDocToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default DocApi;
