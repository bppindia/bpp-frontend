export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-8">
        <div>
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            {/* <LogoIcon /> */}
            BHARATIYA POPULAR PARTY
          </a>
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="font-bold text-lg">About</h3>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Reach us
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Disclaimer</h3>
          <div>
            <p className="text-muted-foreground text-sm mt-4 mb-8">
              Please be advised that Bharatiya Popular Party does not hold any
              official accounts on social media platforms.
            </p>
            <p className="text-muted-foreground text-sm mt-4 mb-8">
              Our organization is not present on any social media network,
              including but not limited to Facebook, Twitter, Instagram,
              LinkedIn, and others. Reporting Unauthorized Accounts
            </p>
            <p className="text-muted-foreground text-sm mt-4 mb-8">
              If you encounter any social media accounts or profiles that claim
              to represent Bhartiya Popular Party or use our name, logo, or any
              other intellectual property, please notify us immediately. These
              accounts are unauthorized and not affiliated with our
              organization. To report any such accounts, please contact us
              through email.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Bharatiya Popular Party
          </a>
          All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
