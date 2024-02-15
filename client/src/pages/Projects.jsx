import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div style={{
      backgroundImage:
        "  linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://cdn.midjourney.com/3c9f86bb-ed8d-4fa2-a089-df502143cc66/0_3.webp')",
    }}
    className='min-h-screen  '>
      <h1 className='text-3xl font-bold  text-white flex justify-center items-center flex-col gap-6 p-3'>Projects</h1>
      <p className='text-md  font-bold text-white flex justify-center items-center flex-col gap-6 p-3'>Build fun and engaging projects while learning HTML, CSS, Tailwind, JavaScript adnd React !</p>
      <CallToAction />
    </div>
  )
}