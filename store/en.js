export const en = () => {
  return {
    header: {
      faq: "Help",
      connect: "login",
      sub: "register",
      search: "Search",
      lang: "English",
      setting:"Client Space",
      profil: "profil",
      disconnect: "Disconnect",
      adsence: "Advertisements",
      contact: "Contact",
      post:"Place an ad "
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
      NBprogress:"To become a seller you need to complete your information as much as possible and detail it."
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
      identity: {
        title: "Confirm your identity",
        description: "Perform an identity verification in order to obtain a validation certification. This will allow you to better refer to the algorithm as well as provide a pledge of confidence to your customers.",
        add: "upload an identity document",
        send: "send the confirmation request",
        waiting: "Your request has been sent. It will be analyzed shortly. Thank you for your cooperation."
      },
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
    },password: {
      title: "Reset your password",
      passNotIdentique: "the passwords are not identical",
      errOccured: "An error occurred:",
      successEmailSended: "an email has been sent to",
      emailNotFound: "this e-mail is not registered on our site",
      success: "Well done! your Password has been reset",
      errorType: [
        {
          error: "invelid",
          msg: "the password must contain at least: 8 characters, one uppercase, one lowercase and 2 digits"
        },
        {
          error: "false old Pass",
          msg: "The old password is incorrect"
        },
        {
          error: "Link expired.",
          msg: "The link has expired, please try again"
        },
      ],
    OpPO: "Old password",
    NfpPO: "New password",
    SnpPo: "confirm the password",
    submitBtn: "Reset",
    passMissed: "Forgot your password?",
    sendEmailLink: "Send an email"
  },
  category:{
    title:"Categorys",
    underCategory: "Sub Categorys",
    recent:"recents"

  },
  product:{
    title:"Products",
    currency:"DZD",
    star:"Add to favorits"
  },
  client_space:{
      title:"Client Space",
      nav:{
        addProduct:"Add a product",
        MmyFavorit:"Favorites",
        myProducts:"my products",
      }, 
      post: {
        addPost: "New product",
        success:"Your post `$%title%` has been successfully updated under id #$%id% ",
        err: {
          incompletArea: "Incomplete field",
          emailInvalid: "Invalid Email",
          numberInvalid: "Invalid number",
        },
        input: {
          generic: {
            POSelect: "Enter an item",
            pOinput: "Enter the field"
          },
          title: "Title",
       
          adress: "Address",
          commune: "District",
          email: {
            title: 'Email(s)',
            pO: "Add a new email"
          },
          phone: {
            title: 'Phone(s)',
            pO: "Add a phone number"
          },
          description: {
            title: 'Description',
            pO: "Precisely describe your product and encourage your audience to take action!"
          },
          rubric: "Section:",
          workProposal: "Work proposal:",
          categ: {
            underCategory: "Sub Category",
            category: "Category"
          },
          next: "Next",
          profession: "profession",
          diploma: "diploma",
          salary: "Salary",
          Sector: "Sector",
          society: "Company",
          region: "geographic sector",
          price: 'Price',
          Mark: "Brand",
          typestate: "state",
          vehicle: "Vehicle",
          transport_service: "Transport Service",
          formation_category: "Training Category",
          sector_product: "Product Sector",
          service_category:'service category',
          q:{
            title:"Keywords",
            placeOlder:"Search.."
          }

        }
      }
      },
      sheet: {
        salary: "Salary",
        price: "Price",
        createdAt: "Published on",
        adress: "Available at",
        description: "Description",
        seeMore: "See more",
        seller: {
          activity: "Note",
          createdAt: "Member since",
          adress: "Seller's address"
        },
        phoneNemail: {
          phone: "Phone(s)",
          email: "Email(s)",
        },
        activity: {
          not: "Not active",
          medium: "Active",
          good: "Very active",
        },
        GetSupInfo: {
          seeCV: "View CV",
          sector: "Sector",
          name_society: "Company name",
          recrutement_type: "Type of recruitment",
          mark: "Brand",
          typeArticle: "Type of article",
          vehicle: "Vehicle",
          service: "Service",
          region: "cover",
          formationtype: "Formation type",
          service_type: "Type of service",
        },
      },
      preFooter: [
        {
          className: "bi-hammer",
          strong: "efficient",
          text: "An efficient platform made for professionals",
        },
      ],
      filter:{
        btnName:"filter"
      }
  };
};