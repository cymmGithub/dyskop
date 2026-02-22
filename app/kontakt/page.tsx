'use client';

import { useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import PhoneInput from 'react-phone-number-input/input';
import { toast } from 'react-toastify';

type Tagged<A, T> = A & { __tag?: T };
type E164Number = Tagged<string, 'E164Number'>;
enum Toasts {
	error = 'error',
	success = 'success',
	warning = 'warning',
}

export default function Contact() {
	const [valueE, setValueE] = useState<E164Number>();
	const [isPending, setIsPending] = useState<boolean>(false);
	const notify = (message: string, type: Toasts) =>
		toast[type](`✉️ ${message}`, {
			toastId: 'preventDuplicateToasts',
			icon: false,
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: 0,
			theme: 'light',
		});

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const form = document.getElementById('contact-form') as HTMLFormElement;

		const formData = new FormData(event.target);
		try {
			setIsPending(true);
			const response = await fetch('/api/contact-form', {
				method: 'post',
				body: formData,
			});
			const responseData = await response.json();
			setIsPending(false);
			if (responseData.status === 429) {
				notify(responseData.message, Toasts.warning);
			} else {
				notify(responseData.message, Toasts.success);
				form.reset();
			}
		} catch (err: any) {
			console.error(err);
			setIsPending(false);

			notify(
				'Oops nie udało się wysłać wiadomości, spróbuj ponownie później',
				Toasts.error
			);
		}
	};

	return (
		<main className='relative w-full bg-white pt-24 sm:pt-28 text-center'>
			<div className='w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4'>
				<div className='max-w-xl mx-auto'>
					<h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4'>Kontakt</h1>
					<div className='text-center mb-3 sm:mb-6'>
						<p className='text-sm sm:text-base text-gray-600'>
							Skontaktuj się z nami bezpośrednio telefonicznie{' '}
							<b className='font-bold'>506 502 709</b> lub wypełnij krótki
							formularz, dzięki któremu wyślesz do nas maila.
						</p>
					</div>

					<form
						className='space-y-3 sm:space-y-4'
						onSubmit={handleSubmit}
						id='contact-form'
					>
						<div className='space-y-2 sm:space-y-3'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm sm:text-base font-medium text-gray-700 mb-0.5'
								>
									Imię
								</label>
								<input
									type='text'
									name='name'
									id='name'
									autoComplete='given-name'
									className='w-full rounded-md border border-gray-300 px-2.5 sm:px-3 py-1.5 sm:py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base'
								/>
							</div>

							<div>
								<label
									htmlFor='phone-number'
									className='block text-sm sm:text-base font-medium text-gray-700 mb-0.5'
								>
									Numer telefonu
								</label>
								<PhoneInput
									name='phone'
									country='PL'
									value={valueE}
									onChange={setValueE}
									className='w-full rounded-md border border-gray-300 px-2.5 sm:px-3 py-1.5 sm:py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base'
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm sm:text-base font-medium text-gray-700 mb-0.5'
								>
									Email do kontaktu
								</label>
								<input
									required
									type='email'
									name='email'
									id='email'
									autoComplete='email'
									className='w-full rounded-md border border-gray-300 px-2.5 sm:px-3 py-1.5 sm:py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base'
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm sm:text-base font-medium text-gray-700 mb-0.5'
								>
									Wiadomość
								</label>
								<textarea
									required
									name='message'
									id='message'
									rows={3}
									className='w-full rounded-md border border-gray-300 px-2.5 sm:px-3 py-1.5 sm:py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base max-h-[230px] overflow-y-auto resize-y'
									defaultValue={''}
								/>
							</div>

							<div className='hidden'>
								<input
									name='bot-trap'
									id='bot-trap'
									className='w-full'
								/>
							</div>
						</div>

						<button
							type='submit'
							className='w-full rounded-md bg-indigo-600 px-2.5 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-200'
							disabled={isPending}
						>
							{isPending ? (
								<PropagateLoader
									color={'#ffffff'}
									loading={isPending}
									aria-label='Loading Spinner'
									data-testid='loader'
									size={6}
								/>
							) : (
								'Wyślij'
							)}
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
