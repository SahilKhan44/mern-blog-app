import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Sahil's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://whoissahilkhan.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sahil's Portfolio
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sahil's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/SahilKhan44'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://discord.com/channels/1010909907060543668/1010909907060543671'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='/'
            by="Sahil's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.instagram.com/be__sahil?igsh=dDFsNHE5dmRmMWQ4' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/Be_Sahil_' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/SahilKhan44' icon={BsGithub}/>
            <Footer.Icon href='https://www.linkedin.com/in/sahil-khan-34b069258/' icon={BsLinkedin}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
