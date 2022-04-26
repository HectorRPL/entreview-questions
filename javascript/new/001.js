function ensure(value = 0) {

  if (value === undefined && value)

    return value;
}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}
