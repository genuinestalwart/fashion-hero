import { useState } from "react";
import google from "@/assets/login/google.png";
import Signin from "@/components/login/Signin";
import Signup from "@/components/login/Signup";

const LoginPage = () => {
	const [login, setLogin] = useState(true);

	return (
		<main>
			<section className='card bg-base-100 max-w-[60ch] mx-auto shadow-xl'>
				<div className='card-body p-16 space-y-4'>
					<h1 className='card-title text-3xl volkhov'>
						{login
							? "Sign In To Fashion Hero"
							: "Create An Account"}
					</h1>

					<button className='btn btn-outline flex gap-3 items-center'>
						<img
							alt='google login'
							className='h-6 w-6'
							src={google}
						/>

						<span>Sign {login ? "In" : "Up"} with Google</span>
					</button>

					<div className='divider'>OR</div>

					{login ? (
						<Signin setLogin={setLogin} />
					) : (
						<Signup setLogin={setLogin} />
					)}
				</div>
			</section>
		</main>
	);
};

export default LoginPage;
