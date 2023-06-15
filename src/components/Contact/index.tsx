import { HTMLAttributes, ReactNode } from 'react'

interface ContactsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Contacts = ({ children, ...rest }: ContactsProps) => {
  return (
    <div className="container-contacts" {...rest}>
      {children}
    </div>
  )
}
