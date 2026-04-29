"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { companyName, companyTagline } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import {
  BadgePoundSterling,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

type HomePageProps = {
  currentLocationLabel?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  supportImage: {
    src: string;
    alt: string;
  };
};

export function HomePage({
  currentLocationLabel,
  heroImage,
  supportImage,
}: HomePageProps) {
  const locationLinks = buildLocationLinks(currentLocationLabel);
  const faqs = [
    {
      question: "What vehicles do you offer?",
      answer: "We cover cars, vans, minibuses and trucks, depending on what your booking needs.",
    },
    {
      question: "Can you help me pick the right size?",
      answer: "Yes. Share the trip details and we will help you choose a sensible fit.",
    },
    {
      question: "Is this suitable for business hire?",
      answer: "Absolutely. Many customers hire for deliveries, site work, temporary cover and transport between appointments.",
    },
    {
      question: "Do you cater for longer journeys?",
      answer: "Yes. The service is set up for local travel as well as wider UK plans, subject to the booking.",
    },
    {
      question: "How do I arrange a booking?",
      answer: "Contact the team with your dates and preferred vehicle type, and we will help you get started.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <span>{companyName}</span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <details className="group relative z-50">
              <summary className="inline-flex h-9 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
                <MapPin className="h-4 w-4" />
                Locations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-md border bg-white p-1 text-slate-900 shadow-lg">
                {locationLinks.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100"
                  >
                    {location.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button className="bg-[#17a24a] text-white hover:bg-[#12843c]" asChild>
              <a href={phoneHref} className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 pt-32 text-white">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">
                  {"Vehicle Hire North Baddesley for Every Journey"}
                </h1>
                <p className="text-xl text-green-100">
                  {"Self-drive vehicle hire in North Baddesley for cars, vans, minibuses and trucks, with sensible options for private travel, trade work and local journeys across Hampshire."}
                </p>
                <Button
                  size="lg"
                  className="w-fit bg-[#17a24a] text-white hover:bg-[#12843c]"
                  asChild
                >
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <Image
                  src={supportImage.src}
                  alt={supportImage.alt}
                  fill
                  className="object-cover"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border border-green-100 bg-gradient-to-br from-white via-green-50 to-emerald-100 shadow-[0_24px_60px_-24px_rgba(23,162,74,0.45)]">
            <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1 text-sm font-medium text-[#17a24a] backdrop-blur">
                  <PhoneCall className="h-4 w-4" />
                  {"Quick, practical booking"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {"Reserve the right vehicle with confidence"}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {"Tell us what you need, when you need it and how you plan to use it. We’ll help you choose a sensible vehicle and keep the booking process refreshingly simple."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"Flexible collection planning"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#17a24a]" />
                    {"Options for local and long-distance use"}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full bg-[#17a24a] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#17a24a]/25 transition hover:-translate-y-0.5 hover:bg-[#12843c] md:w-auto"
                asChild
              >
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              {"Why customers choose us"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {"A dependable hire service should make your plans easier, not more complicated. Our approach is to keep the process practical, the vehicle choice broad and the support easy to work with."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {[
              {
                title: "Flexible vehicle choice",
                description: "A useful range of vehicles for private trips, trade work and group transport.",
                icon: ShieldCheck,
              },
              {
                title: "Straightforward support",
                description: "Clear guidance to help you pick the right hire option without second-guessing.",
                icon: Star,
              },
              {
                title: "Ready for real use",
                description: "A practical setup for local jobs, regional travel and everyday mobility.",
                icon: Users,
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 text-[#17a24a]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mb-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">
              {"Fleet overview"}
            </p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              {"A broad hire range for real-world transport needs"}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {"Our vehicle hire service is built to cover everyday travel, commercial work and larger group bookings without making the process harder than it needs to be. It is a practical option for customers who want clear choices and dependable support."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#17a24a] text-white hover:bg-[#12843c]"
                asChild
              >
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                value: "Car Hire",
                label: "Flexible travel for everyday journeys",
              },
              {
                value: "Van Hire",
                label: "Practical space for moving and delivery jobs",
              },
              {
                value: "Minibus Hire",
                label: "Ideal for group trips and shared travel",
              },
              {
                value: "Truck Hire",
                label: "Strong transport options for heavier loads",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]"
              >
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">
            {"Why book with us"}
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {"Vehicle hire that stays practical from start to finish"}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"We keep the hire process clear so you can get on with the job in hand. That means sensible vehicle choices, straightforward communication and support that feels useful rather than overcomplicated."}</p>
            <p>{"If you are planning a move, a trade collection, a team outing or a family trip, the fleet mix gives you room to choose well. It is a broad service that works for one-off bookings as well as repeat hire."}</p>
            <p>{"Many customers want a vehicle that fits neatly into a day’s plans without creating extra stress. With that in mind, the service is set up to help with practical travel, local running around and longer mileage alike."}</p>
            <p>{"The same approach suits both private and commercial users. Whether you need more seats, more load space or simply a dependable car for a few days, the booking experience is kept direct and manageable."}</p>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">
              {"Hire benefits"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"More flexibility, less hassle"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"A good hire service should save time as well as provide the right vehicle. That is why the focus stays on choice, convenience and sensible support for different kinds of travel."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BadgePoundSterling,
                title: "Choose the right size",
                description: "Pick a vehicle that suits the job rather than making do with something too small or too large.",
                detail: "Useful for everything from family trips to heavier-duty commercial use.",
              },
              {
                icon: Clock3,
                title: "Keep plans moving",
                description: "A clear booking process helps you stay organised when your day is already full.",
                detail: "Ideal for time-sensitive journeys, scheduled collections and short-notice hire.",
              },
              {
                icon: CheckCircle2,
                title: "Support across different needs",
                description: "The service works well for private customers, tradespeople and businesses with changing transport demands.",
                detail: "A practical fit for moving, deliveries, events and everyday mobility.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(23,162,74,0.35)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 text-[#17a24a] transition group-hover:bg-[#17a24a] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-medium text-[#17a24a]">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">
              {"Service Areas"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              {"Coverage and support across the local area"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"Our service areas are chosen to reflect where local customers actually travel, work and plan their days. That means practical coverage for surrounding towns, commuter links and destinations that matter to everyday hire users."}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
              >
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Well placed for nearby travel"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"North Baddesley is well placed for drivers who need quick access to nearby towns and main Hampshire routes. That makes it a useful service base for customers who want a hire vehicle that fits both local jobs and wider travel plans."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Good for different kinds of booking"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"The range suits households, tradespeople and businesses that need temporary transport without committing to the wrong vehicle size. It keeps choices broad enough to be useful while still feeling easy to understand."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Flexible for short or longer hire"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Whether the hire is for a single day, a longer project or a group journey, the aim is to make collection and use feel straightforward from the outset."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">
              {"Local Guide"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Local driving guide for North Baddesley"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"Plan your trip with a quick look at the main local roads, nearby places to stop and the most practical fuel options around North Baddesley."}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">
              {"North Baddesley sits neatly around Rownhams Road, with Nutburn Road and Knightwood Road giving useful links for shorter local journeys. If you are collecting a van or car for a house move, school run or business call, these roads make it straightforward to head out without battling the busiest city-centre traffic first."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"For longer trips, Castle Lane and Luzborough Lane offer a sensible route towards wider Hampshire connections, while Luzborough Roundabout is a familiar turning point for drivers heading onwards. That mix works well for self-drive hire, especially when you want a simple start to the day and an easy exit towards Southampton or Romsey."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"If you are staying nearby, places such as Chilworth Manor, Days Inn, Wrens Farm B&B, Shepherd's Cabin and The Mini Log Cabin can all suit a hire vehicle booking where luggage space matters. A car or minibus is often the easier choice for guests with bags, equipment or family travel plans, particularly when moving between accommodation and local attractions."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"For fuel and quick checks before returning a vehicle, drivers have a choice of Kingslake Cars, Crampmoor Garage, Asda, BP, Greatbridge Service Station and Shell in the wider area. That gives you a practical range of stop-off points whether you are topping up after a day’s use or setting off early for a longer journey."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">
              {"FAQs"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Common questions about hiring with us"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"A few quick answers to help you plan your hire with less back-and-forth."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-slate-200 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17a24a] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Ready to book your hire vehicle?"}</h2>
          <p className="mb-8 text-lg text-green-100">
            {"Tell us what you need and we will help you arrange a sensible vehicle for the job, the journey or the day ahead."}
          </p>
          <Button
            size="lg"
            className="bg-white text-[#17a24a] hover:bg-gray-100"
            asChild
          >
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t bg-gray-900 px-6 py-12 text-gray-400"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-white">{companyName}</h4>
          </div>
          <p className="mt-4 max-w-md text-sm">{companyTagline}</p>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
