"use client";

import { login } from "@/app/actions/auth";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

const initialState = {
	error: "",
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type='submit'
			disabled={pending}
			className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50'
		>
			{pending ? "Logging in..." : "Sign in"}
		</button>
	);
}

export default function LoginPage() {
	const [state, formAction] = useFormState(login, initialState);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
						Admin Login
					</h2>
				</div>
				<form className='mt-8 space-y-6' action={formAction}>
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								id='password'
								name='password'
								type='password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
								placeholder='Enter Admin Password'
							/>
						</div>
					</div>

					{state?.error && (
						<div className='text-red-500 text-sm text-center'>
							{state.error}
						</div>
					)}

					<div>
						<SubmitButton />
					</div>
				</form>
			</div>
		</div>
	);
}
