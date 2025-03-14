"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (emblaApi) {
        onSelect(emblaApi);
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
      }
    }, [emblaApi, onSelect]);

    React.useEffect(() => {
      if (emblaApi && setApi) {
        setApi(emblaApi);
      }
    }, [emblaApi, setApi]);

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        <div
          ref={emblaRef}
          className="overflow-hidden"
          dir="ltr"
        >
          <div
            className={cn(
              "flex",
              orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            )}
          >
            {children}
          </div>
        </div>
        {canScrollPrev && (
          <CarouselPrevious
            onClick={scrollPrev}
            className="left-4"
          />
        )}
        {canScrollNext && (
          <CarouselNext
            onClick={scrollNext}
            className="right-4"
          />
        )}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1", className)} {...props} />
));
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-roledescription="slide"
    className={cn(
      "min-w-0 shrink-0 grow-0 basis-full pl-4",
      className
    )}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn(
      "absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
      className
    )}
    {...props}
  >
    <ArrowLeft className="h-4 w-4" />
    <span className="sr-only">Previous slide</span>
  </Button>
));
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    size={size}
    className={cn(
      "absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
      className
    )}
    {...props}
  >
    <ArrowRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </Button>
));
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
