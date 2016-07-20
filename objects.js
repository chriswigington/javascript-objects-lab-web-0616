var recipes = {
  a_key: "value"
}

function updateObjectWithKeyAndValue(object, key, value) {
  new_obj = Object.assign({}, object)
  new_obj[key] = value 
  return new_obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  new_obj = Object.assign({}, object)
  delete new_obj[key]
  return new_obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}