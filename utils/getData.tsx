import moment from "moment";
import firebase from "../config";

const getAllService = async () => {
  let services = [];
  await firebase
    .firestore()
    .collection("Services")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        services.push(data);
      });
    });
  return services;
};
const getWorkerByService = async (role) => {
  console.log("rossle", role);

  let services = [];
  if (role) {
    await firebase
      .firestore()
      .collection("Users")
      .where("worker", "==", true)
      .where("role", "==", role)
      .get()
      .then((querySnapshot) => {
        console.log("sixe", querySnapshot.size);

        querySnapshot.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          services.push(data);
        });
      });
  }
  return services;
};
const getAllLocation = async () => {
  let locations = [];
  await firebase
    .firestore()
    .collection("Location")
    .get()
    .then((querySnapshot) => {
      console.log("sixe", querySnapshot.size);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        locations.push(data);
      });
    });
  return locations;
};

// Function to check if a service provider is available for the selected hours on a specific date

const getUser = async (id) => {
  let data;
  await firebase
    .firestore()
    .collection("Users")
    .doc(id)
    .get()
    .then((doc) => {
      data = doc.data();
      data.id = doc.id;
    });
  return data;
};
const getAvailableTime = async (date, noOfHours, providerId) => {
  let availableTime = [];
  let startTime = moment().startOf('day').hour(8).minute(0); // Start at 08:00
  
  // Fetch bookings for the given provider and date
  let bookingsSnapshot = await firebase
    .firestore()
    .collection("Bookings")
    .where("serviceProvider", "==", providerId)
    .where("apptDate", "==", date)
    .get();

  // Iterate over time slots
  for (let i = 0; i < 12/noOfHours; i++) {
    let isAvailable = true;
// console.log("bbbb", bookingsSnapshot.size);

    // Compare each booking with the current time slot
    bookingsSnapshot.forEach((doc) => {
      let data = doc.data();
      let bookingStartTime = moment(data.startTime, "HH:mm");
      let bookingEndTime = moment(data.endTime, "HH:mm");

      let adjustedStartTime = startTime.clone(); // Create a clone of startTime
      let adjustedEndTime = adjustedStartTime.clone().add(noOfHours, 'hours'); // Calculate adjusted end time
      
      if (
        (adjustedStartTime.isBetween(bookingStartTime, bookingEndTime, null, '[]')) ||
        (adjustedEndTime.isBetween(bookingStartTime, bookingEndTime, null, '[]')) ||
        (bookingStartTime.isBetween(adjustedStartTime, adjustedEndTime, null, '[]')) ||
        (bookingEndTime.isBetween(adjustedStartTime, adjustedEndTime, null, '[]'))
      ) {
        isAvailable = false;
      }
    });

    if (isAvailable) {
      availableTime.push(startTime.format("HH:mm"));
    }

    startTime.add(noOfHours, 'hours'); // Move to the next time slot
  }

  return availableTime;
};

  
export { getAllService, getWorkerByService, getAllLocation, getUser,getAvailableTime };
