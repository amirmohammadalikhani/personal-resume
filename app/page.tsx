"use client"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-10">
          <div className="jumr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Amir Mohammad Alikhani</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="icon" className="ml-auto hidden h-8 w-8 md:flex">
                <Github className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex items-center md:hidden">
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-6 md:py-12">
        {/* Hero Section */}
        <AnimatedSection id="about" className="flex items-center justify-center py-12 md:py-24" variant="fadeIn" duration={0.8}>
          <div className="flex gap-6 md:grid-cols-2 md:gap-12">
            <AnimatedSection variant="slideRight" delay={0.2} className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hi, I'm Amir Mohammad Alikhani</h1>
                <p className="text-xl text-muted-foreground">Front End Developer & UI/UX Designer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I create beautiful, functional, and responsive web applications with modern technologies. Passionate
                about crafting exceptional user experiences and solving complex problems.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="scale" delay={0.4} className="flex items-center justify-center">
              <motion.div
                className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80"
                animate={{
                  boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(0,0,0,0.2)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Avatar className="h-full w-full">
                  <AvatarImage src="/placeholder.svg?height=320&width=320" alt="Amir Mohammad Alikhani" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </motion.div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="flex flex-col items-center justify-center py-12 md:py-24" variant="fadeIn">
          <div className="w-3/4 space-y-12 px-4 md:px-6">
            <AnimatedSection
              variant="slideUp"
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are the technologies and tools I work with
                </p>
              </div>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection variant="slideRight" delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Frontend Development</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">React / Next.js</span>
                          <span className="text-sm text-muted-foreground">95%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          <Progress value={95} className="h-2" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">TypeScript</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        >
                          <Progress value={90} className="h-2" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Tailwind CSS</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.9 }}
                        >
                          <Progress value={85} className="h-2" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection variant="slideLeft" delay={0.4}>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Backend Development</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Node.js</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          <Progress value={85} className="h-2" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">PostgreSQL</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "80%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                        >
                          <Progress value={80} className="h-2" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">GraphQL</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.9 }}
                        >
                          <Progress value={75} className="h-2" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            <AnimatedSection variant="staggered" className="flex flex-wrap justify-center gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "GraphQL",
                "Git",
                "Docker",
              ].map((skill) => (
                <motion.div
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="flex flex-col items-center justify-center py-12 md:py-24" variant="fadeIn">
          <div className="w-1/2 space-y-12 px-2 md:px-6">
            <AnimatedSection
              variant="slideUp"
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work History</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional journey and experience
                </p>
              </div>
            </AnimatedSection>
            <Tabs defaultValue="work" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="work" className="mt-6 space-y-6">
                <div className="relative border-l border-muted-foreground/20 pl-6">
                  <AnimatedSection variant="slideRight" delay={0.2} className="mb-10 ml-6">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2021 - Present</time>
                    <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                    <p className="text-base font-normal text-muted-foreground">Tech Innovations Inc.</p>
                    <p className="mt-2 text-base font-normal">
                      Led the development of responsive web applications using React and Next.js. Implemented state
                      management solutions and optimized performance.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection variant="slideRight" delay={0.4} className="mb-10 ml-6">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2018 - 2021</time>
                    <h3 className="text-lg font-semibold">Frontend Developer</h3>
                    <p className="text-base font-normal text-muted-foreground">Digital Solutions LLC</p>
                    <p className="mt-2 text-base font-normal">
                      Developed and maintained client websites and web applications. Collaborated with designers to
                      implement UI/UX improvements.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection variant="slideRight" delay={0.6} className="ml-6">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2016 - 2018</time>
                    <h3 className="text-lg font-semibold">Junior Web Developer</h3>
                    <p className="text-base font-normal text-muted-foreground">Creative Agency Co.</p>
                    <p className="mt-2 text-base font-normal">
                      Assisted in the development of websites and web applications. Learned and implemented modern web
                      development practices.
                    </p>
                  </AnimatedSection>
                </div>
              </TabsContent>
              <TabsContent value="education" className="mt-6 space-y-6">
                <div className="relative border-l border-muted-foreground/20 pl-6">
                  <AnimatedSection variant="slideRight" delay={0.2} className="mb-10 ml-6">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2012 - 2016</time>
                    <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-base font-normal text-muted-foreground">University of Technology</p>
                    <p className="mt-2 text-base font-normal">
                      Graduated with honors. Specialized in web development and software engineering.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection variant="slideRight" delay={0.4} className="ml-6">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">2018 - 2019</time>
                    <h3 className="text-lg font-semibold">Full Stack Web Development Certification</h3>
                    <p className="text-base font-normal text-muted-foreground">Tech Academy</p>
                    <p className="mt-2 text-base font-normal">
                      Intensive program covering modern web development technologies and practices.
                    </p>
                  </AnimatedSection>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="flex flex-col items-center justify-center py-12 md:py-24" variant="fadeIn">
          <div className="w-3/4 space-y-12 px-4 md:px-6">
            <AnimatedSection
              variant="slideUp"
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent work and personal projects
                </p>
              </div>
            </AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project, index) => (
                <AnimatedSection key={project} variant="scale" delay={0.2 * (index + 1)}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <motion.img
                        src={`/placeholder.svg?height=300&width=500`}
                        alt={`Project ${project}`}
                        className="object-cover"
                        width={500}
                        height={300}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">Project {project}</h3>
                      <p className="text-sm text-muted-foreground">
                        A {project === 1 ? "web application" : project === 2 ? "mobile app" : "design system"} built
                        with{" "}
                        {project === 1
                          ? "React and Next.js"
                          : project === 2
                            ? "React Native"
                            : "Figma and Tailwind CSS"}
                        .
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">
                          {project === 1 ? "Next.js" : project === 2 ? "React Native" : "Figma"}
                        </Badge>
                        <Badge variant="outline">
                          {project === 1 ? "TypeScript" : project === 2 ? "Expo" : "Design System"}
                        </Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#">View Project</Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">View on GitHub</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection variant="slideUp" delay={0.6} className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="#">View All Projects</Link>
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="flex flex-col items-center justify-center py-12 md:py-24" variant="fadeIn">
          <div className="w-3/4 space-y-12 px-4 md:px-6">
            <AnimatedSection
              variant="slideUp"
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to chat? Feel free to reach out!
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              <AnimatedSection variant="slideRight" delay={0.3}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">alikhaniamir83@gmail.com</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Linkedin className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-medium">LinkedIn</h3>
                          <p className="text-sm text-muted-foreground">linkedin.com/in/johndoe</p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Github className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-medium">GitHub</h3>
                          <p className="text-sm text-muted-foreground">github.com/johndoe</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection variant="slideLeft" delay={0.5}>
                <Card>
                  <CardContent className="p-6">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Amir Mohammad Alikhani"
                          />
                        </motion.div>
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="alikhaniamir83@gmail.com"
                          />
                        </motion.div>
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <textarea
                            id="message"
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your message here..."
                          />
                        </motion.div>
                      </div>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <AnimatedSection
          variant="slideUp"
          delay={0.2}
          className="flex flex-col items-center justify-between gap-4 py-10 mx-10 md:h-24 md:flex-row md:py-0"
        >
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Amir Mohammad Alikhani. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ y: -3 }}>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  )
}
