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

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Chandler's Ford");
  const heroImage = { src: "/images/location6-image1.jpeg", alt: "A clean hire van parked on a business park road in Chandler's Ford." };
  const supportImage = { src: "/images/location6-image2.jpeg", alt: "A customer receiving keys beside a hire van in Chandler's Ford." };
  const faqs = [
    { question: "Is Chandler's Ford suitable for car hire?", answer: "Yes. Car hire works well for commuting, appointments and everyday driving." },
    { question: "Can I book a van for a local delivery or move?", answer: "Yes. Vans are a practical choice for moving items, stock or trade materials." },
    { question: "Do you provide minibuses for group travel?", answer: "Yes. Minibus hire is useful for family plans, clubs and event transport." },
    { question: "What are trucks useful for?", answer: "Trucks are suited to heavier loads, larger projects and commercial transport." },
    { question: "Can you help me choose the best hire option?", answer: "Yes. We can talk through your trip and suggest a suitable vehicle type." },
  ];
  const trustCards = [
    { title: "Handy for commuter routes", description: "A sensible choice for regular travel across Chandler's Ford and nearby towns.", icon: ShieldCheck },
    { title: "Useful for business errands", description: "Ideal when work needs extra transport for a short period.", icon: Star },
    { title: "Options for bigger plans", description: "A broad range that can suit heavier jobs or passenger travel.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Flexible travel for everyday journeys" },
    { value: "Van Hire", label: "Practical space for moving and delivery jobs" },
    { value: "Minibus Hire", label: "Ideal for group trips and shared travel" },
    { value: "Truck Hire", label: "Strong transport options for heavier loads" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Good for everyday driving", description: "Chandler's Ford customers often want transport that fits commuting and routine plans.", detail: "A hire car can be the easiest choice for simple, flexible travel." },
    { icon: Clock3, title: "Space when you need it", description: "A van or truck gives you the room to handle jobs that would otherwise take too long.", detail: "Helpful for deliveries, moves and practical work." },
    { icon: CheckCircle2, title: "Good for group movement", description: "A minibus keeps journeys together and reduces the need for multiple vehicles.", detail: "Useful for events, clubs and family travel." },
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
                  <Link key={location.href} href={location.href} className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100">
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
        <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire Chandler's Ford for Practical Local Travel"}</h1>
                <p className="text-xl text-green-100">{"Choose from cars, vans, minibuses and trucks with a service that suits everyday trips, working days and larger transport needs across Hampshire."}</p>
                <Button size="lg" className="w-fit bg-[#17a24a] text-white hover:bg-[#12843c]" asChild>
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <Image src={supportImage.src} alt={supportImage.alt} fill className="object-cover" sizes="420px" />
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
                  {"Chandler's Ford hire options"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Arrange transport that fits the plan"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"If you need a vehicle for a commute, a delivery or a bigger journey, it helps to have a booking process that stays straightforward and a fleet that gives you room to choose."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"Local and regional journeys"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#17a24a]" />
                    {"Business and personal use"}
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full rounded-full bg-[#17a24a] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#17a24a]/25 transition hover:-translate-y-0.5 hover:bg-[#12843c] md:w-auto" asChild>
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{"A practical hire choice for Chandler's Ford"}</h2>
            <p className="text-lg text-muted-foreground">{"Reliable vehicle options and clear support for customers who need transport without unnecessary complexity."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 text-[#17a24a]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Chandler's Ford vehicle hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Flexible hire for commuting, moving and group trips"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Chandler's Ford is a strong fit for customers who want a vehicle that can handle a mix of everyday and occasional use. Our hire range is built to cover those needs in a sensible, no-fuss way."}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#17a24a] text-white hover:bg-[#12843c]" asChild>
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local hire overview"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle Hire Chandler's Ford for work, family and travel needs"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Chandler's Ford is well placed for drivers who want easy access to surrounding Hampshire routes while still keeping local travel manageable. That makes it a natural place to arrange a hire vehicle for all kinds of day-to-day use."}</p>
            <p>{"A compact car can suit commuting or appointments, while a van or truck gives you more flexibility for moving jobs and commercial work. If you are organising travel for a group, a minibus can be the simplest solution."}</p>
            <p>{"The service also works well for temporary cover, one-off jobs and planned trips that need a bit more room than a personal vehicle provides. That mix of use cases is exactly where self-drive hire proves its value."}</p>
            <p>{"Booking remains focused on the essentials, with clear guidance and practical options. It is a straightforward approach for customers who want the right vehicle without a lengthy process."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Why choose us"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hire that keeps Chandler's Ford moving"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A suitable vehicle, sensible support and a clean booking process help make the whole hire experience easier to manage."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(23,162,74,0.35)]">
                <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 text-[#17a24a] transition group-hover:bg-[#17a24a] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                <div className="mt-6 inline-flex rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-medium text-[#17a24a]">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Service Areas"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Chandler's Ford service area information"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Chandler's Ford suits customers looking for flexible transport across nearby commuter routes, residential areas and the wider Hampshire network."}</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link key={location.href} href={location.href} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Easy to fit around the commute"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Many local drivers need transport that works around office hours, school runs and regular routines. A hire vehicle can provide the right balance of space and practicality."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Good for changing needs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether a job has grown, a family plan has changed or your own vehicle is unavailable, the service gives you a simple way to keep things moving."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for regional links"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"With easy access towards Southampton, Winchester and other Hampshire destinations, Chandler's Ford is a sensible place to start a hire journey."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Chandler's Ford"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A few practical route notes for hiring a vehicle in Chandler's Ford, with nearby roads and familiar stops that can make collection, refuelling, and onward travel easier to plan."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"For straightforward local driving, School Lane and Oakmount Road are useful reference points close to the centre of Chandler's Ford. If you are heading out towards Leigh Road, the A335 link gives you a clear route into Eastleigh and the surrounding area, which suits everything from small car hire to larger van collections."}</p>
            <p className="text-base leading-8 text-slate-600">{"When you need to top up before setting off, Asda on Bournemouth Road is a handy option nearby, with Eastleigh Service Station on Southampton Road another practical stop for drivers coming or going at busier times. Planning that fuel stop early can save a detour later, especially if you are collecting a van or minibus."}</p>
            <p className="text-base leading-8 text-slate-600">{"For a relaxed local stop, Fleming Park Parkland and Hiltingbury Lakes History are both easy to factor into a day trip, while Premier Inn, Holiday Inn, and Village Hotel Club give a useful spread of visitor-facing landmarks around the wider Eastleigh area. They are sensible points of reference if you are arranging pick-up around an overnight stay or business visit."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your journey extends beyond the town, Woodside Avenue and the nearby roundabouts are worth allowing extra time for at peak periods. Drivers heading out for work, moving jobs, or weekend travel often find it easier to plan around those main local routes, then use a nearby petrol station before returning the vehicle."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Chandler's Ford hire questions answered"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Helpful answers for arranging self-drive vehicle hire in Chandler's Ford."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details key={item.question} className="group border-b border-slate-200 last:border-b-0" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17a24a] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Book your Chandler's Ford vehicle hire"}</h2>
          <p className="mb-8 text-lg text-green-100">{"Tell us what you need and we will help you arrange a vehicle that fits the route, the load and the schedule."}</p>
          <Button size="lg" className="bg-white text-[#17a24a] hover:bg-gray-100" asChild>
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer id="contact" className="border-t bg-gray-900 px-6 py-12 text-gray-400">
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
