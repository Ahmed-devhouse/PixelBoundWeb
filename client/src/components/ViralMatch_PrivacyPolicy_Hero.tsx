import React from "react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-white text-black py-20 px-6 sm:px-10 lg:px-24 font-[Montserrat,sans-serif]">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-600">
          Privacy Policy
        </h1>

        <p className="text-gray-700">Last updated: October 30, 2025</p>

        <p className="text-gray-800">
          PixelBound Games (“we”, “our”, or “us”) develops and publishes mobile
          games available on Google Play and the App Store. This Privacy Policy
          explains how we handle your information when you use our games and
          related services.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600">1. Information We Collect</h2>
        <p className="text-gray-800">
          We do not collect personally identifiable information directly.
          However, our games may use third-party services that collect certain
          data to improve gameplay experience and deliver relevant ads. This may
          include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Device type, model, and operating system</li>
          <li>Gameplay progress and achievements</li>
          <li>Advertising identifiers (such as Google Advertising ID)</li>
          <li>IP address and general location (country or region)</li>
          <li>Crash logs and performance analytics</li>
        </ul>

        <h2 className="text-2xl font-semibold text-sky-600">2. Third-Party Services</h2>
        <p className="text-gray-800">
          We may integrate third-party SDKs and tools in our games for analytics,
          ads, and gameplay features. These partners may collect and process data
          according to their own privacy policies:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Google Analytics for Firebase</li>
          <li>Unity Analytics</li>
          <li>AdMob and Unity Ads</li>
          <li>Tenjin (for user acquisition tracking)</li>
          <li>PlayFab or similar backend services</li>
        </ul>
        <p className="text-gray-700">
          We recommend reviewing the privacy policies of these providers to
          understand how your data is handled.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600">3. How We Use the Information</h2>
        <p className="text-gray-800">The data collected is used to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Improve gameplay balance and features</li>
          <li>Fix bugs and optimize performance</li>
          <li>Display personalized or contextual advertisements</li>
          <li>Analyze user engagement and retention</li>
          <li>Comply with legal requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold text-sky-600">4. Children’s Privacy</h2>
        <p className="text-gray-800">
          Our games are intended for a general audience and do not knowingly
          collect personal information from children under 13 years of age. If we
          become aware that such data has been collected, we will delete it
          promptly.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600">5. Data Retention</h2>
        <p className="text-gray-800">
          We retain gameplay and analytics data only as long as necessary to
          achieve the purposes outlined in this policy or as required by our
          partners.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600">6. Security</h2>
        <p className="text-gray-800">
          We take reasonable measures to protect your data against unauthorized
          access, alteration, disclosure, or destruction. However, please note
          that no system is completely secure.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600">7. Your Choices</h2>
        <p className="text-gray-800">
          You can opt out of personalized advertising by adjusting your device’s
          privacy settings:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Android: Settings → Privacy → Ads → Opt out of Ads Personalization</li>
          <li>iOS: Settings → Privacy → Tracking → Disable “Allow Apps to Request to Track”</li>
        </ul>

        <h2 className="text-2xl font-semibold text-sky-600">8. Changes to This Policy</h2>
        <p className="text-gray-800">
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated “Last updated” date.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600">9. Contact Us</h2>
        <p className="text-gray-800">
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <p className="text-gray-900 font-semibold">
          📧 Email: support@pixelboundgames.com
        </p>

        <p className="text-sm text-gray-600 pt-8">
          © {new Date().getFullYear()} Pixel Bound Games LTD. All rights reserved.
        </p>
      </div>
    </section>
  );
}
