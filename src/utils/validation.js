const validation = (inputs) => {
  const numberRegExp = /^([1-9][0-9]{0,2}|1000)$/;
  const urlRegExp =
    /(http|https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;
  let errors = {};
  if (!inputs.name) {
    errors.name = "name is required";
  }

  if (!inputs.image) {
    errors.image = "Image URL is required";
  } else if (!urlRegExp.test(inputs.image)) {
    errors.image = "Image URL invalid";
  }

  if (!inputs.image2) {
    errors.image2 = "Image URL is required";
  } else if (!urlRegExp.test(inputs.image2)) {
    errors.image2 = "Image URL invalid";
  }

  if (!inputs.height) {
    errors.height = "Height is required";
  } else if (!numberRegExp.test(inputs.height)) {
    errors.height = "Height invalid";
  }

  if (!inputs.weight) {
    errors.weight = "Weight is required";
  } else if (!numberRegExp.test(inputs.weight)) {
    errors.weight = "Weight invalid";
  }

  if (inputs.types.length <= 0) {
    errors.types = "Types is required";
  }

  return errors;
};

export default validation;
