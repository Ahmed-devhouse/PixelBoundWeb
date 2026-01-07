import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        
        <div className="relative container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-white">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-white/70 mb-8 text-sm">
              Last Updated: January 7, 2026
            </p>

            <div className="space-y-8 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Introduction and Data Controller</h2>
                <p>
                  Pixel Bound Games LTD ("we", "our", or "us") is the Data Controller for the personal data we collect through our mobile games and services. We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p className="mt-4">
                  <strong>Company Details:</strong> Pixel Bound Games LTD Suite C179 4 - 6, Greatorex Street, London, E1 5NF Email: <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Data:</strong> Username, email address, and password.</li>
                  <li><strong>Support Data:</strong> Communications sent to our support team.</li>
                  <li><strong>Payment Data:</strong> Transactions are handled by Apple/Google; we do not store your credit card details, but we receive confirmation of the purchase.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Mobile Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Device Identifiers:</strong> IP address, Advertising ID (IDFA for iOS, GAID for Android), and unique device IDs.</li>
                  <li><strong>Gameplay Data:</strong> Level progress, scores, achievements, and in-game clicks.</li>
                  <li><strong>Technical Data:</strong> Device model, OS version, language settings, and crash reports.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Third-Party Data</h3>
                <p>
                  We may receive data if you link your account to social media (e.g., Apple Sign-In, Google Play Games, or Facebook), such as your name and profile picture.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Legal Basis for Processing (UK GDPR)</h2>
                <p>We process your data under the following legal grounds:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Contractual Necessity:</strong> To provide the game services you signed up for.</li>
                  <li><strong>Consent:</strong> For targeted advertising and newsletters (which you can withdraw at any time).</li>
                  <li><strong>Legitimate Interests:</strong> To improve our games, prevent fraud, and analyze player behavior to ensure a better experience.</li>
                  <li><strong>Legal Obligation:</strong> To comply with UK tax, anti-fraud, or safety laws.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Children's Privacy & The UK Children's Code</h2>
                <p>We take the "Best Interests of the Child" as a primary consideration.</p>
                <p className="mt-4">
                  <strong>Age Limit:</strong> Our games are generally intended for users aged 13 and older.
                </p>
                <p className="mt-4">
                  <strong>High Privacy by Default:</strong> In compliance with the ICO Age Appropriate Design Code, we do not track precise geolocation or use "nudge techniques" to encourage children to provide more data.
                </p>
                <p className="mt-4">
                  <strong>Verification:</strong> If we discover we have inadvertently collected data from a child under 13 without parental consent, we will delete it immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Sharing Your Data</h2>
                <p>We do not sell your data. We only share it with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Service Providers:</strong> Cloud hosting (e.g., AWS/Google Cloud), analytics (e.g., Unity Analytics, Firebase), and customer support tools.</li>
                  <li><strong>Advertising Partners:</strong> To show ads (only with your consent via App Tracking Transparency on iOS or similar settings on Android).</li>
                  <li><strong>Legal Authorities:</strong> If required by law or to protect the safety of our players.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. International Data Transfers</h2>
                <p>
                  As a UK company, if we transfer data outside the UK (e.g., to servers in the USA), we ensure it is protected by Standard Contractual Clauses (SCCs) or the UK International Data Transfer Agreement (IDTA) to ensure your data remains as safe as it is in the UK.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. Your Rights</h2>
                <p>Under UK GDPR, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Right to Access:</strong> Request a copy of all data we hold on you.</li>
                  <li><strong>Right to Erasure:</strong> Request that we delete your account and all associated data.</li>
                  <li><strong>Right to Object/Restrict:</strong> Opt-out of certain types of processing (like marketing).</li>
                  <li><strong>Right to Data Portability:</strong> Request your data in a machine-readable format.</li>
                  <li><strong>Right to Complain:</strong> If you are unhappy, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ico.org.uk</a>.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Data Retention</h2>
                <p>
                  We keep your data for as long as your account is active. If you are inactive for more than 24 months, we will anonymize or delete your personal data unless we are legally required to keep it (e.g., for financial records of in-app purchases).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">9. Tracking & Advertising (ATT)</h2>
                <p>
                  For iOS users, we follow Apple's App Tracking Transparency (ATT) framework. We will only track your activity across other companies' apps for advertising purposes if you explicitly click "Allow" when the system prompt appears.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">10. Security</h2>
                <p>
                  We use industry-standard encryption (SSL/TLS) and secure server protocols to protect your data. However, no digital transmission is 100% secure; we encourage you to use strong, unique passwords for your game accounts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">11. Contact Us</h2>
                <p>
                  For any privacy-related queries or to exercise your rights, contact our Data Privacy Lead:
                </p>
                <div className="mt-4 space-y-2 text-white/80">
                  <p>Email: <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a></p>
                  <p>Address: Suite C179 4 - 6, Greatorex Street, London, E1 5NF</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

