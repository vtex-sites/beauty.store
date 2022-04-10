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
      <Section>
        <Container>
          <div className="footer__top-section">
            <section className="footer__logo">
              <UIIcon
                component={
                  <img src="/Beauty.svg" alt="Beauty logo" loading="lazy" />
                }
              />
              <p className="store-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </section>
            <FooterLinks />
            <section className="footer__social">
              <Newsletter title="Newsletter" onSubmit={() => {}} />

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
              <UIList>
                <li>
                  <Icon width={20} height={12} name="Mastercard" />
                  <SROnly text="Mastercard" />
                </li>
                <li>
                  <Icon width={26} height={8} name="Visa" />
                  <SROnly text="Visa" />
                </li>
                <li>
                  <Icon width={12} height={12} name="Diners" />
                  <SROnly text="Diners Club" />
                </li>

                <li>
                  <Icon width={12} height={12} name="EloCard" />
                  <SROnly text="Elo Card" />
                </li>
                <li>
                  <Icon width={12} height={14} name="PayPal" />
                  <SROnly text="PayPal" />
                </li>
                <li>
                  <Icon width={26} height={10} name="Hiper" />
                  <SROnly text="Hiper" />
                </li>
                <li>
                  <Icon width={21} height={9} name="Boleto" />
                  <SROnly text="Boleto" />
                </li>
              </UIList>
            </UIPaymentMethods>

            <div className="footer__copyright">
              <p>Copyright © 2021 beauty. Todos os direitos reservados.</p>
            </div>
            <div className="footer__water-mark">
              <p className="water-mark-text">Powered by</p>
              <Icon width={46} height={16} name="VtexLogo" />
              <p className="water-mark-text">Developed by</p>
              <Icon width={29} height={16} name="M3Logo" />
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default mark(Footer)
