import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const GoogleLogin = () => {

    const navigate = useNavigate()
    const { user, googleLogin } = useContext(AuthContext);
console.log(googleLogin);

   const handleSocialLogin = () => {
       googleLogin()
           .then(res => {
            toast.success('User logged in successfully');
              
                navigate('/')
              
           })
           .catch(error => {
               toast.error(error.message)
           })
   }


    return (
        <div>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={handleSocialLogin}
                    className="btn btn-neutral btn-sm">Google</button>
                

            </div>
        </div>
    );
};

export default GoogleLogin;