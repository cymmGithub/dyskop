'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';

type Tagged<A, T> = A & { __tag?: T };
type E164Number = Tagged<string, 'E164Number'>;

export default function Contact() {
	const [valueE, setValueE] = useState<E164Number>();

	return (
		<div className='isolate bg-white px-6 pt-1 pb=10 lg:px-8'>
			<div
				className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
				aria-hidden='true'
			></div>
			<div className='mx-auto max-w-2xl text-center'>
				<p className='mt-2 text-sm leading-7 text-gray-600'>
					Usługi świadczymy głównie w <b>Lublinie</b> i powiecie lubelskim oraz
					na terenie powiatów ościennych: <b>świdnickiego</b>,{' '}
					<b>lubartowskiego</b>, <b>opolskiego</b>, <b>puławskiego</b> i{' '}
					<b>kraśnickiego</b>. Przy większych projektach działamy na terenie
					całego województwa lubelskiego oraz ościennych. Skontaktuj się z nami
					bezpośrednio telefonicznie{' '}
					<b className='font-bold text-md'>506 502 709</b> lub wypełnij krótki
					formularz, dzięki któremu wyślesz do nas maila.
				</p>
			</div>
			<form
				action='mailto:contact@yourdomain.com'
				method='POST'
				name='EmailForm'
				className='mx-auto mt-7 mb-3 max-w-xl'
			>
				<div className='grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2'>
					<div>
						<label
							htmlFor='first-name'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Imię
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='first-name'
								id='first-name'
								autoComplete='given-name'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='phone-number'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Number telefonu
						</label>
						<div className='mt-2.5'>
							<PhoneInput
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
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Email
						</label>
						<div className='mt-2.5'>
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
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Wiadomość
						</label>
						<div className='mt-2.5'>
							<textarea
								name='message'
								id='message'
								rows={4}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								defaultValue={''}
							/>
						</div>
					</div>
				</div>
				<div className='mt-10'>
					<button
						type='submit'
						className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Wyślij
					</button>
				</div>
			</form>
		</div>
	);
}
