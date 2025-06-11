import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-300">
            <p>Last Updated: May 22, 2025</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
              <p>
                Welcome to ScubenAI. We respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you how we look after your personal data when you visit our website and tell
                you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data</strong> includes email address and telephone numbers.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                  and version, time zone setting and location, browser plug-in types and versions, operating system and
                  platform, and other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website, products, and
                  services.
                </li>
                <li>
                  <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                  from us and our third parties and your communication preferences.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide
                you with a good experience when you browse our website and also allows us to improve our site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">7. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="text-purple-300">
                Email: privacy@scubenai.com
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
