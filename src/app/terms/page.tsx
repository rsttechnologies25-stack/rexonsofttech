import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | RexonSoftTech",
  description: "Terms and conditions governing the use of the RexonSoftTech software development and cybersecurity consulting website."
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#F5F7FA] pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8 text-left">
            
            {/* Header */}
            <div className="border-b border-slate-100 pb-6 space-y-2">
              <h1 className="text-3xl font-extrabold text-navy-900">
                Terms & Conditions
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Last Updated: January 1, 2025
              </p>
            </div>

            {/* Intro */}
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Welcome to <span className="text-navy-900 font-bold">rexonsofttech.in</span>. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            {/* Sections */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">1. Use of Website</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  The content provided on this website is for informational purposes related to our software development and cybersecurity services. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">2. Intellectual Property</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All trademarks, logos, and materials reproduced on this website are the property of rexonsofttech.in or used with permission. You may not copy or redistribute any part of this site without express written consent.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">3. Limitation of Liability</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  While we strive for accuracy, rexonsofttech.in is not liable for any inaccuracies or omissions in the content provided on this site. Your use of any information is entirely at your own risk.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-bold text-navy-900">4. Governing Law</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your use of this website and any dispute arising out of such use is subject to the laws of India.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <h2 className="text-base font-bold text-navy-900">Contact Information</h2>
              <p className="text-xs text-slate-500">
                For any questions regarding these terms, contact us at:
              </p>
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl max-w-md space-y-2.5">
                <p className="text-xs text-slate-700 font-bold flex items-center">
                  <span className="mr-2">📧</span> Email: 
                  <a href="mailto:info@rexonsofttech.in" className="text-accent-500 ml-1.5 hover:underline font-semibold">
                    info@rexonsofttech.in
                  </a>
                </p>
                <p className="text-xs text-slate-700 font-bold flex items-center">
                  <span className="mr-2">📧</span> Alternate Email: 
                  <a href="mailto:rexonsofttech@gmail.com" className="text-accent-500 ml-1.5 hover:underline font-semibold">
                    rexonsofttech@gmail.com
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
