function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}
 

function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter(user => user.gender === gender);
    let totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return filteredUsers.length > 0 ? totalAge / filteredUsers.length : 0;
  }