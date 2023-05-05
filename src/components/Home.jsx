import React from 'react';

const Home = () => {
	return (
		<div className='relative flex items-center flex-col gap-4 w-full max-w-[1440px] px-4'>
			<div className='relative cta w-full '>
				<div className='flex flex-col min-h-[70vh] z-50 justify-center items-center gap-4'>
					<div className='text-slate-900 font-extrabold text-3xl sm:text-4xl tracking-tight text-center dark:text-white md:max-w-[70%]'>
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
		</div>
	);
};

export default Home;
