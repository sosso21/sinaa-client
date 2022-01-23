import { Lang } from "../../plugins/lang.js";


  const GetActivity = ({lastConnect}) => {

    const textLang = Lang().sheet.activity;
 
    const diff =(new Date().getTime() - new Date(lastConnect).getTime()) /
      3600 /
      1000;
    if (diff <= 24) {
      return (
        <i className="text-success mx-1">
          <i className="bi bi-award-fill mx-1"></i> {textLang.big}
        </i>
      );
    } else if (diff <= 168) {
      return (
        <i className="text-primary mx-1">
          <i className="bi bi-lightning-fill mx-1"></i>{textLang.medium}
        </i>
      );
    } else {
      return (
        <i className="text-secondary mx-1">
          <i className="bi bi-cloud-lightning-rain-fill mx-1"></i>{textLang.not }
        </i>
      );
    }
  };

  export default GetActivity