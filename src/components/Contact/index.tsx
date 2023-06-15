import { ReactNode } from 'react'

interface ContactsProps {
  children: ReactNode
}

export const Contacts = ({ children }: ContactsProps) => {
  return <div className="container-contacts">{children}</div>
}
