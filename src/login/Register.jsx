import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";


const Register = () => {

	const {  createUser } = useContext(AuthContext)
    const navigate= useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        // get field values 
        const name = e.target.name.value;
        const email = e.target.email.value;

        const password = e.target.password.value;
        console.log(name, email, password);


        // validation 
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            toast.error('Password must be at least 6 characters,Uppercase-letter and special characters');
            return;
        }


        createUser(email, password)
            .then(res => {
                toast.success('you have registered  successfully Please Go to login');
				Navigate('/login')
                })
              .catch(error => {
                console.log(error.message);
                toast.error("Please fil up your form correctly")
            })
    }








    return (
        <div>
          

<div class="h-full bg-blue-200 dark:bg-gray-900">
	
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				
				<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://i.ibb.co/PYtqnPn/login-form.jpg')]"></div>
			
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
					<form onSubmit={handleSubmit} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                    First Name
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                />
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                    Last Name
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
							</div>
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
						</div>
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                    Password
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<p class="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                    Confirm Password
                                </label>
								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="******************"
                                />
							</div>
						</div>
						<div class="mb-6 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register Account
                            </button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#">
								Forgot Password?
							</a>
						</div>
						<div class="text-center">
							<p class="inline-block text-sm text-black dark:text-blue-500 align-baseline hover:text-blue-800"
								>
								Already have an account?<Link to="/login"> <span className="text-blue-500"> Login!</span> </Link>
							</p>
						</div>
						<GoogleLogin></GoogleLogin>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Register;