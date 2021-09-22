export function addPropAge(obj) {
  const localObj = obj;
  localObj.age = +window.prompt("Enter age: ");
  return localObj;
}

export function createObjectCopyWithPropAdmin(obj) {
  const admin = { ...obj };
  admin.role = "admin";
  return admin;
}

export function destructureObj(admin) {
  const { name, age, role } = admin;
  console.log(name, age, role);
}
