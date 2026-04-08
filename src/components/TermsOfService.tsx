import { motion } from 'motion/react';

export function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-tight">
            Terms of <span className="font-medium">Service</span>
          </h1>
          <p className="text-stone-500 mb-12">Last updated: April 3, 2026</p>

          <div className="prose prose-stone max-w-none space-y-12 text-stone-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">1. Service Region & Availability</h2>
              <p>
                <strong>SmartBlindsKC</strong> proudly serves the Greater Kansas City metropolitan area, covering residential and commercial properties across both Kansas and Missouri. While we strive to reach all local communities, service availability is subject to our current operational range. Please contact us directly to confirm if your specific location is within our primary service zone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">2. Our Smart Solutions</h2>
              <p>We specialize in premium, custom-tailored window treatments, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Automated Systems:</strong> Motorized zebra, roller, and cellular shades with app and voice integration.</li>
                <li><strong>Custom Fabrications:</strong> Designer curtains, roman shades, and high-quality wood/faux-wood blinds.</li>
                <li><strong>Professional Services:</strong> Every purchase includes a complimentary in-home design consultation, precision laser measurement, and expert white-glove installation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">3. Comprehensive 3-5 Year Warranty</h2>
              <p>We stand behind our craftsmanship with a <strong>3-5 year parts and labor warranty</strong> (depending on the specific product line) on all professionally installed products.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>What’s Covered:</strong> Manufacturing defects in materials and installation-related workmanship.</li>
                <li><strong>What’s Not Covered:</strong> Normal wear and tear, natural UV fading, damage from pets or misuse, moisture-related structural issues, or third-party software/connectivity failures (e.g., home Wi-Fi or third-party smart hubs).</li>
                <li><strong>Claims:</strong> All warranty requests must be submitted with photographic evidence for our technical review.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">4. Property Access & Safety</h2>
              <p>By scheduling an appointment, you authorize our technicians to enter your property and access the designated work areas.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Environment:</strong> You agree to provide a safe, unobstructed work environment and to ensure pets are secured.</li>
                <li><strong>Supervision:</strong> An adult (18+) must be present for the duration of the installation.</li>
                <li><strong>Right to Reschedule:</strong> We reserve the right to pause work if we encounter unsafe conditions or restricted access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">5. Custom Manufacturing & Orders</h2>
              <p>Because every <strong>SmartBlindsKC</strong> product is built to your exact window specifications:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Finality:</strong> Once production begins (typically <strong>48 hours</strong> after order), orders are non-refundable and cannot be modified.</li>
                <li><strong>Timelines:</strong> Standard production is <strong>1-2 weeks</strong>, though global supply chain factors may occasionally impact these estimates.</li>
                <li><strong>Approval:</strong> You are responsible for reviewing and signing off on all style, color, and automation choices before we initiate manufacturing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">6. Measurement Integrity</h2>
              <p>We take full responsibility for measurements taken by our certified experts. However:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Structural Changes:</strong> If you modify your window frames or walls after our measurement but before installation, the original fit guarantee is void.</li>
                <li><strong>Client Measurements:</strong> If you choose to provide your own measurements for a "product-only" order, you accept all liability for fitment errors.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">7. Installation & Liability</h2>
              <p>Our team is trained to handle complex smart home integrations.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Pre-existing Conditions:</strong> We are not liable for damage resulting from pre-existing structural defects, crumbling drywall, or faulty electrical wiring discovered during the process.</li>
                <li><strong>Preparation:</strong> Homeowners are asked to remove existing window treatments and clear furniture away from windows prior to our arrival.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">8. Financial Terms & Payments</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Quotes:</strong> All project estimates are valid for <strong>15 days</strong>.</li>
                <li><strong>Deposits:</strong> A standard deposit is required to move your project into the manufacturing phase.</li>
                <li><strong>Final Balance:</strong> The remaining balance is due immediately upon the successful completion of your installation.</li>
                <li><strong>Methods:</strong> We accept all major credit cards, secure digital payments, and local checks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">9. Cancellations & Refunds</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Grace Period:</strong> You may cancel your order within <strong>2 business days</strong> of signing for a full refund of your deposit.</li>
                <li><strong>Post-Grace Period:</strong> After 2 business days, deposits are retained to cover administrative and material procurement costs.</li>
                <li><strong>Defects:</strong> If a product arrives with a manufacturing defect, we will repair or replace it at no additional cost to you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">10. Portfolio & Media Consent</h2>
              <p>
                We take pride in our work. With your verbal or written permission, we may take "after" photos of your installation to feature in our digital portfolio or social media. We will never disclose your full name or exact address alongside these images. You may opt-out of this at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">11. Legal Framework & Disputes</h2>
              <p>
                These Terms are governed by the laws of the State of Kansas. We aim to resolve all client concerns through direct, good-faith communication. If a formal dispute arises, it shall be settled in the appropriate courts of Kansas or Missouri, depending on the service location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-stone-900 mb-4">12. Agreement Updates</h2>
              <p>
                <strong>SmartBlindsKC</strong> reserves the right to modify these Terms to reflect changes in our services or legal requirements. The "Last updated" date will always be visible at the top of this page.
              </p>
            </section>

            <section className="bg-stone-100 p-8 rounded-3xl border border-stone-200">
              <h2 className="text-2xl font-medium text-stone-900 mb-4">13. Contact Us</h2>
              <p className="mb-4">For questions regarding these Terms of Service, please reach out:</p>
              <div className="text-stone-900 font-medium">
                <p>SmartBlindsKC</p>
                <p>Phone: 913-207-8875</p>
                <p>Email: legal@smartblindskc.com</p>
                <p>Address: Serving the Greater Kansas City Area</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
