
import styleClient from "../../styles/profil.module.css";
  export const UploadFile = ({ icon, handleUploadFile }) => {
    return (
      <div className="d-flex justify-content-center">
        <label htmlFor={"file"+icon} className={styleClient.addImgBtn}>
          <i className={"fs-1 " + icon}></i>
          <i className="fs-2 bi bi-plus"></i>
        </label>

        <input
          onChange={handleUploadFile}
          id={"file"+icon}
          className="d-none"
          type="file"
          
        />
      </div>
    );
  };