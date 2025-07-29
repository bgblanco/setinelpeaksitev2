import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface ServiceFeature {
  title: string
  description: string
}

interface Service {
  id: string
  title: string
  description: string
  price: string
  timeline: string
  features: ServiceFeature[]
  benefits: string[]
}

const services: Service[] = [
  {
    id: 'web-design',
    title: 'Professional Web Design',
    description: 'Modern, responsive websites that convert visitors into customers with seamless user experience and SEO optimization.',
    price: 'Starting at $1,000',
    timeline: '7-14 days',
    features: [
      {
        title: 'Mobile-First Responsive Design',
        description: 'Websites that look and perform perfectly on all devices, from smartphones to desktops.'
      },
      {
        title: 'SEO Optimization',
        description: 'Built-in search engine optimization to help your website rank higher in search results.'
      },
      {
        title: 'Fast Loading Performance',
        description: 'Optimized for speed to ensure visitors stay engaged and search engines rank you higher.'
      },
      {
        title: 'Content Management System',
        description: 'Easy-to-use CMS that lets you update your content without technical knowledge.'
      }
    ],
    benefits: [
      '70% of potential customers are lost without a professional website',
      'Mobile-responsive design increases engagement by 60%',
      'Fast loading speeds reduce bounce rate by 40%',
      'SEO optimization drives 3x more organic traffic'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Strategic content creation, community management, and brand building across all major social platforms.',
    price: '$399/month',
    timeline: 'Ongoing service',
    features: [
      {
        title: 'Custom Content Strategy',
        description: 'Tailored content plans that align with your business goals and audience preferences.'
      },
      {
        title: 'Daily Posting & Engagement',
        description: 'Consistent, high-quality posts with active community management and audience engagement.'
      },
      {
        title: 'Performance Analytics',
        description: 'Detailed monthly reports showing growth metrics, engagement rates, and ROI insights.'
      },
      {
        title: 'Brand Consistency',
        description: 'Unified brand voice and visual identity across all social media platforms.'
      }
    ],
    benefits: [
      'Increases brand awareness by 80% on average',
      'Drives 40% more website traffic from social channels',
      'Builds authentic customer relationships and loyalty',
      'Generates qualified leads through social engagement'
    ]
  },
  {
    id: 'reputation',
    title: 'Reputation Management',
    description: 'Comprehensive online reputation monitoring, review management, and crisis communication to protect your brand.',
    price: 'Included in CRM package ($249/month)',
    timeline: '24/7 monitoring',
    features: [
      {
        title: '24/7 Reputation Monitoring',
        description: 'Continuous monitoring of mentions, reviews, and discussions about your brand across the web.'
      },
      {
        title: 'Review Response Management',
        description: 'Professional responses to all reviews, both positive and negative, to maintain your reputation.'
      },
      {
        title: 'Crisis Communication',
        description: 'Rapid response strategies to address and mitigate negative publicity or PR crises.'
      },
      {
        title: 'Brand Protection',
        description: 'Proactive measures to protect your brand image and online presence from potential threats.'
      }
    ],
    benefits: [
      '90% of consumers read online reviews before making decisions',
      'Positive reputation increases customer trust by 70%',
      'Quick crisis response minimizes long-term damage',
      'Professional review management improves average ratings'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Complete Digital Solutions
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
                Everything you need to establish, grow, and protect your digital presence. 
                Our comprehensive services work together to drive real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Price</div>
                      <div className="text-xl font-bold text-foreground">{service.price}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                      <div className="text-xl font-bold text-foreground">{service.timeline}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
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
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Features */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl font-semibold text-foreground mb-6">What&apos;s Included</h3>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-border">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Bundle CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Get Everything with Our Growth Platform Bundle
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Combine all three services and save $249/month. Perfect for businesses ready to dominate their market.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-sm text-primary-foreground/80 mb-1">Individual Services</div>
                <div className="text-2xl font-bold text-primary-foreground line-through">$648/month</div>
                <div className="text-xs text-primary-foreground/70">+ $1,000 setup</div>
              </div>
              
              <div className="text-primary-foreground text-2xl">→</div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-1">Growth Platform Bundle</div>
                <div className="text-3xl font-bold text-primary">$399/month</div>
                <div className="text-xs text-green-600 font-semibold">Save $249/month</div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
              >
                Start Your Bundle Today
              </Link>
            </div>
            
            <p className="mt-4 text-sm text-primary-foreground/80">
              50% upfront, 50% after completion • 20% off if we&apos;re late on delivery
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What if you&apos;re late on delivery?
                </h3>
                <p className="text-muted-foreground">
                  We guarantee 7-14 day delivery for websites. If we&apos;re late, you get 20% off your final invoice. 
                  This is our commitment to your timeline and business needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How does the payment structure work?
                </h3>
                <p className="text-muted-foreground">
                  We require 50% upfront to begin work, with the remaining 50% due upon completion. 
                  This ensures we&apos;re both committed to the project&apos;s success.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I start with one service and add others later?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! You can start with any individual service and upgrade to our Growth Platform Bundle 
                  at any time to unlock savings and comprehensive coverage.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What makes your approach different?
                </h3>
                <p className="text-muted-foreground">
                  We focus on business results, not just digital presence. Our services are designed to work together, 
                  creating a comprehensive digital ecosystem that drives real revenue growth for your business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}