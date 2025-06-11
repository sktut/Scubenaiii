import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0 text-purple-400 hover:text-purple-300 hover:bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Terms of Service
          </h1>

          <div className="space-y-6 text-gray-300">
            <p>Last Updated: May 22, 2025</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
              <p>
                Welcome to ScubenAI. These terms and conditions outline the rules and regulations for the use of our
                website and services.
              </p>
              <p>
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to
                use ScubenAI's website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. License to Use</h2>
              <p>
                Unless otherwise stated, ScubenAI and/or its licensors own the intellectual property rights for all
                material on this website. All intellectual property rights are reserved.
              </p>
              <p>
                You may view and/or print pages from the website for your own personal use subject to restrictions set
                in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Republish material from this website</li>
                <li>Sell, rent, or sub-license material from this website</li>
                <li>Reproduce, duplicate, or copy material from this website</li>
                <li>Redistribute content from ScubenAI (unless content is specifically made for redistribution)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. User Accounts</h2>
              <p>
                When you create an account with us, you guarantee that the information you provide us is accurate,
                complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the
                immediate termination of your account on the Service.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account and password, including but not
                limited to the restriction of access to your computer and/or account. You agree to accept responsibility
                for any and all activities or actions that occur under your account and/or password.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Services and Pricing</h2>
              <p>
                ScubenAI reserves the right to modify or discontinue, temporarily or permanently, any service with or
                without notice. Prices for all services are subject to change without notice. We shall not be liable to
                you or to any third party for any modification, price change, suspension, or discontinuance of the
                service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Limitation of Liability</h2>
              <p>
                In no event shall ScubenAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its
                conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">7. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">8. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="text-purple-300">
                Email: legal@scubenai.com
                <br />
                Phone: +91 9905729444
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
