import React from 'react';

const Home = () => {
	const steps = [
		'Sign in to our website',
		'Fill up all the details',
		'Connect camera/webcam Start',
		'live stream Observe',
		'live feed Interpret results',
		'Analyze it Save data',
	];
	const reviews = [
		{
			message:
				'This app was a lifesaver. It helped me connect with professionals who could help my child and gave me the peace of mind I needed as a parent.',
			userName: 'Megan',
			location: 'Ottawa, Canada',
		},
		{
			message:
				"I would highly recommend this app to anyone who has concerns about their child's development. The team is knowledgeable, friendly, and supportive.",
			userName: 'Chris',
			location: 'London, UK',
		},
		{
			message:
				"This app was a great investment in my child's future. It helped me detect early signs of autism and get my child the intervention they needed.",
			userName: 'Sara',
			location: 'Cape Town, South Africa',
		},
		{
			message:
				"I'm so grateful for this app. It helped me get the answers I needed about my child's development and connected me with professionals who could help them.",
			userName: 'Ravi',
			location: 'Mumbai, India',
		},
	];

	return (
		<div className='relative flex items-center flex-col gap-4 w-full max-w-[1440px] px-4'>
			<div className='relative cta w-full '>
				<div className='flex flex-col py-48 z-50 justify-center items-center gap-4'>
					<div className='font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white max-w-[80%]'>
						Empowering Parents and Caregivers with Early Autism Detection and
						Intervention Services to Support Children's Development and
						Well-Being.
					</div>
					<div className='text-lg text-slate-600 text-center mx-auto dark:text-slate-400 max-w-[80%] md:max-w-[50%]'>
						Learn how our evidence-based approach and compassionate team can
						help your child reach their full potential.
					</div>
					<button className='bg-slate-900 hover:bg-slate-700 outline-none  text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 w-max cursor-pointer'>
						Get Started Now
					</button>
				</div>
				<img
					src='./illustration.png'
					className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[60%] opacity-40 z-[-1]'
					alt=''
					srcset=''
				/>
			</div>
			<div className='flex flex-col justify-center items-center gap'>
				<div className='font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white mb-20'>
					How It Works?
				</div>
				<div className='bg-blueMain w-full h-[1px] ' />
				<div className='flex flex-col items-center justify-center'>
					{steps.map((step, idx) => (
						<>
							<div className='relative flex w-full flex-col items-center justify-center'>
								<div
									className={`flex text-lg text-center items-center w-full gap-8 relative h-[60px] justify-center px-4`}
								>
									<div
										className={`absolute top-0 bg-blueMain h-[60px] w-[1px] ${
											idx % 2 === 0 ? 'left-0' : 'right-0'
										}`}
									/>
									{step}
								</div>
								<div className='bg-blueMain w-full h-[1px]' />
							</div>
						</>
					))}
				</div>
			</div>
			<div className='flex flex-col justify-center items-center gap mt-40'>
				<div className='mb-6 w-[70%] font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white'>
					What Our Users Have To Say About Us.
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 w-[70%] gap-4 mt-20'>
					{reviews.map(rev => (
						<div className='bg-[#1e293b] p-4 flex flex-col gap-2 rounded-md'>
							<div className='flex items-center gap-2'>
								<img src='./person.png' width={40} alt='' srcset='' />
								<div className='text-xl text-blueMain flex flex-col'>
									{rev.userName}{' '}
									<span className='text-base text-white'>
										{rev.location}
									</span>
								</div>
							</div>
							<div>{rev.message}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
