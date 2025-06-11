import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <div className="space-y-6 text-gray-300">
            <p>Last Updated: May 22, 2025</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. What Are Cookies</h2>
              <p>
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is
                stored in your web browser and allows the Service or a third-party to recognize you and make your next
                visit easier and the Service more useful to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. How We Use Cookies</h2>
              <p>
                When you use and access our website, we may place a number of cookie files in your web browser. We use
                cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> These are cookies that are required for the operation of our
                  website. They include, for example, cookies that enable you to log into secure areas of our website.
                </li>
                <li>
                  <strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of
                  visitors and to see how visitors move around our website when they are using it. This helps us to
                  improve the way our website works, for example, by ensuring that users are finding what they are
                  looking for easily.
                </li>
                <li>
                  <strong>Functionality cookies:</strong> These are used to recognize you when you return to our
                  website. This enables us to personalize our content for you, greet you by name and remember your
                  preferences.
                </li>
                <li>
                  <strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have
                  visited and the links you have followed. We will use this information to make our website and the
                  advertising displayed on it more relevant to your interests.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the Service, deliver advertisements on and through the Service, and so on.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. What Are Your Choices Regarding Cookies</h2>
              <p>
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
                the help pages of your web browser.
              </p>
              <p>
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use
                all of the features we offer, you may not be able to store your preferences, and some of our pages might
                not display properly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Cookie List</h2>
              <p>
                Here is a list of the cookies that we use. We've listed them here so you can choose if you want to
                opt-out of cookies or not.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>session_id:</strong> Essential cookie to manage user session
                </li>
                <li>
                  <strong>analytics_id:</strong> Analytics cookie to track site usage
                </li>
                <li>
                  <strong>preference_cookie:</strong> Functionality cookie to remember user preferences
                </li>
                <li>
                  <strong>marketing_id:</strong> Targeting cookie for personalized marketing
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. More Information</h2>
              <p>If you have any questions about our use of cookies, please contact us at:</p>
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
