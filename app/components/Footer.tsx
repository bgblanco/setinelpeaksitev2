import Link from 'next/link'
import { SocialMediaLinks } from './SocialMediaLinks'

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { name: 'Web Design', href: '/services#web-design' },
      { name: 'Social Media Management', href: '/services#social-media' },
      { name: 'Reputation Management', href: '/services#reputation' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Portfolio', href: '/portfolio' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">SP</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-foreground">
                  Sentinel Peak Solutions
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transforming businesses through professional web design, strategic social media management, 
                and comprehensive reputation services. Your digital success is our mission.
              </p>
              <SocialMediaLinks />
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Sentinel Peak Solutions. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-sm text-muted-foreground">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}