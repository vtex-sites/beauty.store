import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PropsWithChildren } from 'react'
import Icon from 'src/components/ui/Icon'
import { Link } from 'gatsby'
import Button from 'src/components/ui/Button'

import Text from '../Text'

interface ScannerLinkProps {
  promotion: number
}

function ScannerLink({ promotion }: PropsWithChildren<ScannerLinkProps>) {
  return (
    <section className="scanner-link">
      <div className="scanner-link__top">
        <Text tag="p">Faça seu scanner facial</Text>
        <Text tag="span">
          E ganhe <b>${promotion}% OFF</b> nos produtos
        </Text>
      </div>
      <Link to="/scanner">
        <Button
          aria-label="Faça seu scanner facial"
          iconPosition="left"
          icon={<Icon name="ArrowRightWhite" width={18} height={18} />}
        />
      </Link>
    </section>
  )
}

ScannerLink.displayName = 'ScannerLink'

export default mark(ScannerLink)
