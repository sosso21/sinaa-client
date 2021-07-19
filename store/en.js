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
            disconnect: "Disconnect"
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
            btnResend: "Resend"
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
            successEmailSended: "an email has been sent to"

        },
        profil: {
            title: "Profile",
            general: "General",
            security: "Security",
            adress: "Address",
            contact: "Contact",
        },
        profilGeneral: {
            title: ("Edit your information").toUpperCase(),
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
            submitBtn: "Validate"
        },
        profilSecurity: {
            title: "Security",
            email: "Your e-mail",
            pOemail: "example@gmail.com",
            submitBtn: "Validate",
        },
        adress: {
            title: ("Set your address").toUpperCase(),
            commune: "Your Address",
            pOCommune: "Municipality, Daïra",
            wilaya: "Select your wilaya",
            submitBtn: "Validate",

        }
    }
}