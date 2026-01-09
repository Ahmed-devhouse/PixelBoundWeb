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
              Last Updated: January 7, 2026
            </p>

            <div className="space-y-8 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Agreement to Terms</h2>
                <p>
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "you") and Pixel Bound Games LTD ("Company", "we", "us", "our"), a company registered in England and Wales.
                </p>
                <p className="mt-4">
                  <strong>Platform Disclaimer:</strong> You acknowledge that these Terms are concluded between you and the Company only, and not with Apple Inc., Google LLC, or any other platform provider ("Store"). The Company is solely responsible for the Services and their content.
                </p>
                <p className="mt-4">
                  By accessing our mobile games, applications, or websites (the "Services"), you agree to these Terms. If you do not agree, you must cease using the Services immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Eligibility & Protection of Minors</h2>
                <p><strong>Age Requirement:</strong> You must be at least 13 years old to use our Services.</p>
                <p className="mt-4">
                  <strong>UK Children's Code:</strong> If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms. In accordance with the UK ICO Age Appropriate Design Code, we prioritize the privacy and safety of our younger players by default.
                </p>
                <p className="mt-4">
                  <strong>Legal Capacity:</strong> You must have the legal authority to enter into this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Account Registration</h2>
                <p>When creating an account, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide accurate and current information.</li>
                  <li>Keep your password secure; you are responsible for all activity on your account.</li>
                  <li>Notify us immediately at <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a> or <a href="mailto:saif@pixelboundgames.com" className="text-primary hover:underline">saif@pixelboundgames.com</a> of any unauthorized access.</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend accounts involved in fraudulent or illegal activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Use of Services & Prohibited Conduct</h2>
                <p>
                  You are granted a limited, non-exclusive, non-transferable, revocable license to use our Services for personal, non-commercial entertainment. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use cheats, automation software (bots), hacks, or mods.</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code.</li>
                  <li>Harass, abuse, or defame other players.</li>
                  <li>Use the Services for any commercial purpose without our written consent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. In-App Purchases and Virtual Items</h2>
                <p>
                  Our games may offer virtual currency or items ("Virtual Goods").
                </p>
                <p className="mt-4">
                  <strong>Nature of Goods:</strong> Virtual Goods are licensed to you, not sold. They have no "real world" monetary value and cannot be exchanged for cash.
                </p>
                <p className="mt-4">
                  <strong>UK/EU Right of Withdrawal (Important):</strong> By purchasing Virtual Goods and clicking "Download" or "Access," you expressly consent to the immediate supply of the digital content. You acknowledge that once the download/access begins, you lose your statutory 14-day right to cancel or withdraw from the transaction.
                </p>
                <p className="mt-4">
                  <strong>Refunds:</strong> All purchases are final and non-refundable, except where the content is found to be faulty under the UK Consumer Rights Act 2015.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Intellectual Property</h2>
                <p>
                  All content (graphics, code, music, characters, and branding) is the property of Pixel Bound Games LTD or its licensors. You may not copy, modify, or distribute any part of our Services without our express permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. User-Generated Content</h2>
                <p>
                  If you upload content (e.g., levels, chat messages, or skins), you grant us a worldwide, royalty-free, perpetual license to use and distribute that content. You warrant that your content does not violate any third-party rights or laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Service Availability & Maintenance</h2>
                <p>
                  <strong>Updates:</strong> We may provide mandatory updates to the Services to address security or gameplay.
                </p>
                <p className="mt-4">
                  <strong>No Guarantee:</strong> While we strive for 24/7 availability, we do not guarantee the Services will be error-free or uninterrupted.
                </p>
                <p className="mt-4">
                  <strong>Maintenance:</strong> We are not liable for any temporary loss of access due to scheduled or emergency maintenance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">9. Limitation of Liability (UK Compliance)</h2>
                <p className="mt-4">
                  <strong>9.1 Statutory Rights:</strong> Nothing in these Terms excludes your rights under the UK Consumer Rights Act 2015 (content must be of satisfactory quality, fit for purpose, and as described).
                </p>
                <p className="mt-4">
                  <strong>9.2 Faulty Digital Content:</strong> If our digital content is faulty and damages a device or other digital content belonging to you, and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you reasonable compensation.
                </p>
                <p className="mt-4">
                  <strong>9.3 General Limitation:</strong> To the maximum extent permitted by law, Pixel Bound Games LTD shall not be liable for indirect, incidental, or consequential damages (such as loss of profits) arising from your use of the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">10. Dispute Resolution & Governing Law</h2>
                <p>
                  <strong>Informal Resolution:</strong> You agree to contact us first to resolve any disputes informally.
                </p>
                <p className="mt-4">
                  <strong>Governing Law:</strong> These Terms are governed by the laws of England and Wales.
                </p>
                <p className="mt-4">
                  <strong>Jurisdiction:</strong> Any legal proceedings shall be brought in the courts of England and Wales. (If you are a resident of Scotland or Northern Ireland, you may also bring proceedings in your local courts).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">11. External Store Terms (Apple/Google)</h2>
                <p>
                  <strong>Maintenance:</strong> Apple/Google have no obligation to furnish any maintenance or support services for the app.
                </p>
                <p className="mt-4">
                  <strong>Warranties:</strong> In the event of any failure of the app to conform to any applicable warranty, you may notify the Store for a refund of the purchase price; to the maximum extent permitted by law, the Store will have no other warranty obligation.
                </p>
                <p className="mt-4">
                  <strong>Third-Party Beneficiary:</strong> You acknowledge that Apple/Google and their subsidiaries are third-party beneficiaries of these Terms and have the right to enforce them against you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">12. Contact Information</h2>
                <div className="mt-4 space-y-2 text-white/80">
                  <p><strong>Pixel Bound Games LTD</strong></p>
                  <p>Suite C179 4 - 6, Greatorex Street</p>
                  <p>London, United Kingdom, E1 5NF</p>
                  <p>Email: <a href="mailto:contact@pixelboundgames.com" className="text-primary hover:underline">contact@pixelboundgames.com</a> or <a href="mailto:saif@pixelboundgames.com" className="text-primary hover:underline">saif@pixelboundgames.com</a></p>
                  <p>Phone: <a href="tel:+447490300705" className="text-primary hover:underline">+447490300705</a></p>
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

