export const checkMail = (mail) => {
  const checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return checkMail.test(mail) !== false;
}
