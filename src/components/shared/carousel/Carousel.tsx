import React, { JSX } from 'react';
import { DotButton, useDotButton } from './CarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselNavButton';
import useEmblaCarousel from 'embla-carousel-react';
import clsx from 'clsx';

export default function Carousel({
  images,
}: {
  images?: string[];
}): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {images?.map((src, index) => (
            <div key={index} className='embla__slide'>
              <img alt='' src={src} />
            </div>
          ))}
        </div>
      </div>

      {/* Not wrapped in a container because it will cover up the carousel. Which disables the panning movement */}
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'embla__dot',
              index === selectedIndex && ' embla__dot--selected',
            )}
          />
        ))}
      </div>
    </section>
  );
}
