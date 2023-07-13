import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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

export default function Workstation() {
  return (
    <>
      <Head>
        <title>Workstation - Florea Dragos</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="This is what i use to develop the best apps"
        intro="My desk and all the equipment i use to boost productivity."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM">
            This MacBook is the perfect solution for enhanced productivity and a superior work experience, even when i am on the go.
            </Tool>
            <Tool title="Windows PC">
            Intel Core I5-6500, Geforce GTX 1060 6GB, 8GB RAM<br/>
            I only use it if i need to test something on windows.            
            </Tool>
            <Tool title="Main display - Lenovo G34w-10 34 Inch WLED Ultra-Wide Curved Monitor">
              This monitors offers a lot of workspace because of its 3440x1440 ultrawide resolution.
            </Tool>
            <Tool title="Secondary display - Asus VN247">
              Using a secondary display helps me in a lot of situations. Any extra workspace is a bonus.
            </Tool>
            <Tool title="Logitech MX Master 3S">
              Although i love the trackpad, this mouse boosts my productivity.
            </Tool>
            <Tool title="Razer Iskur">
             Just an ergonomic chair.
            </Tool>
          </ToolsSection>
        
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Because i use a lot of IDEs.
            </Tool>
            <Tool title="Terminal"/>
            <Tool title="DevToys">
              An offline app that offers a lot of tools like JSON formatter, Regex verifier, UUID generator and many more.
            </Tool>
            <Tool title="Postman">
              Obviously, testing APIs.
            </Tool>
            <Tool title="Xcode (simulator)">
              For Mobile Apps.
            </Tool>
            <Tool title="Google Chrome">
              Because it&apos;s easier to use developer tools.
            </Tool>
            <Tool title="pgAdmin4">
              I use it to visualize databases.
            </Tool>
            <Tool title="Docker">
              For creating containers.
            </Tool>
            <Tool title="Github">
              For version control.
            </Tool>

          </ToolsSection>
         
          <ToolsSection title="Stack">
            <Tool title="Frontend">
              Javascript <br/>
              Typescript <br/>
              React <br/>
              CSS <br/>
              TailwindCSS 
            </Tool>

            <Tool title="Backend">
              Elixir <br/>
              Phoenix Liveview <br/>
              Python <br/>
              Flask <br/>
              Django <br/>
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
