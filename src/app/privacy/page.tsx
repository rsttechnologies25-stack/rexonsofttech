import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | RexonSoftTech",
  description: "Privacy policy detailing how RexonSoftTech protects, stores, and handles visitor personal data and inquiry information."
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#F5F7FA] pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8 text-left">
            
            {/* Header */}
            <div className="border-b border-slate-100 pb-6 space-y-2">
              <h1 className="text-3xl font-extrabold text-navy-900">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Effective Date: January 1, 2025
              </p>
            </div>

            {/* Intro */}
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              At <span className="text-navy-900 font-bold">rexonsofttech.in</span>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>

            {/* Sections */}
            <div className="space-y-6 text-xs text-slate-600 leading-relaxed">
              
              <div className="space-y-3">
                <h2 className="text-base font-bold text-navy-900">1. Information We Collect</h2>
                <p className="text-xs text-slate-500">
                  We collect personal information only when you voluntarily provide it through our website forms.
                </p>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2.5 max-w-lg text-[11px] font-semibold text-slate-700">
                  <div>
                    <span className="text-navy-900 font-bold">Mandatory Information:</span> Email address
                  </div>
                  <div>
                    <span className="text-navy-900 font-bold">Optional Information:</span> Name, Phone number, Company / Organization name
                  </div>
                  <div>
                    <span className="text-navy-900 font-bold">Automatically Collected Information:</span> Device and browser info, IP address (used only for security and system monitoring), Cookies and usage data.
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">2. How We Use Your Information</h2>
                <p className="text-xs text-slate-500">
                  The information collected is used to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-500">
                  <li>Respond to your inquiries and requests</li>
                  <li>Communicate about our services or business discussions</li>
                  <li>Improve website performance and user experience</li>
                  <li>Prevent spam, fraud, or misuse of our services</li>
                </ul>
                <p className="text-xs text-navy-900 font-bold mt-2">
                  We do not sell, rent, or share your personal information with third parties.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">3. Data Storage & Retention</h2>
                <p className="text-xs text-slate-500">
                  Personal data is retained only as long as necessary to fulfill the purpose for which it was collected. You may request deletion of your data by contacting us.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">4. Cookies</h2>
                <p className="text-xs text-slate-500">
                  We may use cookies to ensure proper website functionality and understand general usage patterns. You can disable cookies in your browser settings if you prefer.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">5. Data Security</h2>
                <p className="text-xs text-slate-500">
                  We implement reasonable administrative and technical safeguards to protect your data. However, no online system can guarantee absolute security.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">6. Children’s Information</h2>
                <p className="text-xs text-slate-500">
                  Our website is not intended for children under the age of 13, and we do not knowingly collect personal data from children.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">7. Your Consent</h2>
                <p className="text-xs text-slate-500">
                  By using this website and submitting your information, you consent to this Privacy Policy.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">8. Updates to This Policy</h2>
                <p className="text-xs text-slate-500">
                  We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <h2 className="text-base font-bold text-navy-900">9. Contact Information</h2>
              <p className="text-xs text-slate-500">
                For any privacy-related concerns or data requests, contact us at:
              </p>
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl max-w-md space-y-2 text-xs font-semibold text-slate-700">
                <p className="flex items-center">
                  <span className="mr-2">📧</span> Email: 
                  <a href="mailto:info@rexonsofttech.in" className="text-accent-500 ml-1.5 hover:underline font-semibold">
                    info@rexonsofttech.in
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📧</span> Alternate Email: 
                  <a href="mailto:rexonsofttech@gmail.com" className="text-accent-500 ml-1.5 hover:underline font-semibold">
                    rexonsofttech@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🌐</span> Website: 
                  <a href="https://rexonsofttech.in" className="text-accent-500 ml-1.5 hover:underline font-semibold">
                    rexonsofttech.in
                  </a>
                </p>
              </div>
            </div>

            {/* Footer rights copy inside the panel */}
            <p className="text-[10px] text-slate-400 font-semibold pt-4">
              © 2026 rexonsofttech.in. All rights reserved.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
