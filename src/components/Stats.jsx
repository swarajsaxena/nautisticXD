import React from 'react';
import { FiList, FiHeadphones } from 'react-icons/fi';
import { TbBrain, TbDna } from 'react-icons/tb';

const Stats = () => {
	return (
		<div className='relative flex items-center flex-col gap-8 w-full max-w-[1440px] px-4 py-16'>
			<div className='font-extrabold text-3xl sm:text-4xl tracking-tight capitalize text-center max-w-[80%]'>
				overview of the autism detection project
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-4 w-full place-items-center my-8'>
				<div className='flex flex-col gap-2 p-4 items-center'>
					<div className='bg-[#102237] rounded-full text-blueMain m-4 p-4 md:m-8 md:p-8  w-max'>
						<FiList className='text-lg md:text-4xl' />
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='font-extrabold text-3xl sm:text-4xl tracking-tight capitalize text-center'>
							997
						</span>
						<span className='text-base md:text-2xl '>
							Clinical Evaluations
						</span>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='text-blueMain text-xl font-medium'>
							660 Autism
						</span>
						<div className='bg-white/50 h-[2px] w-[10px]' />
						<span>337 Control</span>
					</div>
				</div>
				<div className='flex flex-col gap-2 p-4 items-center'>
					<div className='bg-[#102237] rounded-full text-blueMain m-4 p-4 md:m-8 md:p-8  w-max '>
						<TbBrain className='text-lg md:text-4xl' />
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='font-extrabold text-3xl sm:text-4xl tracking-tight capitalize text-center'>
							1124
						</span>
						<span className='text-base md:text-2xl '>MRI Scans</span>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='text-blueMain text-xl font-medium'>
							718 Autism
						</span>
						<div className='bg-white/50 h-[2px] w-[10px]' />
						<span>406 Control</span>
					</div>
				</div>
				<div className='flex flex-col gap-2 p-4 items-center'>
					<div className='bg-[#102237] rounded-full text-blueMain m-4 p-4 md:m-8 md:p-8  w-max '>
						<FiHeadphones className='text-lg md:text-4xl' />
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='font-extrabold text-3xl sm:text-4xl tracking-tight capitalize text-center'>
							255
						</span>
						<span className='text-base md:text-2xl '>Auditory ERPs</span>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='text-blueMain text-xl font-medium'>
							195 Autism
						</span>
						<div className='bg-white/50 h-[2px] w-[10px]' />
						<span>96 Control</span>
					</div>
				</div>
				<div className='flex flex-col gap-2 p-4 items-center'>
					<div className='bg-[#102237] rounded-full text-blueMain m-4 p-4 md:m-8 md:p-8  w-max '>
						<TbDna className='text-lg md:text-4xl' />
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='font-extrabold text-3xl sm:text-4xl tracking-tight capitalize text-center'>
							1612
						</span>
						<span className='text-base md:text-2xl '>Biospecimens</span>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<span className='text-blueMain text-xl font-medium'>
							1075 Autism
						</span>
						<div className='bg-white/50 h-[2px] w-[10px]' />
						<span>537 Control</span>
					</div>
				</div>
			</div>
      <div className='mt-8 font-extrabold text-3xl sm:text-4xl tracking-tight capitalize text-center max-w-[80%]'>
				Graphical representation of the results
			</div>
			<div className='w-full md:w-[80%] flex justify-center my-8'>
				<img src='/graph.png' alt='graph' className='w-[70%] md:w-[50%]' />
			</div>
		</div>
	);
};

export default Stats;
