import { Separator } from "@/components/ui/separator";
import Layout from "@/layout/Layout";
import { Bell, Cookie, File, Link, Lock, Mail, Shield, Users } from "lucide-react";

const PolicySection = ({ icon: Icon, title, children }) => (
  <section className="py-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="text-muted-foreground space-y-4 ml-12">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div>
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              BHARATIYA POPULAR PARTY
            </h1>
            <div className="flex justify-center items-center gap-2 mb-8">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h2>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Thank you for visiting the website of Bharatiya Popular Party. Your privacy is important to www.bppindia.com. This privacy statement provides information about the personal information that we collect and how we use it.
            </p>
          </div>
        </div>
<Separator/>
        <div className="container mx-auto px-4 max-w-4xl">
          <PolicySection icon={Users} title="Personal Information">
            <p>
              Personal Information means and includes all information that can be linked to a specific individual or to identify any individual, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, age, and address</li>
              <li>Mobile number and e-mail address</li>
              <li>Aadhar number and constituency</li>
              <li>Voter details</li>
              <li>Credit card information when provided</li>
              <li>Geographic information (village, block, district, state)</li>
            </ul>
          </PolicySection>

          <Separator />

          <PolicySection icon={File} title="Use of Personal Information">
            <p className="mb-4">The website may collect and use your personal information to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Administer website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Tailor user experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Provide access to services</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Publish information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Send communications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Improve services</span>
                  </li>
                </ul>
              </div>
            </div>
          </PolicySection>

          <Separator />

          <PolicySection icon={Lock} title="Data Security Measures">
            <p>
              The website implements robust technical and organizational measures to safeguard your personal data from:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="font-semibold mb-2">Loss Prevention</p>
                <p className="text-sm">Advanced backup systems</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="font-semibold mb-2">Misuse Protection</p>
                <p className="text-sm">Strict access controls</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="font-semibold mb-2">Security</p>
                <p className="text-sm">Encrypted storage</p>
              </div>
            </div>
          </PolicySection>

          <Separator />

          <PolicySection icon={Bell} title="Policy Updates">
            <p>
              The website reserves the right to update this privacy policy by posting a revised version on this site. You are encouraged to review this page periodically to stay informed of any changes.
            </p>
          </PolicySection>

          <Separator />

          <PolicySection icon={Link} title="Third-Party Websites">
            <p>
              This website may contain links to other external websites. The website is not responsible for the privacy policies or practices of these third-party websites.
            </p>
          </PolicySection>

          <Separator />

          <PolicySection icon={Cookie} title="Cookies and Tracking">
            <div className="bg-muted p-6 rounded-lg">
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience and analyze website traffic. You can control cookie settings through your browser.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">Essential Cookies</p>
                  <p>Required for basic site functionality</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Analytics Cookies</p>
                  <p>Help us improve our services</p>
                </div>
              </div>
            </div>
          </PolicySection>

          <Separator />

          {/* Contact Section */}
          <section className="py-12">
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions regarding this privacy policy or the handling of your personal information, please contact the website's webmaster at:
              </p>
              <div className="inline-flex items-center gap-2 bg-background px-6 py-3 rounded-lg shadow-sm">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:bpp.headoffice@gmail.com" className="text-primary hover:underline">
                  bpp.headoffice@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;