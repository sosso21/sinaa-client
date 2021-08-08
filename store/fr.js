export const fr = () => {
  return {
    header: {
      faq: "Aide",
      connect: "Se Connecter",
      sub: "S'inscrir",
      search: "Rechercher",
      lang: "français",
      setting: "paramètres",
      profil: "profil",
      disconnect: "Déconnexion",
      
      adsence: "publicité",
      contact: "Contact",
      post:"Déposer une annonce"
 
    },
    Login: {
      errOccured: "Une erreur c'est produit:",
      TitleConnect: "Connectez vous",
      email: "adresse e-mail",
      pass: "mot de passe",
      passMissed: "mot de passe oublié ?",
      btnConnect: "Connexion",
      titleModalMissendPass: "Réinitialisez votre mot de passe.",
      emailSended: "email envoyé!",
      reset: "Réinitialiser",
      emailNotFound: "cet e-mail n'est pas inscrit sur notre site",

      errIncorrect: "e-mail ou mot de passe incorrecte",
      errBlocked: "Votre compte est banni,",
      errWaiting: "Confirmez votre email ! un lien a été envoyer à",
      errUnknow: "erreur , veuillez réesayer",
      btnResend: "Renvoyer",
    },
    signup: {
      errOccured: "Une erreur c'est produit:",
      TitleSign: "Inscrivez vous",
      email: "adresse e-mail",
      pass: "Mot de passe (min 8 caractères)",
      confirmPass: "Confirmez le mot de passe",
      acceptLabel: "Je reconnait avoir lûs et approuver",
      conditionTerms: "les Condituins et termes de la plateforme",

      username: "Nom d'utilisateur",
      lastname: "Nom",
      firstname: "Prénom",
      passNotIdentique: "les mots de passes ne sont pas indentique",
      resend: "Renvoyer ?",
      errorShortName:
        "Le nom d'utilisateur, le nom et le prénom doit contenir entre 2 et 30 caractères",
      errorEmailInvalide: "email invalide",
      passShort:
        "le mot de passe doit contenir au moin : 8 caractàres , une majuscule ,une minuscule et 2 chiffres",
      infoExist: "Les information nom d'utilisateur / email existe déjà",
      successEmailSended: "un email a été envoyer à ",
    },
    profil: {
      title: "Profil",
      general: "Géneral",
      security: "Sécurité",
      adress: "Adresse",
      contact: "Contact",
      errOccured: "Une erreur c'est produit:",
      successMsg: "Vos information ont bien été mis à jour",
      errorsMsg: [
        {
          errslug: "short name",
          errMsg:
            "Le nom de famille  / prénom / Nom d'utilisateur doit contenir entre minimum 3 et 30 caractères",
        },
        {
          errslug: "user exist",
          errMsg: "Ce nom d'utilisateur existe Déjà , veuillez réesayer",
        },
        {
          errslug: "error phone",
          errMsg: "Numéro de téléphone invalide , veuillez réesayer",
        },
        {
          errslug: "error age",
          errMsg: "Âge invalide , veuillez réesayer",
        },
        {
          errslug: "error sexe",
          errMsg: "Tu est un homme ya naqch",
        },
        {
          errslug: "error wilaya",
          errMsg: "Je suis Kabyle por votr formation",
        },
        {
          errslug: "error instagram",
          errMsg: "Vous devez renseigner une URL instagram",
        },
        {
          errslug: "error Twitter",
          errMsg: "Vous devez renseigner une URL twitter",
        },
        {
          errslug: "error facebook",
          errMsg: "Vous devez renseigner une URL Facebook",
        },
      ],
      NBprogress:"Pour devenir vendeur il vous faut compléter un maximum vos informations et les détailler."
    },
    profilGeneral: {
      title: "éditez vos informations".toUpperCase(),
      username: "Nom d'utilisateur",
      lastname: "Nom",
      firstname: "Prénom",
      placeOlderNames: "entre 3 et 20 caractères",
      selectSexe: "sexe",
      selectBoy: "Homme",
      selectGirl: "Femme",
      dateBirth: "Date de naissence",
      dateBDay: "Jour",
      dateMounth: "Mois",
      dateYear: "Année",
      birth_place: "Lieu de naissence",
      PObirth_place: "commune et département",
      submitBtn: "Valider",
    },
    profilSecurity: {
      title: "Sécurité",
      email: "Votre e-mail",
      pOemail: "exemple@gmail.com",
      pass: "Mot de passe",
      pOpass: "saisissez votre Mot de passe",
      submitBtn: "Valider",
      successMsg: "Un email vous as été envoyer à \n",
      error: [
        {
          errslug: "email invalid",
          msg: "e-mail invalide.veuillez réesayer",
        },
        {
          errslug: "password invalid",
          msg: "Mot de passe incorrecte",
        },
      ],
    },
    adress: {
      title: "Définissez votre adresse".toUpperCase(),
      commune: "Votre Addresse",
      pOCommune: "Commune , Daïra ",
      wilaya: "Séléctionez votre wilaya",
      submitBtn: "Valider",
    },
    profilContact: {
      title: "Informations de Contacte",
      phoneLabel: "Votre numéro de téléphone",
      pOPhone: "(obligatoir) ex:0567890123",
      facebookLabel: "URL de votre Facebook",
      pONR: "(Facultatif) ex : https://www....",
      instagramLabel: "URL de votre Instagram",
      twitterLabel: "URL de votre Twitte",
      submitBtn: "Valider",
    },
    password: {
      title:"Redéfinissez votre mot de passe",
      passNotIdentique: "les mots de passes ne sont pas indentique",
      errOccured: "Une erreur c'est produit:",
      successEmailSended: "un email a été envoyer à ",
      emailNotFound: "cet e-mail n'est pas inscrit sur notre site",
      success:"Bravo ! votre Mot de passe a bien été réinitialiser",
      errorType: [
        {
          error: "invelid",
          msg:  "le mot de passe doit contenir au moin : 8 caractàres , une majuscule ,une minuscule et 2 chiffres"
        },
        {
          error: "false old Pass",
          msg:"L'ancien mot de passe est incorrecte"
        },
        {
          error: "Link expired.",
          msg:"Le lien a éxpirer, veuillez réesayer"
        },
      ],
    OpPO:"Ancien mot de passe",
    NfpPO:"Nouveau mot de passe",
    SnpPo:"confirmez le mot de passe",
    submitBtn:"Réinitialiser",
    passMissed:"Mot de passe oublié ?",
    sendEmailLink:"Envoyer un email"
  },
  };
};
