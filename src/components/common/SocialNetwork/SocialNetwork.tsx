import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PropsWithChildren } from 'react'
import Icon from 'src/components/ui/Icon'
import Button from 'src/components/ui/Button'

import Text from '../Text'

type NetworkData = {
  active: boolean
  width: number
  height: number
  link: string
  label: string
}

interface ScannerLinkProps {
  networks?: [NetworkData]
}

function SocialNetwork({
  networks = [
    {
      active: false,
      width: 14,
      height: 14,
      link: '',
      label: '',
    },
  ],
}: PropsWithChildren<ScannerLinkProps>) {
  return (
    <section className="social-network">
      <Text tag="p" className="social-network__label">
        Compartilhe
      </Text>
      <div className="social-network__links">
        {networks?.map((network) => {
          return (
            <a href={network.link} key={network.label}>
              <Button
                aria-label={`Compartilhe para o ${network.label}`}
                iconPosition="left"
                icon={
                  <Icon
                    name={`${network.label}Share`}
                    width={network.width}
                    height={network.height}
                  />
                }
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}

SocialNetwork.displayName = 'SocialNetwork'

export default mark(SocialNetwork)
