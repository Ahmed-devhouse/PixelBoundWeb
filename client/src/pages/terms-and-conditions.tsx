import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function TermsAndConditions() {
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
              Terms and <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-white/70 mb-8 text-sm">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="space-y-8 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Agreement to Terms</h2>
                <p>
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and Pixel Bound Games LTD ("Company", "we", "us", or "our") regarding your use of our mobile games, applications, websites, and related services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
                </p>
                <p>
                  These Terms apply to all users, including without limitation, users who are browsers, players, customers, merchants, and contributors of content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Eligibility</h2>
                <p>To use our Services, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 13 years of age (or the age of majority in your jurisdiction if higher)</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Not be prohibited from using the Services under applicable laws</li>
                  <li>Comply with all applicable local, national, and international laws and regulations</li>
                </ul>
                <p className="mt-4">
                  If you are under 18, you represent that you have obtained parental or guardian consent to use our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Account Registration</h2>
                <p>When you create an account with us, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Use of Services</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Permitted Use</h3>
                <p>You may use our Services only for lawful purposes and in accordance with these Terms. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Services in compliance with all applicable laws and regulations</li>
                  <li>Respect the rights of other users</li>
                  <li>Not interfere with or disrupt the Services or servers</li>
                  <li>Not attempt to gain unauthorized access to any part of the Services</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Prohibited Activities</h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use cheats, exploits, automation software, bots, hacks, mods, or any unauthorized third-party software</li>
                  <li>Reverse engineer, decompile, disassemble, or attempt to extract source code from our games</li>
                  <li>Modify, adapt, alter, translate, or create derivative works of the Services</li>
                  <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
                  <li>Use the Services to transmit any harmful code, viruses, or malicious software</li>
                  <li>Harass, abuse, harm, or defame other users</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Collect or harvest information about other users without their consent</li>
                  <li>Use the Services for any commercial purpose without our express written consent</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. In-App Purchases and Virtual Currency</h2>
                <p>
                  Our games may offer virtual currency, items, or other in-app purchases. By making an in-app purchase, you agree to the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All purchases are final and non-refundable unless required by law</li>
                  <li>Virtual currency and items have no monetary value and cannot be exchanged for real money</li>
                  <li>We reserve the right to modify, suspend, or discontinue virtual currency or items at any time</li>
                  <li>Prices are subject to change without notice</li>
                  <li>You are responsible for all charges incurred under your account</li>
                </ul>
                <p className="mt-4">
                  If you are located in the UK or EU, you have the right to withdraw from a purchase within 14 days of purchase, unless the digital content has been consumed with your consent. For more information, see our Refund Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Intellectual Property Rights</h2>
                <p>
                  The Services, including all content, features, functionality, graphics, designs, code, and software, are owned by Pixel Bound Games LTD, its licensors, or other providers and are protected by UK and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  These Terms grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial purposes. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy, reproduce, distribute, or create derivative works</li>
                  <li>Modify, adapt, or alter the Services</li>
                  <li>Remove any proprietary notices or labels</li>
                  <li>Use our trademarks, logos, or brand names without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. User Content</h2>
                <p>
                  Our Services may allow you to create, upload, post, or share content ("User Content"). By submitting User Content, you grant us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, translate, and distribute your User Content in any media.
                </p>
                <p className="mt-4">
                  You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You own or have the right to submit the User Content</li>
                  <li>Your User Content does not violate any third-party rights</li>
                  <li>Your User Content is not offensive, harmful, or illegal</li>
                  <li>Your User Content complies with these Terms and applicable laws</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Privacy</h2>
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">9. Service Availability and Modifications</h2>
                <p>
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify, suspend, or discontinue any part of the Services at any time</li>
                  <li>Update, patch, or change the Services without notice</li>
                  <li>Limit or restrict access to the Services</li>
                  <li>Perform maintenance that may temporarily interrupt Services</li>
                </ul>
                <p className="mt-4">
                  We do not guarantee that the Services will be available at all times or that they will be error-free. We are not liable for any loss or damage resulting from service interruptions or modifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">10. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Services immediately, without prior notice, for any reason, including if you breach these Terms.
                </p>
                <p className="mt-4">
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>We may delete your account and all associated data</li>
                  <li>You will lose access to any virtual currency, items, or progress</li>
                  <li>All provisions of these Terms that by their nature should survive termination will survive</li>
                </ul>
                <p className="mt-4">
                  You may terminate your account at any time by contacting us or using account deletion features in the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">11. Disclaimers and Limitation of Liability</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">11.1 Disclaimers</h3>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE BY UK LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">11.2 Limitation of Liability</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY UK LAW, IN NO EVENT SHALL PIXEL BOUND GAMES LTD, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
                </p>
                <p className="mt-4">
                  Nothing in these Terms excludes or limits our liability for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Death or personal injury caused by our negligence</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Any other liability that cannot be excluded or limited under UK law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">12. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Pixel Bound Games LTD, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your User Content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">13. Dispute Resolution</h2>
                <p>
                  If you have any dispute with us, you agree to first contact us at <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a> to attempt to resolve the dispute informally.
                </p>
                <p className="mt-4">
                  <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
                </p>
                <p className="mt-4">
                  <strong>Jurisdiction:</strong> Any disputes arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
                <p className="mt-4">
                  If you are a consumer resident in the UK or EU, you also have the right to bring proceedings in your country of residence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">14. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posting the updated Terms on this page</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending you an email notification (if you have provided an email address)</li>
                  <li>Displaying a notice within the Services</li>
                </ul>
                <p className="mt-4">
                  Your continued use of the Services after any changes constitutes acceptance of the new Terms. If you do not agree to the changes, you must stop using the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">15. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">16. Entire Agreement</h2>
                <p>
                  These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and Pixel Bound Games LTD regarding the Services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">17. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-white/80">
                  <p><strong>Pixel Bound Games LTD</strong></p>
                  <p>Suite C179 4 - 6, Greatorex Street</p>
                  <p>London, United Kingdom, E1 5NF</p>
                  <p>Phone: <a href="tel:+447490300705" className="text-primary hover:underline">+447490300705</a></p>
                  <p>Email: <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a></p>
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

