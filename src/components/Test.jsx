import { Input, TextInput } from '@mantine/core';
import React, { useState } from 'react';

const Test = () => {
	const [fileName, setFileName] = useState('');
	const [previewUrl, setPreviewUrl] = useState(null);

	const handleFileInputChange = event => {
		const file = event.target.files[0];
		setFileName(file.name);

		const handleFilePreview = event => {
			const fileContent = event.target.result;
			setPreviewUrl(fileContent);
		};

		if (file) {
			const reader = new FileReader();
			reader.onload = handleFilePreview;
			reader.readAsDataURL(file);
		}
	};
	return (
		<div className='relative flex items-center flex-col w-full max-w-[1440px] px-4 py-16'>
			<form
				onSubmit={e => {
					e.preventDefault();
					console.log(new FormData(e.target));
				}}
				className='flex items-center flex-col w-full gap-4'
			>
				<div className='flex max-w-[700px] w-full flex-col md:flex-row gap-2 md:gap-4'>
					<div className='w-full flex flex-col gap-1 md:w-1/2 md:mb-0'>
						<label className='text-blueMain' for='grid-first-name'>
							First Name
						</label>
						<input
							className='appearance-none block w-full bg-transparent text-blueMain border-2 border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blueMain'
							id='grid-first-name'
							type='text'
							placeholder='Jane'
						/>
					</div>
					<div className='w-full flex flex-col gap-1 md:w-1/2'>
						<label className='text-blueMain' for='grid-last-name'>
							Last Name
						</label>
						<input
							className='appearance-none block w-full bg-transparent text-blueMain border-2 border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blueMain'
							id='grid-last-name'
							type='text'
							placeholder='Doe'
						/>
					</div>
				</div>
				<div className='flex max-w-[700px] w-full flex-col md:flex-row gap-2 md:gap-4'>
					<div className='w-full flex flex-col gap-1 md:w-1/2 md:mb-0'>
						<label className='text-blueMain' for='grid-first-name'>
							Location
						</label>
						<input
							className='appearance-none block w-full bg-transparent text-blueMain border-2 border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blueMain'
							id='grid-first-name'
							type='text'
							placeholder='Where do you live?'
						/>
					</div>
					<div className='w-full flex flex-col gap-1 md:w-1/2'>
						<label className='text-blueMain' for='grid-last-name'>
							Age
						</label>
						<input
							className='appearance-none block w-full bg-transparent text-blueMain border-2 border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blueMain'
							id='grid-last-name'
							type='number'
							placeholder='What is your age?'
						/>
					</div>
				</div>

				<div className='flex flex-col items-start gap-2 max-w-[700px] w-full'>
					<div className='text-blueMain'>Your Child's Image</div>
					<label
						for='dropzone-file'
						className='flex flex-col items-center justify-center w-full h-max p-4 gap-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
					>
						<div className='flex flex-col items-center justify-center gap-3'>
							{fileName.length > 0 ? (
								<>
									{previewUrl && (
										<div className='w-full overflow-hidden flex justify-center items-center max-h-72 rounded-md'>
											<img
												src={previewUrl}
												alt='File Preview'
												className='w-full'
											/>
										</div>
									)}
									<div>{fileName}</div>
								</>
							) : (
								<>
									<svg
										aria-hidden='true'
										className='w-10 h-10 mb-3 text-gray-400'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
										></path>
									</svg>
									<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
										<span className='font-semibold'>
											Click to upload
										</span>{' '}
										or drag and drop
									</p>
									<p className='text-xs text-gray-500 dark:text-gray-400'>
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</>
							)}
						</div>
						<input
							id='dropzone-file'
							type='file'
							className='rounded-lg bg-transparent hidden'
							onChange={handleFileInputChange}
						/>
					</label>
				</div>
				<button className='bg-blueMain/90 hover:bg-blueMain w-full max-w-[700px] px-4 py-2 rounded-md' type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Test;
