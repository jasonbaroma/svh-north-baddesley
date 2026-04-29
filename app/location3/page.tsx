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
  const locationLinks = buildLocationLinks("Winchester");
  const heroImage = { src: "/images/location3-image1.jpeg", alt: "A modern hire car driving through a historic street in Winchester." };
  const supportImage = { src: "/images/location3-image2.jpeg", alt: "A family loading bags into a hired estate car in Winchester." };
  const faqs = [
    { question: "Is car hire a good option for Winchester city driving?", answer: "Yes. A car can be ideal for day-to-day travel, appointments and visiting the city centre." },
    { question: "Can I hire a van for a house move in Winchester?", answer: "Yes. Van hire is well suited to moving furniture, boxes and other household items." },
    { question: "Do you offer minibuses for family or group travel?", answer: "Yes. Minibus hire works well for trips, events and school or club travel." },
    { question: "What kind of truck hire is available?", answer: "Truck hire is useful for heavier loads, commercial deliveries and larger moving jobs." },
    { question: "Can I get help choosing the right vehicle size?", answer: "Yes. We can help you match the vehicle to the trip so you book something suitable." },
  ];
  const trustCards = [
    { title: "Useful around the city and beyond", description: "A strong choice for Winchester trips that mix town streets with out-of-town routes.", icon: ShieldCheck },
    { title: "Clear vehicle selection", description: "Pick the size and type that fits the plan rather than working around a poor match.", icon: Star },
    { title: "Support for private and trade use", description: "Suitable for homes, offices, events and everyday transport needs.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Flexible travel for everyday journeys" },
    { value: "Van Hire", label: "Practical space for moving and delivery jobs" },
    { value: "Minibus Hire", label: "Ideal for group trips and shared travel" },
    { value: "Truck Hire", label: "Strong transport options for heavier loads" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Good for city access", description: "Winchester drivers often need vehicles that are manageable in town but still comfortable for longer trips.", detail: "Handy for appointments, shopping and family travel." },
    { icon: Clock3, title: "Room for group plans", description: "A minibus can simplify travel when several people are heading to the same place.", detail: "Useful for days out, events and organised trips." },
    { icon: CheckCircle2, title: "Space for heavier tasks", description: "Choose a van or truck when your job involves boxes, equipment or stock rather than passengers.", detail: "A practical option for removals and commercial runs." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire Winchester for Comfortable Local and Longer-Distance Travel"}</h1>
                <p className="text-xl text-green-100">{"From compact cars to larger vans, minibuses and trucks, our Winchester vehicle hire options are built to support city journeys, business needs and plans that reach further afield."}</p>
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
                  {"Winchester hire support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book a vehicle that suits the route ahead"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you are travelling across the city, heading to a meeting or planning a bigger journey, the aim is to make booking straightforward and the vehicle choice obvious."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"Suitable for short and longer hires"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#17a24a]" />
                    {"Choice for work or personal use"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Winchester customers choose practical hire"}</h2>
            <p className="text-lg text-muted-foreground">{"A dependable option when you want a sensible vehicle, a clear booking process and support that keeps the day moving."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Winchester vehicle hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"A flexible range for city trips, removals and business travel"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Winchester brings together commuter routes, city-centre driving and varied travel needs. Our hire range is shaped around that mix, giving you useful options whether the plan is simple or a little more demanding."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local hire details"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle Hire Winchester with the right balance of comfort and capacity"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Winchester customers often need a vehicle that feels at home in town but still performs well on the surrounding road network. A hire car can be ideal for everyday use, while a van or truck makes bigger tasks easier to manage."}</p>
            <p>{"There is also steady demand for passenger vehicles that can keep groups together without the hassle of using multiple cars. That makes minibus hire a practical solution for shared plans, events and organised travel."}</p>
            <p>{"For work use, the right hire vehicle can support site visits, deliveries and temporary cover when your own transport is unavailable. The key is choosing something that matches the day rather than overcommitting to a larger vehicle than needed."}</p>
            <p>{"The hire process is kept focused on the essentials. That means sensible guidance, clear options and a straightforward booking experience for anyone who wants transport without unnecessary complication."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Why it suits Winchester"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hire that adapts to city life and busy schedules"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Whether you need a vehicle for a short local journey or a more involved booking, flexibility and practicality are what matter most."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Winchester coverage and hire support"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Winchester is a strong service area for people who need transport for daily life, work commitments and travel that stretches across Hampshire or further."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"City-centre friendly options"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"The right vehicle can make Winchester city driving less stressful, especially when parking, loading or meeting tight schedules are part of the plan."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible for regional travel"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Many customers use Winchester as a base for journeys towards Southampton, Basingstoke, Andover or the South Downs, so having the right hire vehicle matters."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for planned and last-minute needs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether the booking is arranged well in advance or needed to fill a gap, the service is designed to keep things simple and workable for the customer."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Winchester with a hire vehicle"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A few practical notes for planning vehicle hire in Winchester, with routes, landmarks and fuel stops that make everyday driving a little easier."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"If you are collecting a hire vehicle in the city centre, the approach around Upper Brook Street, Saint George's Street and Friarsgate is best treated with a little extra time. These are busy central streets, so it helps to plan your pickup and departure outside the rush where possible and get your route set before you leave the forecourt."}</p>
            <p className="text-base leading-8 text-slate-600">{"For local stays and short business journeys, Winchester’s centre puts you close to practical stopping points such as the Mercure Winchester Wessex Hotel and Travelodge Winchester, with Curle's Passage and the County War Memorial giving you easy reference points when you are navigating back into town. That makes the area straightforward for guest transfers, meeting runs and same-day deliveries."}</p>
            <p className="text-base leading-8 text-slate-600">{"When you need to refuel before heading out, there are several familiar options within easy reach, including BP, St Cross Road Filling Station, Tesco, Sainsbury's and Harestock Garage. For longer trips, it is worth topping up early so you can leave the city prepared rather than searching for fuel once you are already on the move."}</p>
            <p className="text-base leading-8 text-slate-600">{"A hire van, car or minibus is useful here whether you are moving across the city or heading further afield on Hampshire roads. Pittvale Service Station can also serve as a handy final stop on the way out, especially if you are joining a wider route after a local collection and want everything sorted before you travel."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Winchester hire questions at a glance"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Helpful answers for arranging self-drive hire in Winchester."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Arrange your Winchester vehicle hire"}</h2>
          <p className="mb-8 text-lg text-green-100">{"Speak to us about the journey you have in mind and we will help you choose a vehicle that suits it well."}</p>
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
