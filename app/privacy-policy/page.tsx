import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "January 7, 2026";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-purple-600 text-white border-b border-purple-700 sticky top-0 z-10 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">FirmCorner</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-purple-900 mb-3">
              Privacy Policy
            </h2>
            <p className="text-slate-600">Last updated: {lastUpdated}</p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              At FirmCorner, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              data when you use our AI-powered business tools suite, including
              Firm Mailer, Firm Invoice, and Firm Viewer.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-700">
                  By using FirmCorner services, you agree to the collection and
                  use of information in accordance with this policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                1. Information We Collect
              </h3>
            </div>

            <div className="ml-9 space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  1.1 Information You Provide
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>
                    <strong>Account Information:</strong> Name, email address,
                    password, and business details
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Billing address and
                    payment method details (processed securely through
                    third-party payment processors)
                  </li>
                  <li>
                    <strong>Content Data:</strong> Emails, invoices, CSV/Excel
                    files, and other data you upload or create using our
                    services
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Customer support
                    inquiries and feedback
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  1.2 Information Collected Automatically
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>
                    <strong>Usage Data:</strong> Features used, pages visited,
                    time spent, and interaction patterns
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser
                    type, operating system, and device identifiers
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> We use cookies and
                    similar technologies to enhance user experience and analyze
                    usage patterns
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  1.3 OAuth and Third-Party Authentication
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>
                    When you sign in with Google or other OAuth providers, we
                    receive basic profile information (name, email, profile
                    picture)
                  </li>
                  <li>
                    We only request the minimum permissions necessary for
                    authentication and service functionality
                  </li>
                  <li>
                    You can revoke access at any time through your Google
                    Account settings
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                2. How We Use Your Information
              </h3>
            </div>

            <div className="ml-9 space-y-3 text-slate-700">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Delivery:</strong> To provide, maintain, and
                  improve our AI-powered email marketing, invoicing, and data
                  analysis tools
                </li>
                <li>
                  <strong>AI Processing:</strong> To train and improve our AI
                  models for content generation, email optimization, and data
                  analysis (using anonymized and aggregated data only)
                </li>
                <li>
                  <strong>Personalization:</strong> To customize your experience
                  and provide relevant features and recommendations
                </li>
                <li>
                  <strong>Communication:</strong> To send service updates,
                  security alerts, and respond to your inquiries
                </li>
                <li>
                  <strong>Analytics:</strong> To understand usage patterns and
                  improve our services
                </li>
                <li>
                  <strong>Security:</strong> To detect, prevent, and address
                  fraud, security issues, and technical problems
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal
                  obligations and enforce our terms of service
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                3. Data Security
              </h3>
            </div>

            <div className="ml-9 space-y-3 text-slate-700">
              <p>
                We implement industry-standard security measures to protect your
                data:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <CheckCircle className="w-5 h-5 text-purple-600 mb-2" />
                  <p className="font-semibold text-slate-900">Encryption</p>
                  <p className="text-sm">
                    Data encrypted in transit (TLS/SSL) and at rest
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <CheckCircle className="w-5 h-5 text-purple-600 mb-2" />
                  <p className="font-semibold text-slate-900">
                    Access Controls
                  </p>
                  <p className="text-sm">
                    Strict authentication and authorization protocols
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <CheckCircle className="w-5 h-5 text-purple-600 mb-2" />
                  <p className="font-semibold text-slate-900">Regular Audits</p>
                  <p className="text-sm">
                    Security assessments and vulnerability testing
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <CheckCircle className="w-5 h-5 text-purple-600 mb-2" />
                  <p className="font-semibold text-slate-900">Data Backup</p>
                  <p className="text-sm">
                    Regular backups and disaster recovery procedures
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                4. Data Sharing and Disclosure
              </h3>
            </div>

            <div className="ml-9 space-y-3 text-slate-700">
              <p>
                We do not sell your personal information. We may share your data
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  vendors who assist in operating our services (e.g., cloud
                  hosting, payment processing, email delivery) under strict
                  confidentiality agreements
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with
                  mergers, acquisitions, or asset sales, with proper notice to
                  users
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  court order, or to protect our rights and safety
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly
                  authorize data sharing
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                5. Your Rights and Choices
              </h3>
            </div>

            <div className="ml-9 space-y-3 text-slate-700">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account
                  and associated data
                </li>
                <li>
                  <strong>Data Portability:</strong> Export your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications at any time
                </li>
                <li>
                  <strong>Cookie Control:</strong> Manage cookie preferences
                  through your browser settings
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:info@firmcorner.com"
                  className="text-purple-600 hover:underline font-medium"
                >
                  info@firmcorner.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                6. Data Retention
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes outlined in this
                policy. When you delete your account, we will delete or
                anonymize your data within 90 days, except where we are required
                to retain it for legal or regulatory purposes.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                7. AI and Machine Learning
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p className="mb-3">
                Our AI-powered features use machine learning to enhance your
                experience. We want to be transparent about how AI processes
                your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  AI models may analyze your content to provide suggestions and
                  improvements
                </li>
                <li>
                  We use anonymized and aggregated data to train and improve our
                  AI systems
                </li>
                <li>
                  Your individual content is never used to train models that
                  serve other users without explicit consent
                </li>
                <li>
                  You can opt out of AI-powered features in your account
                  settings
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                8. Third-Party Links and Services
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p>
                Our services may contain links to third-party websites or
                integrate with third-party services. We are not responsible for
                the privacy practices of these external sites. We encourage you
                to review their privacy policies before providing any personal
                information.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                9. Children's Privacy
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p>
                FirmCorner is not intended for use by individuals under the age
                of 18. We do not knowingly collect personal information from
                children. If we become aware that we have collected data from a
                child, we will take steps to delete such information promptly.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                10. International Data Transfers
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p>
                Your information may be transferred to and processed in
                countries other than your country of residence. We ensure that
                appropriate safeguards are in place to protect your data in
                accordance with this Privacy Policy and applicable data
                protection laws.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                11. Changes to This Privacy Policy
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of any material changes by posting the new policy on our
                website and updating the "Last Updated" date. Continued use of
                our services after such changes constitutes acceptance of the
                updated policy.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">
                12. Contact Us
              </h3>
            </div>

            <div className="ml-9 text-slate-700">
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-900 mb-3">
                  FirmCorner Support
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@firmcorner.com"
                    className="text-purple-600 hover:underline font-medium"
                  >
                    info@firmcorner.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://firmcorner.com"
                    className="text-purple-600 hover:underline font-medium"
                  >
                    https://firmcorner.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-purple-200">
            <p className="text-sm text-slate-600 text-center">
              This Privacy Policy is effective as of {lastUpdated} and applies
              to all users of FirmCorner services.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white border-t border-purple-700 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 FirmCorner. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://firmcorner.com"
                className="hover:text-purple-200 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
