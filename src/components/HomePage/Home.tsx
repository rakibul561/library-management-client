import wave from '../../assets/wave.svg'
import Hero from './Hero';

export default function Home() {
  return (
    <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
      <Hero/>
      <img className='absolute bottom-0 w-full' src={wave} alt='' />
    </div>
  );
}
