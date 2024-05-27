import Email from "@/components/shared/icons/Email";
import Password from "@/components/shared/icons/Password";

const Signin = ({ setLogin }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className='space-y-4' onSubmit={handleSubmit}>
			<label className='input input-bordered flex items-center gap-2 input-primary focus-within:outline-none'>
				<Email />
				<input type='text' className='grow' placeholder='Email' />
			</label>

			<label className='input input-bordered flex items-center gap-2 input-primary focus-within:outline-none'>
				<Password />

				<input
					type='password'
					className='grow'
					placeholder='Password'
				/>
			</label>

			<button className='button w-full' type='submit'>
				Sign In
			</button>

			<p className='text-center text-sm'>
				Don&apos;t have an account?{" "}
				<span
					className='hover:cursor-pointer text-blue-500 hover:underline'
					onClick={() => setLogin(false)}>
					Create an account
				</span>
			</p>
		</form>
	);
};

export default Signin;
