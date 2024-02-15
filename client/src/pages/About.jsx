export default function About() {
  return (
    <div
    style={{
      backgroundImage:
        "  linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://cdn.midjourney.com/3c9f86bb-ed8d-4fa2-a089-df502143cc66/0_3.webp')",
    }}
     className='min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat' >
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Sahil' Blog
          </h1>
          <div className='text-md text-white-500 flex flex-col gap-10'>
            <p>
              Welcome to Sahil's Blog! This blog was created by Sahil khan
              as a personal project to share his thoughts and ideas with the
              world. Sahil is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sahil is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
