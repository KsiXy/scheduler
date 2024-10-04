"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content:
      "Scheduler has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
    image: "https://avatar.iran.liara.run/public/44",
  },
  {
    name: "David Lee",
    role: "Freelance Designer",
    content:
      "As a freelancer, Scheduler helps me stay organized and professional. My clients love how easy it is to book time with me.",
    image: "https://avatar.iran.liara.run/public/57",
  },
  {
    name: "Emily Chen",
    role: "Startup Founder",
    content:
      "Scheduler streamlined our hiring process. Setting up interviews has never been easier!",
    image: "https://avatar.iran.liara.run/public/39",
  },
  {
    name: "Michael Brown",
    role: "Sales Executive",
    content:
      "I've seen a 30% increase in my meeting bookings since using Scheduler. It's a game-changer for sales professionals.",
    image: "https://avatar.iran.liara.run/public/82",
  },
];

function Testimonials() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className=" text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex flex-col items-center mt-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.split(" ").map((n) => n[0])}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Testimonials;
