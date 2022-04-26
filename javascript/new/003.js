function GetAverageAgeAndUpdateFlag(users) {
  let totalAges = 0;
  for (let x = 0; x < users.length; x++) {
    if (users[x].age > 18) {
      users[x].Adult = true
    }
    totalAges += users[x].age;
  }
  return totalAges / users.length;
}
