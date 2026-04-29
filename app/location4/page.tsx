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
  const locationLinks = buildLocationLinks("Eastleigh");
  const heroImage = { src: "/images/location4-image1.jpeg", alt: "A hire van on a road near Eastleigh with a travel-focused backdrop." };
  const supportImage = { src: "/images/location4-image2.jpeg", alt: "A staff member checking a clean hire van on a forecourt in Eastleigh." };
  const faqs = [
    { question: "Is Eastleigh a good place for van hire?", answer: "Yes. Van hire is useful for moving jobs, collections and local trade work around town." },
    { question: "Can I hire a car for airport or station travel?", answer: "Yes. A hire car can suit airport runs, station pickups and everyday travel." },
    { question: "Do you offer minibus hire for groups?", answer: "Yes. Minibuses are available for family events, clubs and organised trips." },
    { question: "What if I need a truck for work?", answer: "Truck hire can support heavier loads, deliveries and larger commercial tasks." },
    { question: "How quickly can I arrange a booking?", answer: "Get in touch with your dates and vehicle type and we will take it from there." },
  ];
  const trustCards = [
    { title: "Handy for travel hubs", description: "Useful when journeys need to connect neatly with stations, airports or nearby roads.", icon: ShieldCheck },
    { title: "Practical fleet choice", description: "A range that suits commuters, families and local businesses alike.", icon: Star },
    { title: "Simple support when plans change", description: "A sensible option if your trip details need a little flexibility.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Flexible travel for everyday journeys" },
    { value: "Van Hire", label: "Practical space for moving and delivery jobs" },
    { value: "Minibus Hire", label: "Ideal for group trips and shared travel" },
    { value: "Truck Hire", label: "Strong transport options for heavier loads" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Well placed for busy schedules", description: "Eastleigh customers often need a vehicle that keeps up with work, travel and family plans.", detail: "A hire car, van or minibus can reduce the strain on the day." },
    { icon: Clock3, title: "Good for moving and deliveries", description: "Choose a van or truck when you need practical space for cargo or equipment.", detail: "Useful for home moves, retail runs and site work." },
    { icon: CheckCircle2, title: "Useful for group transport", description: "Minibus hire keeps passengers together and makes coordinated travel easier.", detail: "Ideal for outings, events and club trips." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire Eastleigh for Flexible Local Travel"}</h1>
                <p className="text-xl text-green-100">{"A practical hire service for Eastleigh customers needing cars, vans, minibuses or trucks for work, family plans and everyday journeys."}</p>
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
                  {"Eastleigh vehicle hire"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Choose a hire option that suits your schedule"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"When you need transport around Eastleigh, the main thing is finding a vehicle that fits the plan without causing extra hassle. We keep booking clear, direct and useful."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"Support for local and regional use"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Reliable hire for Eastleigh journeys"}</h2>
            <p className="text-lg text-muted-foreground">{"A practical service for customers who want the right vehicle and a simple way to arrange it."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Eastleigh hire options"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicles that work for commuting, moving and group travel"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Eastleigh has strong transport links and a mix of travel needs, from station runs to local business jobs. Our hire range is designed to support that variety with sensible options and straightforward service."}</p>
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
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle Hire Eastleigh for everyday needs and bigger tasks"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Eastleigh’s location makes it useful for commuters, shoppers and businesses that need flexible transport. A hire car can cover everyday journeys, while a van or truck makes heavier jobs far more manageable."}</p>
            <p>{"With Southampton Airport and the railway network nearby, there is regular demand for vehicles that support airport runs, station pickups and short-notice travel. That is where a straightforward hire service really helps."}</p>
            <p>{"Minibus hire also has an obvious place here, especially for group events, day trips and coordinated travel where keeping everyone together is the easiest solution."}</p>
            <p>{"The focus stays on matching the vehicle to the purpose, whether that is a quick local run or a more involved booking with several moving parts. It keeps the process useful rather than overcomplicated."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Why it works"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"A hire service suited to Eastleigh’s pace"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"When your day is already busy, the vehicle side should feel straightforward. That is the idea behind the way these hire options are set up."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Eastleigh service area details"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Eastleigh is well positioned for a broad range of hire customers, including commuters, local residents and businesses moving around the central Hampshire corridor."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Strong links for travel"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Eastleigh works well for drivers heading towards Southampton, Winchester or the wider motorway network, making it a useful place to pick up the right vehicle for the trip."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for short-term needs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"A hired car, van, minibus or truck can help when your usual transport is unavailable or when the job simply calls for something different."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Convenient for mixed schedules"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether the hire supports work, family plans or a one-off moving task, the service is set up to keep the arrangement practical and easy to follow."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Local guide for Vehicle Hire Eastleigh"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A few practical notes for hiring in Eastleigh, with route ideas and local stopovers that make collection and onward travel easier to plan."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Eastleigh sits well for straightforward departures onto Stoneham Way and the Stoneham Interchange, while Passfield Avenue and Bishopstoke Road are useful for reaching nearby residential and business areas without unnecessary detours. If you are heading out with a car, van, minibus or truck, it helps to plan your first few miles around the road type and traffic flow rather than just the shortest line on the map."}</p>
            <p className="text-base leading-8 text-slate-600">{"For local errands or work trips, Stoneham Lane and Twyford Road give you a sensible link across the area, while the A335 corridor is handy when you want a clean run towards Southampton or the wider Hampshire network. Drivers collecting a larger vehicle often prefer to sort fuel stops early, with Eastleigh Service Station on Southampton Road and the nearby Asda forecourt both practical choices for topping up."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your plans include a hotel stop or a meeting near the station side of town, Ellington Lodge at The Concorde is a useful reference point, and Monks Brook Halt gives a simple marker for the local transport area. For a bit of context on the area, the Spitfire installation and the boards at Welcome to Avenue Park, North Stoneham and Welcome to Fleming Park Tiny Forest sit close enough to help you orient yourself without complicating the route."}</p>
            <p className="text-base leading-8 text-slate-600">{"Before a longer drive, it is worth using one of the nearby fuel stops in the way that suits your route. West End Service Station can work well for drivers heading west or back towards Southampton, while ESSO, Sainsbury's and Shell all give you additional options a little further out. If you need a pause between jobs, Broad Oak Service Station is another familiar point to keep in mind while you map out the day."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Eastleigh hire questions answered"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Clear, practical answers for self-drive hire in Eastleigh."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book your Eastleigh hire vehicle today"}</h2>
          <p className="mb-8 text-lg text-green-100">{"Tell us what you need and we will help you arrange a suitable vehicle for the trip, job or event."}</p>
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
