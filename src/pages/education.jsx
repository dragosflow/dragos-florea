import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Education() {
  return (
    <>
      <Head>
        <title>Education - Florea Dragos</title>
        <meta
          name="description"
          content="Education"
        />
      </Head>
      <SimpleLayout
        title="The education that led me where I am today"
        intro="In my opinion, being a developer means you never stop learning."
      >
        <div className="space-y-20">

          <ToolsSection title="University">
            <Tool title='West University of Timisoara - Computer Science, Romania'>
              Master&apos;s degree in Cybersecurity  <br/>
              Ongoing<br/>
            </Tool>

            <Tool title='West University of Timisoara - Computer Science, Romania'>
                Bachelor&apos;s degree in Computer science <br/>
                Thesis - Teammanager, a web application created with React and Phoenix Liveview
                where users create developer teams and manage projects <br/>
           </Tool>
          </ToolsSection>

          <ToolsSection title="Other">
            <Tool title='Coursera'>
              META FRONT-END DEVELOPER PROFESSIONAL CERTIFICATE
           </Tool>

           <Tool title='Erasmus+ EU for IT career, Portugal'>
              Internship - IT company
           </Tool>

           <Tool title='Eurolingva, Romania'>
              Cambridge FCE - Grade A
           </Tool>

           <Tool title='ECDL, Romania'>
              European Computer Driving License
           </Tool>
          </ToolsSection>
    
        </div>
      </SimpleLayout>
    </>
  )
}
