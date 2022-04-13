import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PropsWithChildren } from 'react'
import Icon from 'src/components/ui/Icon'
import Button from 'src/components/ui/Button'

import Text from '../Text'

interface ScannerLinkProps {
  networks: {
    Linkedin?: boolean
    Facebook?: boolean
    Whatsapp?: boolean
    Pinterest: boolean
    Email?: boolean
  }
}

function SocialNetwork({ networks }: PropsWithChildren<ScannerLinkProps>) {
  return (
    <section className="social-network">
      <Text tag="p" className="social-network__label">
        Compartilhe
      </Text>
      <div className="social-network__links">
        <a href="/">
          <Button
            iconPosition="left"
            icon={<Icon name="ShareFacebook" width={32} height={31} />}
          />
        </a>
      </div>
    </section>
  )
}

SocialNetwork.displayName = 'SocialNetwork'

export default mark(SocialNetwork)
