 
import { useRouter } from 'next/router';

const Error = ({ response = {} }) => {
  const router = useRouter();

  if (response.error == "disconnect") {
    sessionStorage.clear();
    localStorage.clear();
    return router.push("/")
  }

  return (
    <>
      {response.success && (
        <div className="text-center d-block alert alert-success form-group pre-wrap">
           {response.success} 
        </div>
      )}

      {response.error && (
        <div className="text-center d-block alert alert-error form-group pre-wrap">
           {response.error}
        </div>
      )}

    </>
  );
};

export default Error;
