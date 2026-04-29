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
  const locationLinks = buildLocationLinks("Totton");
  const heroImage = { src: "/images/location5-image1.jpeg", alt: "A clean hire vehicle on a road beside woodland near Totton." };
  const supportImage = { src: "/images/location5-image2.jpeg", alt: "People loading furniture into a hired Luton van on a residential drive in Totton." };
  const faqs = [
    { question: "Is Totton convenient for van hire?", answer: "Yes. Van hire is a practical option for moving, deliveries and local work around Totton." },
    { question: "Can I hire a car for a coastal or forest trip?", answer: "Yes. A hire car can suit day trips, family outings and longer drives." },
    { question: "Do you offer minibuses for larger groups?", answer: "Yes. Minibus hire is useful for group travel, events and organised outings." },
    { question: "What if I need a truck for a bigger job?", answer: "Truck hire can help with heavier loads, removals and business transport." },
    { question: "How do I decide which vehicle is best?", answer: "Share your plans and we will help you choose a vehicle that fits the task." },
  ];
  const trustCards = [
    { title: "Handy for New Forest access", description: "A useful base for drivers heading towards forest roads, town routes or the coast.", icon: ShieldCheck },
    { title: "Suitable for work and leisure", description: "Flexible enough for trade jobs, outings and day-to-day travel.", icon: Star },
    { title: "Clear and practical service", description: "Designed to keep booking simple and vehicle choice sensible.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Flexible travel for everyday journeys" },
    { value: "Van Hire", label: "Practical space for moving and delivery jobs" },
    { value: "Minibus Hire", label: "Ideal for group trips and shared travel" },
    { value: "Truck Hire", label: "Strong transport options for heavier loads" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Useful for varied routes", description: "Totton journeys can lead into town, towards the forest or onto wider Hampshire roads.", detail: "A hire vehicle that suits the route makes the day easier to manage." },
    { icon: Clock3, title: "Good for loads and passengers", description: "Choose the space you need, whether that means extra seats or a larger cargo area.", detail: "Practical for family plans, moving jobs and work use." },
    { icon: CheckCircle2, title: "Flexible for short notice", description: "A helpful option when transport needs change quickly and you need a workable solution.", detail: "Useful for temporary cover and one-off bookings." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire Totton for Local Trips and Practical Transport"}</h1>
                <p className="text-xl text-green-100">{"Self-drive hire for Totton customers who want cars, vans, minibuses or trucks that are easy to arrange and useful for real-day travel."}</p>
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
                  {"Totton bookings made easy"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Pick the right vehicle for the journey"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"From local errands to longer runs across Hampshire, a well-chosen hire vehicle can save time and reduce stress. We help make the booking feel clear from the outset."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#17a24a]" />
                    {"Forest and coast travel"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#17a24a]" />
                    {"Local, personal, and business hire"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Totton hire with a practical focus"}</h2>
            <p className="text-lg text-muted-foreground">{"A straightforward service that gives you useful choices for private trips, work needs and larger transport tasks."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Totton vehicle hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"A sensible choice for moving, commuting and day trips"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Totton customers often need transport that works across different kinds of journeys. Our hire range is broad enough to support everyday use while staying simple to arrange."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local use guide"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle Hire Totton for everyday needs, group travel and bigger loads"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Totton sits in a useful spot for drivers who need to move between residential areas, the New Forest and the Southampton side of Hampshire. That makes it a strong place to arrange a hire vehicle that suits multiple kinds of journey."}</p>
            <p>{"A car can handle day-to-day travel comfortably, while a van or truck gives you the extra room needed for deliveries, house moves or work projects. The aim is always to match the vehicle to the task at hand."}</p>
            <p>{"For groups, minibus hire can make outings and event travel simpler by keeping everyone together in one vehicle. It also cuts down on parking and coordination problems when the plan involves several passengers."}</p>
            <p>{"The booking process is kept grounded and useful. That means clear guidance, sensible vehicle options and a service that works whether you are a regular customer or arranging something one-off."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Why it helps"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Flexible hire for everyday Totton journeys"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"When you need transport that fits the day rather than complicating it, a well-matched hire vehicle can make a real difference."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Totton coverage and support"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Totton is a practical base for customers who need hire vehicles for local jobs, longer routes and a mix of personal and commercial use."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for local routes"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Totton drivers often split their time between local roads and routes towards Southampton or the New Forest, so choosing a suitable vehicle can save effort across the whole day."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Ready for different tasks"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"From shopping runs to trade deliveries, the service covers the kind of varied bookings that happen in a busy town area."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Easy to organise around the week"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether the hire is for a single day or a longer stretch, the process is designed to stay clear and manageable for customers with busy schedules."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hiring around Totton"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A few practical notes for planning vehicle hire in Totton, with route tips and familiar stops that make local journeys easier to organise."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Totton sits close to a useful spread of main routes, so collection works well for everyday town driving and longer cross-city trips alike. Junction Road and Commercial Road are close by for straightforward local access, while Ringwood Road and Redbridge Causeway give you a cleaner run toward Southampton and beyond."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are heading out for a stay, Brimar Guest House and Holiday Inn Express Southampton West are easy reference points for planning pickups and drop-offs around guest travel. That makes the area practical for visitors who need a car, van, or minibus without losing time on awkward detours."}</p>
            <p className="text-base leading-8 text-slate-600">{"For leisure trips, Eling Tide Mill Experience Visitor Centre, Eling Tide Mill, and Goatee Shore sit neatly into a day out by the water. They also suit drivers who want a compact hire vehicle for local sightseeing, with enough space for bags, picnic gear, or family kit."}</p>
            <p className="text-base leading-8 text-slate-600">{"When refuelling or topping up before a journey, Totton has a sensible mix nearby, including Tesco Fuel, Morrisons, Asda Express, Shell, and the Port of Southampton HGV Refuelling Site. Calmore Service Station is another useful stop if you are planning a heavier run or heading out early."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#17a24a]">{"FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Totton hire questions made clear"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"A few practical answers for customers booking in Totton and the surrounding area."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Start your Totton vehicle hire booking"}</h2>
          <p className="mb-8 text-lg text-green-100">{"Let us know your plans and we will help you choose a vehicle that works for the route and the task."}</p>
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
