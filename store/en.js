export const en = () => {
  return {
    header: {
      faq: "FAQ & Help",
      connect: "login",
      sub: "register",
      search: "Search",
      lang: "English",
      setting: "setting",
      profil: "profil",
      disconnect: "Disconnect",
    },
    Login: {
      errOccured: "An error occurred:",
      TitleConnect: "Log in",
      email: "e-mail address",
      pass: "password",
      passMissed: "forgot password?",
      btnConnect: "Log in",
      titleModalMissendPass: "Reset your password.",
      emailSended: "email sent!",
      reset: "Reset",
      emailNotFound: "this e-mail is not registered on our site",
      errIncorrect: "incorrect e-mail or password",
      errBlocked: "Your account is banned,",
      errWaiting: "Confirm your email! a link has been sent to",
      errUnknow: "error, please try again",
      btnResend: "Resend",
    },
    signup: {
      errOccured: "An error occurred:",
      TitleSign: "Register",
      email: "e-mail address",
      pass: "Password (min 8 characters)",
      confirmPass: "Confirm password",
      acceptLabel: "I acknowledge having read and approve",
      conditionTerms: "the Terms and Conditions of the platform",

      username: "Username",
      lastname: "Last name",
      firstname: "First name",
      passNotIdentique: "the passwords are not identical",
      resend: "Resend?",
      errorShortName: "Username, last name and first name must contain between 2 and 30 characters",
      errorEmailInvalide: "invalid email",
      passShort: "the password must contain at least: 8 characters, one uppercase, one lowercase and 2 digits",
      infoExist: "Username / email information already exists",
      successEmailSended: "an email has been sent to",
    },
    profil: {
      title: "Profile",
      general: "General",
      security: "Security",
      adress: "Address",
      contact: "Contact",
      errOccured: "An error occurred:",
      successMsg:"Your information has been updated",
      errorsMsg: [{
          errslug: "short name",
          errMsg: "The last name / first name / Username must contain between a minimum of 3 and 30 characters",
        },
        {
            errslug:  "user exist",
            errMsg: "This username already exists, please try again"
        },
        {
          errslug: "error phone",
          errMsg: "Invalid phone number, please try again",
        },
        {
          errslug: "error age",
          errMsg: "Invalid age, please try again",
        },
        {
          errslug: "error sexe",
          errMsg: "Why are you gay",
        },
        {
          errslug: "error wilaya",
          errMsg: "Fuvk off From Algeria",
        },
        {
          errslug: "error instagram",
          errMsg: "You must enter an instagram URL",
        },
        {
          errslug: "error Twitter",
          errMsg: "You must enter a twitter url",
        },
        {
          errslug: "error facebook",
          errMsg: "You must enter a Facebook URL",
        },
      ],
    },
    profilGeneral: {
      title: "Edit your information".toUpperCase(),
      username: "Username",
      lastname: "Last name",
      firstname: "First name",
      placeOlderNames: "between 3 and 20 characters",
      selectSexe: "sex",
      selectBoy: "Male",
      selectGirl: "Woman",
      dateBirth: "Date of birth",
      dateBDay: "Day",
      dateMounth: "Month",
      dateYear: "Year",
      birth_place: "Place of birth",
      PObirth_place: "town and state",
      submitBtn: "Validate",
    },
    profilSecurity: {
      title: "Security",
      email: "Your e-mail",
      pOemail: "example@gmail.com",
      pass:"Password",
      pOpass:"enter your password",
      submitBtn: "Validate",
      successMsg:"An email has been sent to \n",
      error:[
        {
            errslug:"email invalid",
            msg:"invalid e-mail, please try again"
        },
        {
            errslug:"password invalid",
            msg:"Incorrect password"
        }
    ]
    },
    adress: {
      title: "Set your address".toUpperCase(),
      commune: "Your Address",
      pOCommune: "Municipality, Daïra",
      wilaya: "Select your wilaya",
      submitBtn: "Validate",
    },
    profilContact: {
      title: "Contact Informations",
      phoneLabel: "Your phone number",
      pOPhone: "(mandatory) ex: 0567890123",
      facebookLabel: "URL of your Facebook",
      pONR: "(Optional) ex: https://www....",
      instagramLabel: "URL of your Instagram",
      twitterLabel: "URL of your Twitte",
      submitBtn: "Validate",
    },
  };
};