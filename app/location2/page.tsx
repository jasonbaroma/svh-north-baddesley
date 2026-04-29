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
  const locationLinks = buildLocationLinks("Romsey");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "A clean hire van parked on a quiet rural lane near Romsey." };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "A hire tipper-style vehicle being loaded with garden materials near Romsey." };
  const faqs = [
    { question: "Is van hire useful in Romsey for moving jobs?", answer: "Yes. Van hire is a practical choice for moving furniture, garden waste or trade materials." },
    { question: "Can I arrange a car for a weekend trip?", answer: "Yes, cars are available for everyday travel, visits and short breaks." },
    { question: "Do you offer minibus hire for group outings?", answer: "Yes. Minibus hire is a good option for family days out, clubs and event travel." },
    { question: "Is truck hire available for larger projects?", answer: "Truck hire can suit heavier loads, larger moves and commercial transport needs." },
    { question: "Can you help with choosing the best vehicle for Romsey?", answer: "Yes. Tell us your plans and we will point you toward a suitable vehicle size." },
  ];
  const trustCards = [
    { title: "Flexible for town and country travel", description: "Handy when your route mixes local roads with longer A-road journeys.", icon: ShieldCheck },
    { title: "Straightforward booking support", description: "A simple way to arrange the right vehicle without wasting time.", icon: Star },
    { title: "Built for everyday tasks", description: "Useful for errands, removals, work visits and family transport.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Flexible travel for everyday journeys" },
    { value: "Van Hire", label: "Practical space for moving and delivery jobs" },
    { value: "Minibus Hire", label: "Ideal for group trips and shared travel" },
    { value: "Truck Hire", label: "Strong transport options for heavier loads" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Good fit for local moves", description: "Romsey customers often need extra space for home projects and delivery runs.", detail: "A van or truck can make one-off jobs far easier to manage." },
    { icon: Clock3, title: "Comfort for planned outings", description: "Choose a car or minibus when the trip is about people rather than parcels.", detail: "Suitable for events, meetings and social travel." },
    { icon: CheckCircle2, title: "Easy to organise around routines", description: "A sensible option when you want hire that fits around work, school runs or appointments.", detail: "Useful for repeat bookings and short-term cover." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire Romsey for Everyday Plans and Bigger Jobs"}</h1>
                <p className="text-xl text-green-100">{"Practical self-drive hire for Romsey customers who need cars, vans, minibuses or trucks for local travel, work commitments and well-planned journeys."}</p>
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
                  {"Romsey hire, kept simple"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Arrange the vehicle that suits your plans"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"From quick local journeys to longer trips across Hampshire, booking should feel clear and manageable. We help you match the vehicle to the job so you can get moving with confidence."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"Local and regional use"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#17a24a]" />
                    {"Personal and business hire"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Trusted by Romsey drivers and businesses"}</h2>
            <p className="text-lg text-muted-foreground">{"A service that stays focused on useful choices, practical support and vehicles that fit real-life transport needs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Romsey vehicle hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"The right vehicle for town routes, work tasks and day trips"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Romsey bookings often need a balance of comfort, load space and dependable handling. Our range is designed to meet those needs without making the process harder than it needs to be, whether you are hiring for a single day or a longer arrangement."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local use cases"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle Hire Romsey for homes, businesses and travel plans"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Romsey is well placed for customers who need a vehicle that can handle a mix of town driving and wider routes. A hired car works for personal trips, while a van or truck gives you the space needed for jobs that would otherwise take too many journeys."}</p>
            <p>{"Many people hire here for practical reasons: moving house, carrying tools, helping with an event or covering a short-term gap in transport. The value is in having a vehicle that matches the task instead of forcing the task to fit the vehicle."}</p>
            <p>{"For group travel, minibus hire can be an easier option than coordinating several cars. It keeps people together and makes collection, parking and route planning simpler when everyone is headed to the same place."}</p>
            <p>{"The booking process stays geared to real-life use. That means sensible guidance, clear vehicle choice and a service that works whether you are a regular business customer or hiring for something a bit more occasional."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Why it helps"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical hire with room to adapt"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A good hire arrangement should make the day easier, not busier. That is why the service is organised around useful vehicles and straightforward support."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Romsey service area information"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Romsey sits within easy reach of a wide mix of local journeys, from residential moves and school runs to business visits and day trips out of town."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Handy for nearby roads"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Romsey drivers often need quick access to the main routes linking the town with surrounding Hampshire destinations. Hiring the right vehicle helps those journeys stay efficient and comfortable."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Well suited to mixed use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"From shopping runs to work vans and passenger vehicles for group travel, the service is broad enough to handle different kinds of Romsey booking without complicating the process."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Support for short and longer hires"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you need transport for a few hours, a full day or longer, it helps to have a hire partner that understands both local needs and trips beyond the town boundary."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and hire advice for Romsey"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A few useful notes for planning a hire around Romsey, with route ideas, fuel stops and central spots that make collection and return straightforward."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Romsey’s centre is easy to navigate once you know the main streets. Market Place sits at the heart of town, with The Hundred, Church Street, Bell Street and The Horsefair all linking through the B3398 corridor. For a self-drive pickup, that gives you a sensible way to head out quickly without lingering on narrow side turns."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are planning a short local run or a longer day’s travel, Broadwater Road is a handy reference point for moving around the town edge. It works well for drivers who want to stay close to the centre before joining wider routes out towards the Hampshire road network. That makes van hire, car hire and small business trips feel more manageable."}</p>
            <p className="text-base leading-8 text-slate-600">{"For visitors staying overnight, The White Horse and The Palmerston Rooms are both useful landmarks when arranging collection nearby. The town also has familiar points of interest such as Lord Palmerston, Charter Stone, Hampshire Rose and the War Horse Memorial, which makes it simple to explain your pickup plans if more than one driver is sharing the vehicle."}</p>
            <p className="text-base leading-8 text-slate-600">{"Before setting off, it is easy to top up nearby at Greatbridge Service Station, with BP, Crampmoor Garage, Kingslake Cars, Sainsbury's and Morrisons also within practical reach for onward travel. Greatbridge Service Station and Greatbridge Rd Service Station are convenient references for meeting points too, especially if you are organising a return on the edge of town."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Romsey hire questions answered"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Clear answers for customers arranging hire in and around Romsey."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Start your Romsey vehicle booking"}</h2>
          <p className="mb-8 text-lg text-green-100">{"Let us know what you need and we will help you choose a suitable vehicle for local travel, moving tasks or business use."}</p>
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
