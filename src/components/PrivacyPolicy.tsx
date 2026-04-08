import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-tight">
            Privacy <span className="font-medium">Commitment</span>
          </h1>
          <p className="text-stone-500 mb-12">Effective Date: April 3, 2026</p>

          <div className="prose prose-stone max-w-none space-y-12 text-stone-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">1. Our Privacy Philosophy</h2>
              <p>
                At <strong>SmartBlindsKC</strong>, we believe that your home is your sanctuary. Protecting the data you share with us is a fundamental part of the premium service we provide. This policy outlines our transparent approach to handling your personal information across our website and during our professional installation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">2. Your Personal Control & Rights</h2>
              <p>You maintain full control over your information at all times:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access & Correction:</strong> You may request to review or update the contact info we have on file for your project.</li>
                <li><strong>Erasure:</strong> You can request the deletion of your data, provided it is not required for active warranty, tax, or legal purposes.</li>
                <li><strong>Communication Preferences:</strong> You can opt-out of our seasonal automation tips or newsletters at any time via the "Unsubscribe" link in our emails.</li>
                <li><strong>Exercise Your Rights:</strong> To make a request, simply contact our privacy team using the details at the bottom of this page.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">3. Information We Collect</h2>
              <p>We only collect the data necessary to deliver a seamless smart home experience.</p>
              
              <h3 className="text-xl font-medium text-stone-900 mt-6 mb-3">Direct Submissions:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity & Contact:</strong> Your name, residential address for installations, email, and primary phone number.</li>
                <li><strong>Project Specifics:</strong> Window dimensions, architectural photos of your space, and your specific automation preferences (e.g., voice control vs. app-based).</li>
                <li><strong>Financial Records:</strong> Payment details for custom orders and history of services rendered.</li>
              </ul>

              <h3 className="text-xl font-medium text-stone-900 mt-6 mb-3">Automated Digital Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Interaction Logs:</strong> How you navigate our site, which window collections you view most, and your approximate location to ensure we serve the Kansas City area.</li>
                <li><strong>Technical Identifiers:</strong> IP addresses, browser versions, and device types used to access our digital platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">4. How Your Data Powers Your Smart Home</h2>
              <p>Your data allows us to move your project from concept to completion:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Service Delivery:</strong> To manufacture custom-fit products and perform precision installations.</li>
                <li><strong>Automation Setup:</strong> To assist in configuring your smart home hubs and mobile applications.</li>
                <li><strong>Technical Support:</strong> To manage your hardware warranties and provide remote troubleshooting.</li>
                <li><strong>Experience Optimization:</strong> To refine our website interface based on how users interact with our "Project Configurator."</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">5. Safeguarding Your Home Data</h2>
              <p>
                We employ industry-standard encryption (SSL/TLS) for all data transmitted through our site. Access to your project files is strictly restricted to authorized personnel who require the information to perform their specific roles, such as your dedicated lead installer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">6. Third-Party Collaborations</h2>
              <p>We do not sell your personal data to brokers or advertisers. We only share information with trusted partners essential to our operations:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Manufacturing Partners:</strong> Sharing dimensions and specifications to build your custom blinds.</li>
                <li><strong>Logistics & Payments:</strong> Securely processing your transactions and coordinating delivery.</li>
                <li><strong>Legal Compliance:</strong> Only when strictly required by law or to protect the safety of our team and clients.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">7. Cookies & Web Technologies</h2>
              <p>
                We utilize "cookies" and similar web beacons to personalize your browsing session. These tools help us recognize you when you return and understand which of our smart features are most popular. You can adjust your browser settings to reject cookies, though this may impact the functionality of our interactive mood boards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">8. Data Retention Timeline</h2>
              <p>
                We keep your project data for as long as your smart blinds are under warranty (typically 3-5 years). This ensures we can provide consistent support and replacement parts if needed. General inquiry data is periodically purged after 24 months of inactivity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">9. Policy Updates</h2>
              <p>
                As smart home technology changes, so might our practices. Any significant updates to this policy will be reflected by a new "Effective Date" at the top of this page. We recommend checking back occasionally to stay informed.
              </p>
            </section>

            <section className="bg-stone-100 p-8 rounded-3xl border border-stone-200">
              <h2 className="text-2xl font-medium text-stone-900 mb-4">10. Contact Information</h2>
              <p className="mb-4">For any questions regarding your privacy or to exercise your data rights, please contact us:</p>
              <div className="text-stone-900 font-medium">
                <p>SmartBlindsKC</p>
                <p>Email: privacy@smartblindskc.com</p>
                <p>Phone: 913-207-8875</p>
                <p>Service Area: Greater Kansas City</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
