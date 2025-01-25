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
		<div className='relative h-full overflow-hidden'>
			<div className='absolute inset-0 sketchy-bg'></div>
			<div className='relative z-10 isolate px-6 mt-36 md:mt-32 lg:mt-44 pb-10 lg:px-8 max-w-5xl mx-auto'>
				<div className='mx-auto max-w-2xl text-center'>
					<p className='mt-2 text-sm md:text-md leading-6 md:leading-7 text-gray-600'>
						Skontaktuj się z nami bezpośrednio telefonicznie{' '}
						<b className='font-bold text-sm md:text-md'>506 502 709</b> lub wypełnij krótki
						formularz, dzięki któremu wyślesz do nas maila.
					</p>
				</div>
				<form
					className='mx-auto mt-4 md:mt-7 mb-3 max-w-xl'
					onSubmit={handleSubmit}
					id='contact-form'
				>
					<div className='grid grid-cols-1 gap-x-8 gap-y-1.5 sm:gap-y-2 sm:grid-cols-2'>
						<div>
							<label
								htmlFor='name'
								className='block text-xs md:text-sm font-semibold leading-6 text-gray-900'
							>
								Imię
							</label>
							<div className='mt-1.5 md:mt-2.5'>
								<input
									type='text'
									name='name'
									id='name'
									autoComplete='given-name'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='phone-number'
								className='block text-xs md:text-sm font-semibold leading-6 text-gray-900'
							>
								Numer telefonu
							</label>
							<div className='mt-1.5 md:mt-2.5'>
								<PhoneInput
									name='phone'
									country='PL'
									value={valueE}
									onChange={setValueE}
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='email'
								className='block text-xs md:text-sm font-semibold leading-6 text-gray-900'
							>
								Email do kontaktu
							</label>
							<div className='mt-1.5 md:mt-2.5'>
								<input
									required
									type='email'
									name='email'
									id='email'
									autoComplete='email'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block text-xs md:text-sm font-semibold leading-6 text-gray-900'
							>
								Wiadomość
							</label>
							<div className='mt-1.5 md:mt-2.5'>
								<textarea
									required
									name='message'
									id='message'
									rows={4}
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									defaultValue={''}
								/>
							</div>
						</div>
						<div className='sm:col-span-2 hidden'>
							<div className='mt-2.5'>
								<input
									name='bot-trap'
									id='bot-trap'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
					</div>
					<div className='mt-6 md:mt-10'>
						<button
							type='submit'
							className='relative flex w-full justify-center rounded-md h-10 bg-indigo-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							{isPending ? (
								<PropagateLoader
									color={'#ffffff'}
									loading={isPending}
									aria-label='Loading Spinner'
									data-testid='loader'
								/>
							) : (
								'Wyślij'
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
