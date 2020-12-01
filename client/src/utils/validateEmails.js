const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export default (emails) => {
  const invalidEmails = emails
    .replace(/,\s*$/, "")
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false)
    .join(", ");

  if (invalidEmails.length) {
    return `The following emails are invalid: ${invalidEmails}`;
  }

  return;
};
