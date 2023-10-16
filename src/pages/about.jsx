import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Florea Dragos</title>
        <meta
          name="description"
          content="I’m Florea Dragos. I live in Timisoara, Romania, where I simply develop applications."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-contain dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Florea Dragos. I live in Timisoara, Romania where I develop applications.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Since my earliest memories, I have been captivated by the world of computers.
              Even at a young age, I found myself immersed in video games, constantly amazed by the
              capabilities of the machines behind them. This curiosity sparked a burning question in my mind:
              How does a computer possess the power to accomplish such incredible feats?
              As I grew older, my fascination with computers deepened,
              and I began to delve into the realm of programming. 
              I wanted to uncover the secrets behind these technological marvels and understand the logic 
              that drove their operations. This journey of exploration quickly transformed into a passion 
              that would shape my life.
              </p>
              <p>
                Why web/mobile development? because it perfectly aligns with my love for writing code and 
                witnessing the tangible results of my work.
                While the process of coding itself brings me immense satisfaction, there is an extra layer of 
                fulfillment when I can see the impact of my code materialize right before my eyes.
                The dynamic nature of web/mobile development adds an extra level of excitement to the equation. 
                With every project, there are new challenges to tackle and innovative solutions to explore. 
                The field constantly evolves, pushing me to adapt and learn new technologies and frameworks. 
                This perpetual learning process keeps me engaged and motivated, as there is always something 
                new to discover and incorporate into my work.
              </p>
              <p>
                Apart from computers, I have a diverse range of hobbies that bring balance and joy to my life.
                One of my favorites is going for walks with my friends because it allows me to take a break from
                the digital realm. When I want to unwind and enjoy some leisure time,
                playing on the PS5 is one of my go-to activities. Football is a sport that has always fascinated me.
                Whether it&apos;s playing with friends in a local park or watching professional matches,
                it is a great way for me to stay active.
                Driving is another thing that I thoroughly enjoy.
              </p>
              <p>
                Today, Im the founder of AppFlow,  a dynamic and innovative company specializing in 
                the development of top-notch web and mobile applications. Our primary objective at AppFlow 
                is to create technology solutions that not only meet the needs of our clients but also bring 
                immense value and benefits to the end-users. With this in mind, we strive to develop 
                user-friendly applications that provide a seamless experience for users, allowing them to 
                effortlessly navigate and interact with our products.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              
              <SocialLink href="https://instagram.com/_dragos_?igshid=NTc4MTIwNjQ2YQ==" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/dragosflow" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/dragos-florea-001974185/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:dragos@appflow.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                dragos@appflow.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
