function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}
 

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
    const sumOfAges = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return sumOfAges / filteredUsers.length;
  }