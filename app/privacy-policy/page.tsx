import type { Metadata } from "next";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Techpotli Digital",
  description: "Privacy Policy for Techpotli Digital. Learn how we collect, store, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <SectionHeading
            badge="Privacy & Security"
            heading="Privacy Policy"
            description="Your privacy is important to us. Learn how we protect your personal information."
            size="lg"
            align="left"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-sm text-gray-700">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                At TechPotli Digital, operated by Techpotli E commerce Private Limited ("we", "our", "us"), your privacy is of utmost importance. This Privacy Policy explains how we collect, store, use, and protect your personal information when you access or use our website https://www.techpotlidigital.com (hereinafter referred to as "Platform") and its services. By using this Platform, you agree to the practices outlined in this Privacy Policy, along with our Terms of Use and applicable service or product terms.
              </p>
              <p className="text-gray-600 mb-6">
                Please note: Some sections of our Platform may be accessed without registration. However, certain services require you to create an account or provide personal information. This Platform and its services are offered only within India, and all personal data will primarily be processed and stored in India in accordance with applicable Indian laws, including the Information Technology Act, 2000.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect personal information when you interact with our Platform or use our services. This information helps us provide better services and ensures a secure and seamless experience. The types of information we collect include:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6 ml-4">
                <li><strong>Personal Identification Information:</strong> Name, date of birth, email address, phone number, postal address, and contact details.</li>
                <li><strong>Account & Registration Details:</strong> Login credentials, profile information, verification documents, and preferences provided during account setup or service use.</li>
                <li><strong>Payment & Financial Data:</strong> Bank account details, debit/credit card or other payment information, collected only with your consent for transactional purposes.</li>
                <li><strong>Sensitive Personal Data:</strong> Biometric information or other sensitive details needed to use certain features, provided voluntarily and with consent.</li>
                <li><strong>Behavioral & Usage Data:</strong> Information about your interactions on the Platform, browsing behavior, preferences, and transaction history.</li>
                <li><strong>Third-Party Data:</strong> Information received from our business partners or service providers, which is governed by their separate privacy policies. We encourage users to review third-party policies before sharing personal information.</li>
              </ol>
              <p className="text-gray-600 mb-4">
                You may choose not to provide certain information; however, some features or services may be inaccessible if required data is not shared.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                The personal data collected on the Platform is used for multiple purposes, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
                <li>Delivering and managing the services you request efficiently.</li>
                <li>Processing transactions, order fulfillment, and resolving disputes or queries.</li>
                <li>Enhancing user experience through personalization, recommendations, and announcements.</li>
                <li>Communicating offers, updates, or promotional materials, with opt-out options for marketing messages.</li>
                <li>Conducting surveys, research, analysis, and improving Platform features.</li>
                <li>Ensuring Platform security, detecting fraud, and protecting against unauthorized or illegal activities.</li>
                <li>Administering our Terms of Use, legal compliance, and protecting our rights and those of our users.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                We handle your personal data responsibly and only use it for lawful purposes as described above.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Data Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We may share your personal information under specific circumstances, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
                <li><strong>Internal Sharing:</strong> With our commercial group entities, affiliates, and partners to deliver services and products effectively.</li>
                <li><strong>Third-Party Providers:</strong> Logistics partners, payment processors, marketing partners, and other service providers who help in delivering services.</li>
                <li><strong>Legal Requirements:</strong> Disclosure to government authorities, law enforcement agencies, or courts as required by Indian law or legal process.</li>
                <li><strong>Security & Fraud Prevention:</strong> To detect, prevent, or investigate illegal activities or violations of our policies.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Please note that third-party websites linked from our Platform have independent privacy policies, and we are not responsible for their data handling practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Security of Your Data</h2>
              <p className="text-gray-600 mb-4">
                We adopt robust technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or disclosure. Security measures include secure servers, encryption, and access controls.
              </p>
              <p className="text-gray-600 mb-4">
                While we strive to maintain secure systems, data transmission over the Internet cannot be guaranteed to be fully secure. Users are responsible for maintaining the confidentiality of their account login credentials and passwords.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Data Retention and Deletion</h2>
              <p className="text-gray-600 mb-4">
                We retain personal data only for as long as needed to provide services, comply with legal obligations, and for lawful business purposes. You may request deletion of your account via your profile settings or by contacting us directly. Pending transactions, claims, or disputes may delay deletion.
              </p>
              <p className="text-gray-600 mb-4">
                Anonymized data may be retained for research, statistical analysis, or business insights without revealing your identity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the following rights concerning your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
                <li>Access, review, and correct your personal data.</li>
                <li>Request deletion of your account and related data (subject to legal or functional constraints).</li>
                <li>Withdraw consent for data processing (affecting future processing only).</li>
                <li>Opt out of marketing and promotional messages.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                To exercise your rights, contact our Grievance Officer at the provided contact details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Consent</h2>
              <p className="text-gray-600 mb-4">
                By using the Platform or submitting information, you consent to our collection, use, and storage of your personal data as described in this Privacy Policy. If you provide information about others, you confirm you have the authority to do so. You can withdraw consent anytime by contacting our Grievance Officer with the subject "Withdrawal of Consent for Processing Personal Data." Please note, withdrawal may limit access to some services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Changes to Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. Users are encouraged to review this page regularly. Continued use of our Platform constitutes acceptance of any updated Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

