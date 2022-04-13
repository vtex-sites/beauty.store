import React from 'react'
import usePersonQuery from 'src/sdk/person/usePersonQuery'
import Link from 'src/components/ui/Link'

const SignInLink: React.FC = () => {
  const person = usePersonQuery()

  return (
    <Link
      as="a"
      href="https://www.facebook.com/"
      title="Facebook"
      target={person?.id ? '/account' : '/login'}
      rel="noopener noreferrer"
      className="signin-link"
    >
      {person?.id ? 'Minha Conta' : 'Entrar'}
    </Link>
  )
}

export default SignInLink
