'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex size-12 sm:size-16 items-center justify-center rounded-full border-2 border-[#00b15a] bg-white p-1 sm:p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[rgb(245,246,245)] text-gray-800">
      <main className="container mx-auto px-4 pt-8 sm:pt-12 md:pt-16">
        <section className="flex flex-col md:flex-row items-center justify-between py-8 md:py-16 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              <span className="text-[#00b15a]">Invest</span>,{' '}
              <span className="text-[#00b15a]">trade</span> and{' '}
              <span className="text-[#00b15a]">grow</span> your money
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4">
              Earn from ethical products
            </p>
            <div className="mb-4">
              <Link href="https://getwaitlist.com/waitlist/21352">
                <Button className="bg-[#00b15a] hover:bg-[#009e50] text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              <span className="text-[#00b15a] font-semibold">100+ people</span>{' '}
              are in the waitlist
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-6/12"
          >
            <div
              className="relative flex h-[300px] sm:h-[400px] w-full items-center justify-center overflow-hidden"
              ref={containerRef}
            >
              <div className="flex size-full flex-row items-stretch justify-between gap-4 sm:gap-10 max-w-lg">
                <div className="flex flex-col justify-center gap-4">
                  <Circle ref={div1Ref}>
                    <Image
                      src="/stockdata.org.png"
                      alt="stockdata.org"
                      width={32}
                      height={32}
                    />
                  </Circle>
                  <Circle ref={div2Ref}>
                    <Image
                      src="/alphavantage.png"
                      alt="alphavantage.co"
                      width={32}
                      height={32}
                    />
                  </Circle>
                  <Circle ref={div3Ref}>
                    <Image
                      src="/tiingo.png"
                      alt="tiingo.com"
                      width={32}
                      height={32}
                    />
                  </Circle>
                </div>
                <div className="flex flex-col justify-center">
                  <Circle
                    ref={div4Ref}
                    className="size-16 sm:size-24 !bg-[#C7FFC6]"
                  >
                    <Image
                      src="/greentradingbot.png"
                      alt="EcoTrade Bot"
                      width={32}
                      height={32}
                    />
                  </Circle>
                </div>
                <div className="flex flex-col justify-center ">
                  <Circle ref={div6Ref}>
                    <Icons.user />
                  </Circle>
                </div>
              </div>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
              />
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8 md:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: '🌱',
                title: 'Eco-Friendly Investments',
                description:
                  'Focus on sustainable and renewable energy companies',
              },
              {
                icon: '🔍',
                title: 'Ethical Screening',
                description:
                  'Rigorous screening of companies for ethical practices',
              },
              {
                icon: '📈',
                title: 'Profitable Growth',
                description:
                  'Achieve financial growth while supporting responsible businesses',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="text-3xl sm:text-4xl mr-2">
                        {feature.icon}
                      </span>
                      <span className="text-lg sm:text-xl font-semibold text-[#00b15a]">
                        {feature.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-[#00b15a] to-[#009e50] bg-clip-text text-transparent">
            How EcoTrade Bot Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-[#00b15a]">
                    Handpicked Investments
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Our team of experts carefully selects companies that align
                    with our ethical standards and have a positive impact on the
                    environment and society.
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                    <li>
                      Companies that are environmentally friendly and have a
                      positive impact on the environment
                    </li>
                    <li>
                      Companies that are socially responsible and have a
                      positive impact on society
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-[#00b15a]">
                    Algorithmic Analysis (No AI)
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Our advanced algorithms analyze market trends and company
                    performance to identify the most promising ethical
                    investments.
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                    <li>Real-time market data processing</li>
                    <li>Environmental and social impact assessment</li>
                    <li>Risk management and portfolio optimization</li>
                    <li>
                      Currently, we rely on traditional algorithms: AI and ML
                      models are not yet sufficiently advanced for our trading
                      standards.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#00b15a] to-[#009e50] bg-clip-text text-transparent">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            Join thousands of ethical investors and start trading with purpose.
          </p>
          <Link href="https://getwaitlist.com/waitlist/21352">
            <Button className="bg-[#00b15a] hover:bg-[#009e50] text-white text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full">
              Get Started Now
            </Button>
          </Link>
        </motion.section>
      </main>

      <footer className="bg-white text-gray-600 py-6 mt-8 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} EcoTrade Bot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
