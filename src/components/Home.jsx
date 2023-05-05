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
				"This app is a game-changer. It helped me understand my child's behavior better and provided me with valuable insights and recommendations for their development.",
			userName: 'David',
			location: 'Melbourne, Australia',
		},
		{
			message:
				"I'm so glad I found this app. It helped me identify red flags in my child's behavior and connect with professionals who could help them.",
			userName: 'Sarah',
			location: 'Paris, France',
		},
		{
			message:
				"This app was easy to use and understand, and it helped me get my child the help they needed. I can't thank the team enough for their support.",
			userName: 'Mike',
			location: 'San Francisco, USA',
		},
		{
			message:
				"I was worried about my child's development, but this app helped me take action quickly and get them the help they needed.",
			userName: 'Karen',
			location: 'Berlin, Germany',
		},
		{
			message:
				'The team behind this app is amazing. They provided me with personalized recommendations and made me feel supported throughout the entire process.',
			userName: 'Carlos',
			location: 'Madrid, Spain',
		},
		{
			message:
				'This app was a real eye-opener. It helped me understand autism better and gave me the tools I needed to help my child.',
			userName: 'Michelle',
			location: 'Vancouver, Canada',
		},
		{
			message:
				'This app is a must-have for any parent. It helped me detect early signs of autism and get my child the intervention they needed to thrive.',
			userName: 'Alex',
			location: 'São Paulo, Brazil',
		},
		{
			message:
				"I'm so glad I found this app. It helped me feel more informed and empowered as a parent and gave me the resources I needed to support my child.",
			userName: 'Jessica',
			location: 'Houston, USA',
		},
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
					<div className='text-slate-900 font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white max-w-[80%]'>
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
				<div className='text-slate-900 font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white mb-20'>
					How It Works?
				</div>
				<div className='bg-blueMain w-[50%] h-[1px]' />
				<div className='flex flex-col items-center justify-center'>
					<div className=' bg-blueMain w-[1px] h-[20px]' />
					{steps.map((step, idx) => (
						<>
							<div className='relative flex justify-center gap-8'>
								<div
									className={`${
										idx % 2 === 0 && 'opacity-0'
									} text-lg text-center h-[80px] flex items-center`}
								>
									{step}
								</div>
								<div className='bg-blueMain w-[1px] h-[80px]' />
								<div className='w-4 h-4 bg-blueMain absolute top-[50%] -translate-y-[50%] rounded-full' />
								<div className='w-8 h-8 bg-blueMain/50 absolute top-[50%] -translate-y-[50%] rounded-full' />
								<div
									className={`${
										idx % 2 !== 0 && 'opacity-0'
									} text-lg text-center h-[80px] flex items-center`}
								>
									{step}
								</div>
							</div>
						</>
					))}
					<div className='bg-blueMain w-[1px] h-[20px]' />
					<div className='bg-blueMain w-[50%] h-[1px]' />
				</div>
			</div>
			<div className='flex flex-col justify-center items-center gap mt-40'>
				<div className='mb-6 text-slate-900 w-[70%] font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white'>
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
