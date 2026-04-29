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
  const locationLinks = buildLocationLinks("Southampton");
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "A hire van and car on a road with a subtle Southampton port-side backdrop." };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "A business customer loading equipment into a hired van in Southampton." };
  const faqs = [
    { question: "Can I hire a van in Southampton for a day move?", answer: "Yes. Van hire is a common choice for moves, collections and trade work around the city." },
    { question: "Is Southampton suitable for minibus hire?", answer: "It is, especially for group days out, airport runs and club travel that needs extra seats." },
    { question: "Do you cover business customers in Southampton?", answer: "Yes. The service suits deliveries, site visits and temporary vehicle cover for local firms." },
    { question: "What if I need a truck for a heavier job?", answer: "Truck hire can be arranged if you need more capacity for freight, equipment or larger removals." },
    { question: "Is booking straightforward for Southampton hires?", answer: "Yes. Share your dates and vehicle type and we will guide you through the booking." },
  ];
  const trustCards = [
    { title: "City-ready fleet choice", description: "Useful for urban driving, deliveries and larger passenger or load-carrying needs.", icon: ShieldCheck },
    { title: "Practical collection planning", description: "A sensible option when your day includes traffic, tight schedules or multiple stops.", icon: Star },
    { title: "Backed by local knowledge", description: "Helpful for customers who want a simple hire arrangement without guesswork.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Flexible travel for everyday journeys" },
    { value: "Van Hire", label: "Practical space for moving and delivery jobs" },
    { value: "Minibus Hire", label: "Ideal for group trips and shared travel" },
    { value: "Truck Hire", label: "Strong transport options for heavier loads" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Good for city logistics", description: "Southampton users often need vehicles that handle loading, drop-offs and busy roads with ease.", detail: "Useful for retail runs, trade jobs and moving day support." },
    { icon: Clock3, title: "Passenger and cargo options", description: "Choose a vehicle that suits group travel or heavier loads without overcomplicating the booking.", detail: "A practical fit for families, teams and business transport." },
    { icon: CheckCircle2, title: "Flexible for longer routes", description: "Ideal when your plan stretches beyond the city and into the wider Hampshire area.", detail: "Handy for motorway links, coastal trips and regional work." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire Southampton for Local and Regional Travel"}</h1>
                <p className="text-xl text-green-100">{"A straightforward hire service for cars, vans, minibuses and trucks, with options suited to city driving, business use and bigger journeys across the South Coast."}</p>
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
                  {"Southampton bookings made simple"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Choose the vehicle that fits the day"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you are heading into the city centre, collecting stock or moving something larger, booking the right vehicle should be easy to organise. We keep the process clear so you can focus on the journey ahead."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"City and coast coverage"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#17a24a]" />
                    {"Cars, vans, minibuses and trucks"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Reliable hire for Southampton customers"}</h2>
            <p className="text-lg text-muted-foreground">{"A practical service for local residents, travelling groups and businesses that need dependable transport without unnecessary friction."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Southampton vehicle options"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Built for busy city days and wider South Coast travel"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Southampton customers often need transport that can handle a mix of traffic, loading, parking and longer journeys. Our hire range is set up to give you a suitable vehicle for work, family plans or scheduled travel, with clear support along the way."}</p>
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
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle Hire Southampton with room for work, travel and moving jobs"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"In a busy city like Southampton, the right vehicle can make a lot of difference. A compact car is useful for personal travel, while vans, minibuses and trucks give you the extra space needed for commercial work or a bigger group."}</p>
            <p>{"Many bookings in the area are about keeping plans moving without using a private vehicle for the wrong job. That might mean a day van for collections, a minibus for family events or a larger vehicle for equipment and stock."}</p>
            <p>{"The service is also a good fit for people who travel beyond the city. If your route includes the motorway network, the coast or a string of customer visits, it helps to have a vehicle that feels right from the start."}</p>
            <p>{"We aim to keep everything direct, from first enquiry to collection. That makes the hire process easier for customers who value clear choices and a service that stays focused on the practical details."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Why choose us"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Southampton hire that works around your schedule"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A sensible vehicle and a clear booking process help keep city travel manageable, whether the job is personal, commercial or somewhere in between."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Southampton coverage and service support"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Southampton is a natural service area for a flexible hire business, with strong demand from commuters, families and local companies that need transport to match the day’s plan."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for city collections"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Southampton customers often need quick access to a van or car for a same-day task. That could be a retail run, a house move, an office delivery or simply a better-sized vehicle for the day’s route."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Good for local businesses"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"The city’s business activity means there is steady demand for short-term vehicle hire. Vans, trucks and minibuses all have a role to play when schedules change or extra transport is needed."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Easy to fit around travel plans"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you are staying near the docks, heading into the wider city area or travelling out of Hampshire, the aim is to make the vehicle side of the plan feel simple and workable."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Getting around Southampton with ease"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"If you are planning vehicle hire in Southampton, a little local route knowledge goes a long way. The area around the centre is straightforward once you know the main links, and a hired car, van or larger vehicle can make arrivals, collections and onward trips feel much simpler."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"For trips into the centre, Bernard Street, Houndwell Place and Queensway are useful reference points when you are planning a collection or drop-off. Evans Street links neatly toward the A33, which can help if you are heading in or out of the city and want a route that keeps moving without unnecessary detours."}</p>
            <p className="text-base leading-8 text-slate-600">{"The city centre also gives you easy access to practical stop-off points. Texaco on Queensway is close by for a quick refuel, while Costco Gasoline, Asda Express and Tesco Fuel can suit longer schedules if you want to top up before a return journey. For heavier vehicles, the Port of Southampton HGV Refuelling Site is a useful option on the port side."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are staying overnight or meeting people nearby, landmarks such as Castle Gate, Bargate Street and the hotels around Castle Way and High Street make handy navigation markers. Travelodge, The Star Hotel and Juniper Berry are all easy to work into a simple pickup plan when you need to organise a vehicle around a central Southampton visit."}</p>
            <p className="text-base leading-8 text-slate-600">{"For a smoother departure, it can help to think about your route before setting off. St Mary Street and St Mary’s Place feed into the wider city network, and nearby rest points such as Sholing Service Station, Holbury Service Station and Greatbridge Service Station are practical to keep in mind if your hire involves a longer drive or a full day of deliveries."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Common Southampton hire questions"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"A few useful answers for customers booking vehicle hire in Southampton."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book your Southampton hire vehicle"}</h2>
          <p className="mb-8 text-lg text-green-100">{"Tell us what you are planning and we will help you choose a sensible vehicle for city driving, business use or a longer run."}</p>
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
