import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar solid={true} />
      <main className="min-h-screen bg-[var(--color-ink)] pt-48 md:pt-56 pb-24 px-6 md:px-12 text-[var(--color-sand)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)] mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Privacy Policy for KLB Homes</h1>
          <p className="text-[var(--color-sand-dim)] italic mb-12">Last Updated: May 27, 2025</p>

          <div className="space-y-10 text-[var(--color-sand-dim)] leading-relaxed font-light">
            <p>
              KLB Homes, owned and operated by KLB Solutions FZCO, is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you access our lead generation website, which connects potential clients with real estate agents in Marbella, Spain.
            </p>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">1. Data Controller</h2>
              <p>
                <strong>KLB Solutions FZCO</strong><br />
                Address: Unit No. 21089 – 001, IFZA Business Park, DDP, Dubai, United Arab Emirates<br />
                Contact Email: <a href="mailto:info@klb-solutions.com" className="text-[var(--color-bronze)] hover:underline">info@klb-solutions.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of personal data from you:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data:</strong> Name, contact information, birthdate</li>
                <li><strong>Contact Data:</strong> Email address, phone numbers</li>
                <li><strong>Property Preferences:</strong> Information related to real estate interests, budget, and locality preferences</li>
                <li><strong>Technical Data:</strong> IP address, browser type, OS</li>
                <li><strong>Usage Data:</strong> How you interact with our website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">3. How We Collect Your Information</h2>
              <p className="mb-4">We collect data through:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Direct interactions with our site (forms and communications)</li>
                <li>Automated technologies like cookies (see our Cookie Policy)</li>
                <li>Third-party analytics providers</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">4. Purpose and Legal Basis for Processing</h2>
              <p className="mb-4">We process your data for these purposes:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Connecting you with real estate agents in Marbella</li>
                <li>Responding to inquiries</li>
                <li>Sending updates and marketing communications with consent</li>
                <li>Improving our website</li>
                <li>Complying with legal requirements</li>
              </ul>
              <p>
                The legal basis for processing includes consent, contract performance, legitimate interests, and legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">5. Data Sharing</h2>
              <p className="mb-4">We may share your personal data with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real estate agents/agencies in Marbella</li>
                <li>Service providers who assist in operations like hosting and analytics</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">6. International Data Transfers</h2>
              <p>
                As KLB Solutions FZCO is based outside the EU, your data might be transferred internationally and we ensure proper GDPR safeguards are applied for these transfers like Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">7. Data Retention</h2>
              <p>
                Your information is kept only as long as necessary for its purpose or required by law, after which we securely dispose of it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">8. Your Rights Regarding Your Data</h2>
              <p className="mb-4">Under GDPR and Spanish law, you have rights to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Access your data</li>
                <li>Correct inaccurate information</li>
                <li>Request erasure</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p>
                To exercise any rights, contact us at <a href="mailto:info@klb-solutions.com" className="text-[var(--color-bronze)] hover:underline">info@klb-solutions.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">9. Data Security</h2>
              <p>
                We implement security measures to prevent unauthorised access, use, or disclosure of your data.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">10. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies; see our Cookie Policy for more details. You can manage your cookie preferences via your browser settings, yet turning off cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">11. Changes to This Policy</h2>
              <p>
                KLB Solutions may update this policy as needed to reflect service changes. Notification will occur via updated terms on this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">12. Contact Information</h2>
              <p className="mb-4">For questions or exercising your rights, reach us at:</p>
              <p>
                Email: <a href="mailto:info@klb-solutions.com" className="text-[var(--color-bronze)] hover:underline">info@klb-solutions.com</a><br />
                Mail: KLB Solutions FZCO<br />
                Unit No. 21089 – 001, IFZA Business Park, DDP, Dubai, United Arab Emirates
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">13. Complaints</h2>
              <p>
                For any unresolved data issues, you can lodge a complaint with the AEPD in Spain:<br />
                Website: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[var(--color-bronze)] hover:underline">https://www.aepd.es</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[var(--color-sand)] mb-4">14. Special Notes on Children’s Data</h2>
              <p>
                Our services are not directed to children under 14 in accordance with Spanish law, and we do not knowingly collect data from them.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
