import bpplogo from '@/assets/images/logos/Bpp.png';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';

import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'About Us',
    links: [
      { name: 'Goals', href: '/about/bpp-goals' }, 
      { name: 'Get To Know BPP', href: '/about/get-to-know-bpp' },
      { name: 'Charitable Contribution', href: '/about/charitable-contribution' },
      { name: 'Sustainability Commitment', href: '/about/sustainability-commitment' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Logo & Media Request', href: '/about/logo-media-request' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { name: 'Join Now', href: '/membership/join-now' }, 
      { name: 'Membership Privilege', href: '/membership/privilege' }, 
      { name: 'Active Membership Term', href: '/membership/active-term' }, 
      { name: 'Sign in & Register', href: '/login' }, 
      { name: 'Membership Renewals', href: '/membership/renewals' }, 
      { name: 'Forget Pin', href: '/forgot-pin' }, 
    ],
  },
  {
    title: 'Business Community/Vendor',
    links: [
      { name: 'Vendor & Suppliers', href: '/business-community/vendor-suppliers' },
      { name: 'Business Community Join', href: '/business-community/join' },
      { name: 'Business/Vendor Disclosure', href: '/business-community/disclosure' },
      { name: 'Ethics Vendor Supplier', href: '/business-community/ethics' },
      { name: 'Supplier Inclusion', href: '/business-community/inclusion' },
    ],
  }
];

const Footer = () => {
  return (
    <section className="py-16 border-t">
      <div className="container">
        <footer>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className='flex items-center gap-2'>
            <img
              src={bpplogo}
              alt="logo"
              className="mb-8 mr-auto h-16 md:mb-0"
              /> <span className='text-3xl font-black'>Bharatiya Popular Party</span>
              </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              {/* <p className="font-extrabold text-2xl">
                Download App
              </p> */}
              {/* <div className="flex gap-2">
              <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <FaGooglePlay className="size-7 text-background" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <FaApple className="size-7 text-background" />
                </a>
              </div> */}
              <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
			<button className="inline-flex items-center px-6 py-3 rounded-lg  bg-blue-500 text-white dark:bg-violet-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-50">
					<path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">GET IT ON</span>
					<span className="font-semibold title-font">Google Play</span>
				</span>
			</button>
			<button className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-500 text-white dark:bg-violet-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 dark:text-gray-50">
					<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">Download on the</span>
					<span className="font-semibold title-font">App Store</span>
				</span>
			</button>
		</div>
            </div>
          </div>
          <Separator className="my-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-xl font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 text-xl font-bold">Member Support</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <Link to="/customer-support">BPP Member Services</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">BPP APP Technical Support</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Accessability</a>
                </li>
              </ul>
              <h3 className="mb-4 mt-8 text-xl font-bold">Social</h3>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaWhatsapp className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-5" />
          <div>
          <ul className="text-muted-foreground flex justify-around my-5 w-3/4 mx-auto">
                <li className="font-medium hover:text-primary">
                  <Link to="/">Site Map</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/">Cookies</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/">Feedback</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/">Disclaimer</Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            © 2024 Bharatiya Popular Party. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
