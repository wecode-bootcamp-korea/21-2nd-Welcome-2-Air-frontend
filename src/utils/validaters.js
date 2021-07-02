export function validateKorean_name(korean_name) {
  const korean_namereg = /^[가-힣]+$/;
  const isKorean_nameValid = korean_namereg.test(korean_name);
  return isKorean_nameValid;
}

export function validateEnglish_name(english_name) {
  const english_namereg = /^[a-zA-Z]*$/;
  const isEnglish_nameValid = english_namereg.test(english_name);
  return isEnglish_nameValid;
}

export function validateEmail(email) {
  const emailreg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const isEmailValid = emailreg.test(email);
  return isEmailValid;
}

export function validatePhone(phone) {
  const phonereg = /^\d{3}\d{3,4}\d{4}$/;
  const isPhoneValid = phonereg.test(phone);
  return isPhoneValid;
}

export function validatePassport(passport) {
  const passportreg = /^[A-Z]+[0-9]{8}$/g;
  const isPassportValid = passportreg.test(passport);
  return isPassportValid;
}

export function validateBirth(birth) {
  const birthreg =
    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  const isBirthValid = birthreg.test(birth);
  return isBirthValid;
}
