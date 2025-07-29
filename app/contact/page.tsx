import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'

interface ContactInfo {
  title: string
  description: string
  icon: React.ReactNode
}

const contactInfo: ContactInfo[] = [
  {
    title: 'Email Us',
    description: 'contact@sentinelpeaksolutions.com',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Call Us',
    description: '(555) 123-4567',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: 'Business Hours',
    description: 'Mon-Fri: 9AM-6PM PST',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Response Time',
    description: 'Within 24 hours',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Get Started Today
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
                Ready to transform your digital presence? Let&apos;s discuss your goals and create a 
                customized solution that drives real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {info.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{info.title}</h3>
                  <p className="mt-2 text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s Start Your Digital Transformation
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Whether you need a complete digital overhaul or want to enhance specific areas, 
                  we&apos;re here to help. Our team will work with you to understand your goals and 
                  create a solution that fits your budget and timeline.
                </p>

                {/* What to Expect */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Free Consultation</h4>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ll discuss your business goals, current challenges, and opportunities for growth.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Custom Proposal</h4>
                        <p className="text-muted-foreground text-sm">
                          Receive a detailed proposal with timeline, pricing, and expected outcomes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Implementation</h4>
                        <p className="text-muted-foreground text-sm">
                          Our team gets to work, keeping you updated throughout the entire process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Our Guarantee</h3>
                  <p className="text-green-700 text-sm">
                    We guarantee delivery within our stated timeline. If we&apos;re late, you get 20% off your final invoice. 
                    That&apos;s our commitment to your success.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Transparent Pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No hidden fees. No surprises. Just clear, upfront pricing for all our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Website Setup */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Website Setup</h3>
                <div className="text-2xl font-bold text-primary mb-2">$1,000+</div>
                <p className="text-sm text-muted-foreground">One-time setup fee</p>
              </div>

              {/* Social Content */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Social Content</h3>
                <div className="text-2xl font-bold text-primary mb-2">$399</div>
                <p className="text-sm text-muted-foreground">Per month</p>
              </div>

              {/* CRM & Automation */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">CRM & Automation</h3>
                <div className="text-2xl font-bold text-primary mb-2">$249</div>
                <p className="text-sm text-muted-foreground">Per month</p>
              </div>

              {/* Bundle Savings */}
              <div className="bg-primary p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Growth Bundle</h3>
                <div className="text-2xl font-bold text-primary-foreground mb-2">$399</div>
                <p className="text-sm text-primary-foreground/80">Save $249/month</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Payment terms: 50% upfront, 50% after completion
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}