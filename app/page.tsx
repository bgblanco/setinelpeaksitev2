import Link from 'next/link'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

interface ServiceCard {
  title: string
  description: string
  features: string[]
  price: string
  href: string
}

const services: ServiceCard[] = [
  {
    title: 'Web Design',
    description: 'Professional websites that convert visitors into customers with modern design and seamless user experience.',
    features: [
      'Responsive mobile-first design',
      'SEO optimization included',
      'Fast loading performance',
      '7-14 day delivery guarantee'
    ],
    price: 'Starting at $1,000',
    href: '/services#web-design'
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and community management to build your brand and engage your audience.',
    features: [
      'Custom content strategy',
      'Daily posting & engagement',
      'Performance analytics',
      'Brand consistency'
    ],
    price: '$399/month',
    href: '/services#social-media'
  },
  {
    title: 'Reputation Management',
    description: 'Protect and enhance your online reputation with proactive monitoring and response strategies.',
    features: [
      '24/7 reputation monitoring',
      'Review response management',
      'Crisis communication',
      'Brand protection'
    ],
    price: 'Part of CRM package',
    href: '/services#reputation'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Transform Your Digital Presence
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-foreground/90">
                Professional web design, strategic social media management, and comprehensive reputation services 
                that drive real business growth. Your success is our mission.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="text-base font-semibold leading-6 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200"
                >
                  View Our Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary-foreground/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground">70%</div>
                <div className="text-sm text-muted-foreground mt-1">Customers lost without professional website</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">60%</div>
                <div className="text-sm text-muted-foreground mt-1">Leads never get proper follow-up</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">+40%</div>
                <div className="text-sm text-muted-foreground mt-1">Average revenue increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">7-14</div>
                <div className="text-sm text-muted-foreground mt-1">Days standard delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Complete Digital Solutions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Everything you need to establish, grow, and protect your digital presence in one comprehensive package.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="relative bg-white p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-foreground">{service.price}</span>
                      <Link
                        href={service.href}
                        className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Pricing CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Growth Platform Bundle
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Get all our services in one comprehensive package and save $249/month compared to individual pricing.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center space-x-4">
                <span className="text-2xl font-bold text-primary-foreground">$399/month</span>
                <span className="text-lg text-primary-foreground/70 line-through">$648/month</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save $249/month
                </span>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                Start Your Transformation
              </Link>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              50% upfront, 50% after completion • 20% off if we&apos;re late on delivery
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
                Industry-Specific Results
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">+45%</div>
                  <div className="text-sm text-muted-foreground mt-1">Patient Bookings</div>
                  <div className="text-xs text-muted-foreground">Medical Practices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">+60%</div>
                  <div className="text-sm text-muted-foreground mt-1">Online Orders</div>
                  <div className="text-xs text-muted-foreground">Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">+50%</div>
                  <div className="text-sm text-muted-foreground mt-1">Qualified Leads</div>
                  <div className="text-xs text-muted-foreground">Service Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">30%</div>
                  <div className="text-sm text-muted-foreground mt-1">No-Show Reduction</div>
                  <div className="text-xs text-muted-foreground">Appointment-Based</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join hundreds of businesses that have already transformed their digital presence with our proven solutions.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
              >
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}