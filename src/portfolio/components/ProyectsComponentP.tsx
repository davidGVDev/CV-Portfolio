import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { data } from "@/data";
import { useState, useEffect } from "react";

export const ProyectsComponentP = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <FlickeringGrid
        className="flickering-grid"
        squareSize={4}
        gridGap={9}
        color="#eee"
        maxOpacity={0.8}
        flickerChance={0.2}
      />

      <div className="proyects-container">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {data.proyects.map((proyect) => (
              <CarouselItem key={proyect.alt}>
                <div className="proyects-container-item">
                  <div className="proyects-container-title">
                    <h2>{proyect.name}</h2>
                  </div>
                  <img
                    className="proyect-image"
                    src={proyect.path}
                    alt={proyect.alt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-prev-button" />
          <CarouselNext className="carousel-next-button" />
          
          <div className="carousel-indicators">
            {data.proyects.map((_, index) => (
              <div
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </>
  );
};
