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
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="space-y-8 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Introduction</h2>
                <p>
                  Pixel Bound Games LTD ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile games and services. Please read this Privacy Policy carefully.
                </p>
                <p>
                  By using our games and services, you consent to the data practices described in this policy. If you do not agree with the data practices described in this Privacy Policy, you should not use our games or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (username, email address, password)</li>
                  <li>Profile information and preferences</li>
                  <li>In-game communications and support requests</li>
                  <li>Payment information (processed through third-party payment processors)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Gameplay data (scores, achievements, progress, in-game purchases)</li>
                  <li>Usage data (game features used, session duration, frequency of use)</li>
                  <li>Technical data (IP address, browser type, crash reports, performance data)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Information from Third Parties</h3>
                <p>
                  We may receive information about you from third-party services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Social media platforms (if you connect your account)</li>
                  <li>Analytics providers (Google Analytics, Firebase Analytics)</li>
                  <li>Advertising networks and partners</li>
                  <li>Payment processors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our games and services</li>
                  <li>To process transactions and manage your account</li>
                  <li>To personalize your gaming experience</li>
                  <li>To communicate with you about updates, promotions, and support</li>
                  <li>To detect, prevent, and address technical issues and fraud</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                  <li>To analyze usage patterns and improve game design</li>
                  <li>To deliver targeted advertising (with your consent where required)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Legal Basis for Processing (UK GDPR)</h2>
                <p>Under UK GDPR, we process your personal data based on the following legal bases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consent:</strong> When you have given clear consent for specific purposes</li>
                  <li><strong>Contract:</strong> To perform our contract with you (providing game services)</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Legitimate Interests:</strong> For business operations, security, and fraud prevention</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Data Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our games (hosting, analytics, payment processing)</li>
                  <li><strong>Business Partners:</strong> Advertising networks and marketing partners (with appropriate safeguards)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries outside the UK and European Economic Area (EEA). We ensure appropriate safeguards are in place, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard Contractual Clauses approved by the UK Information Commissioner's Office (ICO)</li>
                  <li>Adequacy decisions where applicable</li>
                  <li>Other appropriate safeguards as required by UK GDPR</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. Data Retention</h2>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your data, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Your Rights Under UK GDPR</h2>
                <p>You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Rights Related to Automated Decision-Making:</strong> Not to be subject to automated decision-making</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">9. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect and store information about your use of our games. These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze game performance and user behavior</li>
                  <li>Deliver personalized content and advertisements</li>
                  <li>Improve security and prevent fraud</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your device or browser settings. However, disabling cookies may affect your ability to use certain features of our games.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">10. Children's Privacy</h2>
                <p>
                  Our games are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
                <p className="mt-4">
                  For users aged 13-17, we recommend parental supervision and consent before using our games.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">11. Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">13. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-white/80">
                  <p><strong>Pixel Bound Games LTD</strong></p>
                  <p>Suite C179 4 - 6, Greatorex Street</p>
                  <p>London, United Kingdom, E1 5NF</p>
                  <p>Phone: <a href="tel:+447490300705" className="text-primary hover:underline">+447490300705</a></p>
                  <p>Email: <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a></p>
                </div>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) if you believe we have not addressed your concerns. Visit <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a> for more information.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

