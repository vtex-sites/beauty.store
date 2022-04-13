import React from 'react'
import usePersonQuery from 'src/sdk/person/usePersonQuery'
import Link from 'src/components/ui/Link'

const SignInLink: React.FC = () => {
  const person = usePersonQuery()

  return (
    <Link
      as="a"
      href={person?.id ? '/account' : '/login'}
      title="Account"
      rel="noopener noreferrer"
      className="signin-link"
    >
      {person?.id ? 'Minha Conta' : 'Entrar'}
    </Link>
  )
}

export default SignInLink
