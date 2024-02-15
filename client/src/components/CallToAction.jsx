import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div
      className="flex flex-col sm:flex-row p-3  justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.midjourney.com/dc455ad2-174d-4341-be5b-f934b8b461a6/0_0.webp')",
      }}
    >
      <div className="flex-1 justify-center flex flex-col bg-black bg-opacity-80 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl">
          This will become our first interaction, check it out!
        </h2>
        <p className="text-gray-500 my-2">
          This shows my skills, qualities, and my persona...
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://whoissahilkhan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            If you want to know more about me, just click aside 😊
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1 flex justify-center items-center">
        <img
          src="https://cdn.midjourney.com/3b0fa9bb-b543-42dd-9a66-df2ff36347a7/0_2.webp"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
