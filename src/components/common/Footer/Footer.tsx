import {
  Icon as UIIcon,
  List as UIList,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'
import React from 'react'
import Newsletter from 'src/components/sections/Newsletter'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import SROnly from 'src/components/ui/SROnly'
import { mark } from 'src/sdk/tests/mark'

import Container from '../Container'
import Section from '../Section'
import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <footer className="footer">
      <Section className="footer">
        <Container>
          <div className="footer__section">
            <section className="footer__logo">
              <UIIcon
                component={
                  <img src="/Beauty.svg" alt="Beauty logo" loading="lazy" />
                }
              />
              <p className="footer__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </section>
            <FooterLinks />
            <section className="footer__social">
              <Newsletter title="Newsletter" onSubmit={() => alert('submit')} />

              <UIList variant="unordered">
                <li>
                  <Link
                    as="a"
                    href="https://www.facebook.com/"
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UIIcon
                      component={
                        <Icon width={12} height={12} name="Facebook" />
                      }
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    as="a"
                    href="https://www.youtube.com/"
                    title="Youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UIIcon
                      component={<Icon width={14} height={14} name="Youtube" />}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    as="a"
                    href="https://www.linkedin.com/"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UIIcon
                      component={
                        <Icon width={21} height={21} name="LinkedIn" />
                      }
                    />
                  </Link>
                </li>
              </UIList>
            </section>
          </div>

          <div className="footer__note">
            <UIPaymentMethods>
              <p className="title-sub-subsection">Payment Methods</p>
              <UIList>
                <li>
                  <Icon width={34} height={24} name="Visa" />
                  <SROnly text="Visa" />
                </li>
                <li>
                  <Icon width={34} height={24} name="Diners" />
                  <SROnly text="Diners Club" />
                </li>
                <li>
                  <Icon width={34} height={24} name="Mastercard" />
                  <SROnly text="Mastercard" />
                </li>
                <li>
                  <Icon width={34} height={24} name="EloCard" />
                  <SROnly text="Elo Card" />
                </li>
                <li>
                  <Icon width={34} height={24} name="PayPal" />
                  <SROnly text="PayPal" />
                </li>
                <li>
                  <Icon width={34} height={24} name="Stripe" />
                  <SROnly text="Stripe" />
                </li>
                <li>
                  <Icon width={34} height={24} name="GooglePay" />
                  <SROnly text="Google Pay" />
                </li>
                <li>
                  <Icon width={34} height={24} name="ApplePay" />
                  <SROnly text="Apple Pay" />
                </li>
              </UIList>
            </UIPaymentMethods>

            <div className="footer__copyright / text-body-small">
              <p>This website uses VTEX technology</p>
              <p>
                In-store price may vary. Prices and offers are subject to
                change. 2021 Store name. All rights reserved. Store is a
                trademark of Store and its affiliated companies.
              </p>
              <address>Mount St, 000, New York / NY - 00000.</address>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default mark(Footer)
